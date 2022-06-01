
class AfterEvironmentPlugin {
  apply(compiler) {
    compiler.hooks.afterEnvironment.tap(
      'AfterEvironmentPlugin',
      (params = 'no params') => {
        console.log('Callback params:')
        console.log(params)
      }
    );
  }
}

module.exports = AfterEvironmentPlugin
