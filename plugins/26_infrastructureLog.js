
class InfrastructureLogPlugin {
  apply(compiler) {
    compiler.hooks.infrastructureLog.tap(
        'InfrastructureLogPlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = InfrastructureLogPlugin
