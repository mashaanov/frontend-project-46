import { genDiff, readFile } from '../src/index.js';
import getFixturePath from '../src/helper.js';

const runTest = (fileName1, fileName2, resultFileName, format) => {
  const filePath1 = getFixturePath(fileName1);
  const filePath2 = getFixturePath(fileName2);
  const resultPath = getFixturePath(resultFileName);
  const expectedResult = readFile(resultPath).trim();

  let actualResult;
  if (format === 'json') {
    const expectedJsonString = JSON.stringify(JSON.parse(expectedResult));
    actualResult = genDiff(filePath1, filePath2, 'json');
    expect(actualResult).toEqual(expectedJsonString);
  } else {
    actualResult = genDiff(filePath1, filePath2, format);
    expect(actualResult).toEqual(expectedResult);
  }

  expect(actualResult).toBeDefined();
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
