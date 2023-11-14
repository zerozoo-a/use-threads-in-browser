export function thread(f) {
  const worker = new Worker(
    URL.createObjectURL(
      new Blob([`onmessage = e => postMessage((${f})(e.data));`], {
        type: "text/javascript",
      })
    )
  );
  const resolve = (res) => (worker.onmessage = ({ data }) => res(data));
  const reject = (rej) => (worker.onerror = (err) => rej(err));
  return (data) =>
    new Promise((res, rej) => {
      resolve(res);
      reject(rej);
      worker.postMessage(data);
    });
}
