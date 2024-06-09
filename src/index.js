import path from "path";
import fs from "fs";

const getFullPath = (filepath) =>
  path.resolve(process.cwd(), "__fixtures__", filepath);
const readJSONFile = (filepath) =>
  JSON.parse(fs.readFileSync(filepath, "utf-8"));

const gendiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  console.log(readJSONFile(fullFilePath1));
  console.log(readJSONFile(fullFilePath2));
};
export default gendiff;
