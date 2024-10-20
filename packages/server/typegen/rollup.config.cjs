const { dts } = require("rollup-plugin-dts");

const config = [
  {
    input: "src/routes/shop/index.ts",
    output: [{ file: "typegen/hono-api.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
