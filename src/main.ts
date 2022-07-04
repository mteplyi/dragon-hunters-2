import { AsyncQueue } from './async-queue';
import { task } from './task';

(async () => {
  console.time('AAA');

  const queue = new AsyncQueue();

  const jobs = [];

  for (let i = 0; i < 10; i++) {
    jobs.push(queue.add(() => task(i)));
  }

  await Promise.all(jobs);

  console.timeEnd('AAA');
})();
