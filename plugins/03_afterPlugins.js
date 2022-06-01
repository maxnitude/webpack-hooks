
class AfterPluginsPlugin {
  apply(compiler) {
    compiler.hooks.afterPlugins.tap(
      'AfterPluginsPlugin',
      (compiler) => {
        console.log('Callback params:')
        console.log('compiler:\n', compiler)
      }
    );
  }
}

module.exports = AfterPluginsPlugin
