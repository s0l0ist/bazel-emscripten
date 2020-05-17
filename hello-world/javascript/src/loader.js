/**
 * Emscripten initializer
 * @param {Function} bin Emscripten import
 */
export const createLoader = async (bin) => {
  const library = await bin();
  return {
    library,
  };
};
