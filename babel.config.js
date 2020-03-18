/* eslint-disable func-names */
const plugins = [
  'transform-class-properties',
  '@babel/plugin-syntax-dynamic-import',
  'babel-plugin-styled-components',
];

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
  ];

  return {
    presets,
    plugins,
  };
};
