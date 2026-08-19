/**
 * Generates a 384-dimensional vector embedding for the input text
 * using Hugging Face Inference API (sentence-transformers/all-MiniLM-L6-v2).
 * 
 * @param {string} text
 * @returns {Promise<number[]>}
 */
async function generateEmbedding(text) {
  if (!text || typeof text !== 'string' || !text.trim()) {
    return [];
  }

  const hfApiKey = process.env.HUGGINGFACE_API_KEY;
  if (!hfApiKey) {
    console.warn('[Embedding Warning] HUGGINGFACE_API_KEY environment variable is not configured.');
    return [];
  }

  const endpoint = 'https://router.huggingface.co/hf-inference/models/sentence-transformers/all-MiniLM-L6-v2/pipeline/feature-extraction';

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${hfApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: text.trim(),
        options: { wait_for_model: true },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Embedding Error] Hugging Face API returned HTTP ${response.status}:`, errorText);
      return [];
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      // Hugging Face feature-extraction returns number[] or number[][]
      if (Array.isArray(data[0])) {
        return data[0];
      }
      return data;
    }

    console.error('[Embedding Error] Unexpected response format from Hugging Face API:', data);
    return [];
  } catch (error) {
    clearTimeout(timeoutId);
    if (error && error.name === 'AbortError') {
      console.error('[Embedding Error] Hugging Face API request timed out after 10 seconds.');
    } else {
      console.error('[Embedding Error] Hugging Face API fetch failed:', error?.message || error, error);
    }
    return [];
  }
}

module.exports = {
  generateEmbedding,
};
