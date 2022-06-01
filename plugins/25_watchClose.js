
class WatchClosePlugin {
  apply(compiler) {
    compiler.hooks.watchClose.tap(
        'WatchClosePlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = WatchClosePlugin
