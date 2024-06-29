import path from 'path';
import fs from 'fs';
import parse from './parses.js';
import buildTree from './buildTree.js';
import stylishFormatter from './formatters/stylish.js';
import plainFormatter from './formatters/plain.js';
import jsonFormatter from './formatters/json.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getExtFormat = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const getData = (filepath) => {
  const content = readFile(filepath);
  const format = getExtFormat(filepath);
  return parse(content, format);
};

const formatDiff = (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormatter(diffTree);
    case 'plain':
      return plainFormatter(diffTree);
    case 'json':
      return jsonFormatter(diffTree);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  const diffTree = buildTree(data1, data2);

  return formatDiff(diffTree, format);
};

export default { genDiff, readFile };
