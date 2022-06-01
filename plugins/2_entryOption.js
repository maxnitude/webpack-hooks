
class EntryOptionPlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap(
      'EntryOptionPlugin',
      (context, entry) => {
        console.log('Callback params:')
        console.log('context:\n', context)
        console.log('entry:\n', entry)
      }
    );
  }
}

module.exports = EntryOptionPlugin
