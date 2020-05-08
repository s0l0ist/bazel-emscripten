import helloWorldJsLibrary from "../bin/hello-world-js";

import { createLoader } from "./loader";

import { LocalTimeImpl } from "./implementation/localtime";
import { GreetImpl } from "./implementation/greet";

/**
 * Main export for the library
 */
export default async () => {
  const { library } = await createLoader(helloWorldJsLibrary);

  return {
    LocalTime: LocalTimeImpl(library),
    Greet: GreetImpl(library),
  };
};
