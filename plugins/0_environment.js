
class EnvironmentPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap(
      'EnvironmentPlugin',
      (params = 'no params') => {
        console.log('Callback params:')
        console.log(params)
      }
    );
  }
}

module.exports = EnvironmentPlugin
