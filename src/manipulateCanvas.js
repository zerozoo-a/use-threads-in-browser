export const getImageData = () => {
  const img = document.getElementById("mona2");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const imageData = ctx.getImageData(0, 0, img.width, img.height);
  return imageData;
};

export const getImageData2 = () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  canvas.getContext;
  // Example: Drawing a rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 100, 100);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log(
    "🚀 ~ file: manipulateCanvas.js:16 ~ getImageData2 ~ imageData:",
    imageData
  );
  const data = imageData.data;
  //   const sObj = new SharedArrayBuffer(100 * 100 * 4);
  //   const u8c = new Uint8ClampedArray(sObj);
  //   u8c.set(imageData);

  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = data[i + 1] = data[i + 2] = avg;
  }
  ctx.putImageData(imageData, 0, 0);
};
