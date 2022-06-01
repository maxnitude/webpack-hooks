
class ContextModuleFactoryPlugin {
  apply(compiler) {
    compiler.hooks.contextModuleFactory.tap(
        'ContextModuleFactoryPlugin',
        (contextModuleFactory = 'no params') => {
          console.log('Callback params: \n' + contextModuleFactory)
    });
  }
}

module.exports = ContextModuleFactoryPlugin
