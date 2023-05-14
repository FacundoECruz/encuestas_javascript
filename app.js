import wordCounter from "./wordCounter.js"

async function app() {

  console.log("app is running")

  let responsesPath = "./respuestas"

  let quietKey = "tranquila"
  let welfareKey = "bienestar"
  let quietQty = await wordCounter(responsesPath, quietKey)
  let welfareQty = await wordCounter(responsesPath, welfareKey)

  console.log(`quietQty expect [2], return [${quietQty}]`)
  console.log(`welfareQty expect [6], return[${welfareQty}]`)
}

app();