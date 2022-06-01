
class ShouldEmitlugin {
  apply(compiler) {
    compiler.hooks.shouldEmit.tap(
        'ShouldEmitlugin',
        (params = 'no params') => {
          console.log('Callback params: \n' + params)
    });
  }
}

module.exports = ShouldEmitlugin
