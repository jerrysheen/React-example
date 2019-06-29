/***
 * @file config-overrides.js
 * @author JS
 * 基于customize和react-app-rewired的定制化配置文件
 ***/

const { override, fixBabelImports, addLessLoader } = require('customize-cra');

//与antd进行对接使用
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    tyle: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);