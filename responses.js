import fs from "fs";

let responses = async (filePath) => {
  let result = await fs.promises.readFile(`${filePath}`, "utf8", (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    then(data => result = data)
  });
  return result;
};
export default responses;
