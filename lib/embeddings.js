let extractor = null;

/**
 * Generates a 384-dimensional vector embedding for the input text
 * using the local Xenova/all-MiniLM-L6-v2 model.
 * 
 * @param {string} text
 * @returns {Promise<number[]>}
 */
async function generateEmbedding(text) {
  if (!text || typeof text !== 'string' || !text.trim()) {
    return [];
  }

  if (!extractor) {
    const { pipeline, env } = await import('@xenova/transformers');
    env.backends.onnx.wasm.numThreads = 1;
    extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  }

  const output = await extractor(text.trim(), { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

module.exports = {
  generateEmbedding,
};
