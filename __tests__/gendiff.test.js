import { genDiff, readFile } from '../src/index.js';
import getFixturePath from '../src/helper.js';

const runTest = (fileName1, fileName2, resultFileName, format) => {
  const filePath1 = getFixturePath(fileName1);
  const filePath2 = getFixturePath(fileName2);
  const resultPath = getFixturePath(resultFileName);
  const expectedResult = readFile(resultPath).trim();

  if (format === 'json') {
    const expectedJsonString = JSON.stringify(JSON.parse(expectedResult));
    expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJsonString);
  } else {
    expect(genDiff(filePath1, filePath2, format)).toEqual(expectedResult);
  }
};

test('testing stylish JSON and YAML', () => {
  runTest('file1.json', 'file2.json', 'expectFileStylish.txt', 'stylish');
});

test('testing stylish JSON default', () => {
  runTest('file1.yaml', 'file2.yaml', 'expectFileStylish.txt', 'stylish');
});

test('testing plain JSON', () => {
  runTest('file1.json', 'file2.json', 'expectFilePlain.txt', 'plain');
});

test('testing plain YAML', () => {
  runTest('file1.yaml', 'file2.yaml', 'expectFilePlain.txt', 'plain');
});

test('testing json formatting', () => {
  runTest('file1.yaml', 'file2.yaml', 'diffJSON.txt', 'json');
});
