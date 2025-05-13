import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], 
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Disable the 'react/react-in-jsx-scope' rule
      'react/react-in-jsx-scope': 'off',
      
      // Disable the '@typescript-eslint/no-explicit-any' rule
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);
