import { thread } from "./thread.js";
import { getImageData2 } from "./manipulateCanvas.js";

function greyScale(imageData) {
  for (let i = 0; i < imageData.length; i += 4) {
    const v =
      0.34 * imageData[i] + 0.5 * imageData[i + 1] + 0.16 * imageData[i + 2];
    imageData[i] = imageData[i + 1] = imageData[i + 2] = v;
  }
  return imageData;
}

const main = async () => {
  const imageData = getImageData2();
};

main();
