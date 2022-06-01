
class AfterCompilePlugin {
  apply(compiler) {
    compiler.hooks.afterCompile.tap(
        'AfterCompilePlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = AfterCompilePlugin
