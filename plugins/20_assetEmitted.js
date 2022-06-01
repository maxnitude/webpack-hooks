
class AssetEmittedPlugin {
  apply(compiler) {
    compiler.hooks.assetEmitted.tap(
        'AssetEmittedPlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = AssetEmittedPlugin
