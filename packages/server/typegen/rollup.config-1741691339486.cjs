'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const { dts } = require("rollup-plugin-dts");

const config = [
  {
    input: "src/routes/shop/index.ts",
    output: [{ file: "typegen/shop.d.ts", format: "es" }],
    plugins: [dts()],
  },
  {
    input: "src/index.ts",
    output: [{ file: "typegen/all.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

exports.default = config;
