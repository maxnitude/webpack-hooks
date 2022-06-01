
class BeforeCompilePlugin {
  apply(compiler) {
    compiler.hooks.beforeCompile.tap(
        'BeforeCompilePlugin',
        (compilationParams = 'no params') => {
          console.log('Callback params: \n' + compilationParams)
    });
  }
}

module.exports = BeforeCompilePlugin
