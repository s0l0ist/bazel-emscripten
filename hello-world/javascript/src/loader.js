/*
 * Emscripten output contains this callback (onRuntimeInitialized)
 * which fires when the library is fully initialized.
 *
 * We're simply converting this into a promise.
 */
const waitUntilReady = (src) =>
  new Promise((resolve) => (src.onRuntimeInitialized = resolve));

export const createLoader = async (bin) => {
  const library = bin();
  await waitUntilReady(library);
  return {
    library,
  };
};
