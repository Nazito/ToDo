module.exports = {
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'project': ['tsconfig.json'],
    'tsconfigRootDir': __dirname,
    'sourceType': 'module',
  },
  'env': {
    'browser': true,
    'node': true,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'moduleDirectory': ['node_modules', 'src/'],
      },
    },
  },
  'extends': [
    '@wemake-services/typescript/recommended',
    '@wemake-services/javascript',
  ],
  'plugins': ['import', 'react', 'jsx-a11y', '@typescript-eslint', 'prettier'],
  'rules': {
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/named': 'off',
    'max-len': 'off',
  },
}
