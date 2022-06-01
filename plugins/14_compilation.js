
class CompilationPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(
        'CompilationPlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = CompilationPlugin
