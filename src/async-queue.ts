export class AsyncQueue {
  private previousQueueItem = Promise.resolve();

  add<T> (task: () => T): Promise<Awaited<T>> {
    return new Promise((res, rej) => {
      this.previousQueueItem = this.previousQueueItem.then(async () => {
        try {
          res(await task());
        } catch (e) {
          rej(e);
        }
      });
    });
  }
}
