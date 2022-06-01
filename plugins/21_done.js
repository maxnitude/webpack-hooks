
class DonePlugin {
  apply(compiler) {
    compiler.hooks.done.tap(
        'DonePlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = DonePlugin
