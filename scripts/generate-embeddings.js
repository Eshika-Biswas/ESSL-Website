require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const { generateEmbedding } = require('../lib/embeddings');

async function main() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in .env.local');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  console.log('Loading local embedding model (Xenova/all-MiniLM-L6-v2)...');
  console.log('(Note: First run automatically downloads ~90MB model files locally)\n');

  console.log('Fetching products with null embedding from Supabase...');
  const { data: products, error } = await supabase
    .from('products')
    .select('id, description')
    .is('embedding', null);

  if (error) {
    console.error('Error fetching products from Supabase:', error.message);
    process.exit(1);
  }

  if (!products || products.length === 0) {
    console.log('No products found with null embedding. All products are up to date!');
    return;
  }

  const total = products.length;
  console.log(`Found ${total} product(s) needing embeddings.\n`);

  const BATCH_SIZE = 20;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let processedCount = 0;
  let successCount = 0;
  let failureCount = 0;

  for (let i = 0; i < total; i += BATCH_SIZE) {
    const batch = products.slice(i, i + BATCH_SIZE);
    console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} items)...`);

    for (const product of batch) {
      processedCount++;
      const text = product.description ? product.description.trim() : '';

      if (!text) {
        console.warn(`[Skip] Product ID ${product.id} has an empty description.`);
        continue;
      }

      try {
        const embedding = await generateEmbedding(text);

        const { error: updateError } = await supabase
          .from('products')
          .update({ embedding })
          .eq('id', product.id);

        if (updateError) {
          console.error(`[Error] Failed to update product ID ${product.id} in Supabase:`, updateError.message);
          failureCount++;
        } else {
          successCount++;
          console.log(`Processed ${processedCount}/${total} products (Updated Product ID ${product.id})`);
        }
      } catch (err) {
        console.error(`[Error] Failed to generate local embedding for product ID ${product.id}:`, err.message || err);
        failureCount++;
      }
    }

    if (i + BATCH_SIZE < total) {
      await sleep(200);
    }
  }

  console.log('\nLocal embedding generation completed!');
  console.log(`Total: ${total} | Success: ${successCount} | Failures: ${failureCount}`);
}

main().catch((err) => {
  console.error('Unhandled script error:', err);
  process.exit(1);
});
