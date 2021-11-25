export class WatchTimerPlugin {
  constructor(private message = 'Done') {}

  apply(compiler) {
    compiler.hooks.done.tap('Watch Timer Plugin', () => {
      setTimeout(() => {
        console.log(
          '\n[' + new Date().toLocaleString() + ']' + ` --- ${this.message}.\n`
        );
      }, 100);
    });
  }
}
