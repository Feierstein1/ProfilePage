import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react-hooks/exhaustive-deps": "warn", // Changes it from error to warning
      "@typescript-eslint/no-unused-vars": "off", // Disables this rule
      "react/no-unescaped-entities": "off", // Disables warning for unescaped quotes in JSX
      "@typescript-eslint/no-explicit-any": "off" // Disables warning for any used for typing
    },
  },
];

export default eslintConfig;
