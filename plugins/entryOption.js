
class EntryOptionPlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap(
        'EntryOptionPlugin',
        (context, entry) => {
          console.log('Callback params: \n', 'context: \n', context, '\n', 'entry: \n', entry)
    });
  }
}

module.exports = EntryOptionPlugin
