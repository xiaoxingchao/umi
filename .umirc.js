
// ref: https://umijs.org/config/
export default {
  es5ImcompatibleVersions: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: true,
        antd: true,
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
          ],
        },
        dll: {
          exclude: [],
          include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"],
        },
        hardSource: /* isMac */process.platform === 'darwin',
      },
    ],
  ],
  // theme: "./theme.config.js",
  // 接口代理示例
  proxy: {
    "/api/v1/weather": {
      "target": "https://api.seniverse.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api/v1/weather": "/v3/weather" }
    },
  },
  alias: {
    // themes: resolve(__dirname, './src/themes'),
    // components: resolve(__dirname,"./src/components"),
    // utils: resolve(__dirname,"./src/utils"),
    // config: resolve(__dirname,"./src/utils/config"),
    // enums: resolve(__dirname,"./src/utils/enums"),
    // services: resolve(__dirname,"./src/services"),
    // models: resolve(__dirname,"./src/models"),
    // routes: resolve(__dirname,"./src/routes"),
  },
}
