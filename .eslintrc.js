module.exports = {
  extends: ['universe/node'],
  rules: {
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc' },
      },
    ],
  },
};
