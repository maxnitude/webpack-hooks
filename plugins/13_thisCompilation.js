
class ThisCompilationPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
        'ThisCompilationPlugin',
        (compilation = 'no params', compilationParams = 'no params') => {
          console.log('Callback params:')
          console.log(compilation)
          console.log(compilationParams)
    });
  }
}

module.exports = ThisCompilationPlugin
