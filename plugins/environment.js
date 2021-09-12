
class EnvironmentPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap(
        'EnvironmentPlugin',
        (params) => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = EnvironmentPlugin
