import responses from "./responses.js";

async function counterRepeatedWords(responsesPath) {
  let stringifyResponses = await responses(responsesPath);
  let arrayOfWords = stringifyResponses
    .replace(/[,.?!]/g, "")
    .split(/\s+/)
    .filter((word) => word !== "");

      let counter = {};
    
      arrayOfWords.forEach((word) => {
        if (counter[word]) {
          counter[word]++;
        } else {
          counter[word] = 1;
        }
      });
      
      const sortedWords = Object.entries(counter).sort((a, b) => b[1] - a[1]);
      let mostRepeated = sortedWords.slice(0, 10)
      let msgForPrint = ""

      for (let i = 0; i < mostRepeated.length; i++) {
        for(let j = 0; j < mostRepeated[i].length; j++){
          msgForPrint += `${mostRepeated[i][j]} `
        }
        msgForPrint += "\n"
      }

      return msgForPrint
}

export default counterRepeatedWords;
