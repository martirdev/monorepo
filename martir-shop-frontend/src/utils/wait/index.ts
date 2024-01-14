export function wait<T>(value: T, time: number): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}
