import path from "path";
import fs from "fs";
import parse from "./parse.js";

const getFullPath = (filepath) =>
  path.resolve(process.cwd(), "__fixtures__", filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => fs.readFileSync(filepath, "utf-8");

const gendiff = (filepath1, filepath2) => {
  const fullFilePath1 = readFile(getFullPath(filepath1));
  const fullFilePath2 = readFile(getFullPath(filepath2));

  console.log(parse(fullFilePath1, extractFormat(filepath1)));
  console.log(parse(fullFilePath2, extractFormat(filepath2)));
};
export default gendiff;
