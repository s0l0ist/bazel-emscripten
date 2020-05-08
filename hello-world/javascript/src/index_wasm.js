import helloWorldWasmLibrary from "../bin/hello-world-wasm";

import { createLoader } from "./loader";

import { LocalTimeImpl } from "./implementation/localtime";
import { GreetImpl } from "./implementation/greet";

/**
 * Main export for the library
 */
export default async () => {
  const { library } = await createLoader(helloWorldWasmLibrary);

  return {
    LocalTime: LocalTimeImpl(library),
    Greet: GreetImpl(library),
  };
};
