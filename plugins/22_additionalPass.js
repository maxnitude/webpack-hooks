
class AdditionalPassPlugin {
  apply(compiler) {
    compiler.hooks.additionalPass.tap(
        'AdditionalPassPlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = AdditionalPassPlugin
