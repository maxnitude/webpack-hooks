
class WatchRunPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tap(
        'WatchRunPlugin',
        (compiler = 'no params') => {
          console.log('Callback params: \n' + compiler)
    });
  }
}

module.exports = WatchRunPlugin
