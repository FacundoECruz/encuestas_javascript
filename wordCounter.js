import responses from "./responses.js";

function splitTextByWords(text){
  const allWordsInDocument = text
    .replace(/[,.?!]/g, "")
    .split(/\s+/)
    .filter((word) => word !== "");
  return allWordsInDocument;  
}

async function wordCounter(filePath, word) {
  let allResponses = await responses(filePath);

  let allWordsInDocument = splitTextByWords(allResponses)

  const counter = allWordsInDocument.reduce((acc, curr) => {
    if (curr === word) {
      acc += 1;
    }
    return acc;
  }, 0);

  return counter;
}

export {wordCounter, splitTextByWords};
