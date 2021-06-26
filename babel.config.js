module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-typescript'],
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '': './',
          },
        },
      ],
    ],
  };
};
