import { terser } from "rollup-plugin-terser";

const variants = ["wasm"];
const formats = ["umd", "es"];

const outputs = variants.reduce(
  (acc, variant) => [
    ...acc,
    {
      input: `hello-world/javascript/src/index_${variant}.js`,
      output: formats.reduce(
        (acc, format) => [
          ...acc,
          {
            file: `hello-world/javascript/dist/${variant}/${format}/index.js`,
            sourcemap: true,
            format,
            name: "HelloWorld",
            plugins: [terser()],
          },
        ],
        []
      ),
    },
  ],
  []
);

export default outputs;
