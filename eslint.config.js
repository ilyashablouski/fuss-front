import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginImportTypescript from 'eslint-plugin-import-typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  {
    plugins: { 'jsx-a11y': jsxA11y },
    rules: jsxA11y.configs.recommended.rules,
  },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },

  {
    // @see https://www.npmjs.com/package/eslint-plugin-import-typescript
    files: ['**/*.astro'],
    plugins: {
      'import-typescript': eslintPluginImportTypescript,
    },
    rules: {
      // Note: This still allows same folder imports to use relative paths. If we want to turn those off too, we need the rule 'no-relative-import'
      'import-typescript/no-relative-parent-imports': ['warn', { onlyPathsImport: true }],
    },
  },
];
