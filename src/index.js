import path from 'path';
import fs from 'fs';
import parse from './parse.js';
import buildTree from './buildTree.js';
import diffFormatter from './diffFormatter.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getExtFormat = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const getData = (filepath) => {
  const content = readFile(filepath);
  const format = getExtFormat(filepath);
  return parse(content, format);
};

const genDiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  const diffTree = buildTree(data1, data2);

  return diffFormatter(diffTree);
};
export default genDiff;
export { readFile };
