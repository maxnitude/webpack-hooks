
class MakePlugin {
  apply(compiler) {
    compiler.hooks.make.tap(
        'MakePlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = MakePlugin
