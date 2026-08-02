set search_path to public, vector;

create or replace function match_products (
  query_embedding vector(384),
  match_threshold float default 0.3,
  match_count int default 5
)
returns table (
  id text,
  category text,
  vendor text,
  product_line text,
  model text,
  description text,
  similarity float
)
language sql stable
as $$
  select
    products.id,
    products.category,
    products.vendor,
    products.product_line,
    products.model,
    products.description,
    1 - (products.embedding <=> query_embedding) as similarity
  from products
  where 1 - (products.embedding <=> query_embedding) > match_threshold
  order by products.embedding <=> query_embedding
  limit match_count;
$$;
