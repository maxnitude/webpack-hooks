
class NormalModuleFactoryPlugin {
  apply(compiler) {
    compiler.hooks.normalModuleFactory.tap(
        'NormalModuleFactoryPlugin',
        (normalModuleFactory = 'no params') => {
          console.log('Callback params: \n' + normalModuleFactory)
    });
  }
}

module.exports = NormalModuleFactoryPlugin
