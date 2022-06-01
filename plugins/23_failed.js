
class FailedPlugin {
  apply(compiler) {
    compiler.hooks.failed.tap(
        'FailedPlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = FailedPlugin
