import path from 'path';
import { readFileSync } from 'fs';
import parse from './parses.js';
import formatDiff from './formatters/formatDiff.js';
import buildTree from './buildTree.js';

const getTypeFile = (pathFile) => path.extname(pathFile).slice(1);
const getData = (filepath) => parse(readFileSync(filepath, 'utf-8'), getTypeFile(filepath));
const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);

export default (pathFile1, pathFile2, formatName = 'stylish') => {
  const dataFile1 = getData(buildFullPath(pathFile1));
  const dataFile2 = getData(buildFullPath(pathFile2));
  const diff = buildTree(dataFile1, dataFile2);
  return formatDiff(diff, formatName);
};

