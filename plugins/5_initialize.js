
class InitializePlugin {
  apply(compiler) {
    compiler.hooks.initialize.tap(
        'InitializePlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = InitializePlugin
