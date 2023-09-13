const babel = require("@babel/core");
function loader(sourceCode, inputSourceMap, inputAst) {
  const useOptions = this.getOptions();
  //正在处理的文件的绝对路径
  const filename = this.resourcePath;
  const options = {
    filename,
    inputSourceMap,
    sourceMaps: true, //是否生成sourcemap
    sourceFileName: filename,
    ast: true,
  };
  const config = babel.loadPartialConfig(options);
  if (config) {
    let result = babel.transformSync(sourceCode, config.options);
    this.callback(null, result.code, result.map, result.ast);
    return;
  }
  return sourceCode;
}

module.exports = loader;
