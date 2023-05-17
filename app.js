import {wordCounter} from "./wordCounter.js"
import counterRepeatedWords from "./counterRepeatedWords.js"

async function app() {

  console.log("app is running")

  let responsesPath = "./respuestas"
  
  let wordsQty = await counterRepeatedWords(responsesPath)
  
  console.log(`Most repeated words are: ${wordsQty}`)
}

app();