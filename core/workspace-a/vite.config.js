const { createVuePlugin } = require('vite-plugin-vue2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const path = require('path');

module.exports = {
  plugins: [
    nodeResolve({
      moduleDirectories: ["../node_modules", path.join(process.cwd(), '../node_modules')]
    }),
    createVuePlugin({
    })
  ],
};
