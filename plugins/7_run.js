
class RunPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(
        'RunPlugin',
        (compiler = 'no params') => {
          console.log('Callback params: \n' + compiler)
    });
  }
}

module.exports = RunPlugin
