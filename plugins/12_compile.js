
class compilePlugin {
  apply(compiler) {
    compiler.hooks.compile.tap(
        'compilePlugin',
        (compilationParams = 'no params') => {
          console.log('Callback params: \n' + compilationParams)
    });
  }
}

module.exports = compilePlugin
