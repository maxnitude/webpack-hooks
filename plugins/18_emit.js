
class EmitPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap(
        'EmitPlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = EmitPlugin
