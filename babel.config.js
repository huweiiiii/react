
module.exports = (api) => {
  const isDev = api.env() === 'development';
  api.cache(isDev);
  return {
    presets: [
      "@babel/preset-react",
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3
        },
      ],
      [
        "@babel/preset-typescript", // 引用Typescript插件
        {
          isTSX: true,
          allExtensions: true, // 支持所有文件扩展名
        },
      ]
    ],
    plugins: [
      "@babel/plugin-transform-react-jsx-source",
      isDev && require.resolve('react-refresh/babel'),
      [
        '@babel/plugin-transform-runtime', {
          corejs: 3
        }
      ]
    ].filter(Boolean),
  };
};
