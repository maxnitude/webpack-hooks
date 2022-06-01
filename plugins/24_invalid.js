
class InvalidPlugin {
  apply(compiler) {
    compiler.hooks.invalid.tap(
        'InvalidPlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = InvalidPlugin
