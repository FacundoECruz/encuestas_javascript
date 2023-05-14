import responses from "./responses.js";

async function wordCounter(filePath, word) {
  let allResponses = await responses(filePath);

  const allWordsInDocument = allResponses
    .replace(/[,.?!]/g, "")
    .split(/\s+/)
    .filter((word) => word !== "");

  const counter = allWordsInDocument.reduce((acc, curr) => {
    if (curr === word) {
      acc += 1;
    }
    return acc;
  }, 0);

  return counter;
}

export default wordCounter;
