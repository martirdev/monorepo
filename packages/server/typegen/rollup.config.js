import { dts } from "rollup-plugin-dts";

const config = [
  {
    input: "src/routes/app.ts",
    output: [{ file: "typegen/api.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
