/***
 * @file config-overrides.js
 * @author JS
 * 基于customize和react-app-rewired的定制化配置文件
 ***/

const { override, 
        fixBabelImports, 
        addLessLoader,
        addDecoratorsLegacy 
      } = require('customize-cra');
const modifyVars = require('./modifyVars')
//与antd进行对接使用
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addDecoratorsLegacy(),
  addLessLoader({
    javascriptEnabled: true,
    //modifyVars:modifyVars
  }),
);