
class BeforeRunPlugin {
  apply(compiler) {
    compiler.hooks.beforeRun.tap(
        'BeforeRunPlugin',
        (compiler = 'no params') => {
          console.log('Callback params: \n' + compiler)
    });
  }
}

module.exports = BeforeRunPlugin
