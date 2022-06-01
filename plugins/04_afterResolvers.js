
class AfterResolversPlugin {
  apply(compiler) {
    compiler.hooks.afterResolvers.tap(
        'AfterResolversPlugin',
        (compiler = 'no params') => {
          console.log('Callback params: \n' + compiler)
    });
  }
}

module.exports = AfterResolversPlugin
