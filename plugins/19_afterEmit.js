
class AfterEmitPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tap(
        'AfterEmitPlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = AfterEmitPlugin
