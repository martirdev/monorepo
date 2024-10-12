import pluginJs from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  perfectionist.configs["recommended-alphabetical"],
  {
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          customGroups: { type: {}, value: {} },
          environment: "node",
          groups: ["external", "internal", ["parent", "sibling"], "unknown"],
          ignoreCase: true,
          internalPattern: ["@/**"],
          maxLineLength: undefined,
          newlinesBetween: "always",
          order: "asc",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          customGroups: {
            callback: "on*",
          },
          groups: ["multiline", "unknown", "callback", "shorthand"],
          order: "asc",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-object-types": [
        "error",
        {
          customGroups: {
            callback: "on*",
            partial: "*?",
          },
          groupKind: "required-first",
          groups: ["multiline", "unknown", "callback", "partial"],
          order: "asc",
          type: "alphabetical",
        },
      ],
      "react/prop-types": 0,
      "react/react-in-jsx-scope": 0,
    },
  },
];
