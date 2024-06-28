import { genDiff, readFile } from '../src/index.js';
import getFixturePath from '../src/helper.js';

test('testing stylish JSON and YAML', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const resultPath = getFixturePath('expectFileStylish.txt');

  const expectedResult = readFile(resultPath).trim();
  // Удаление лишних пробелов и переносов строк

  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedResult);
});

test('testing stylish JSON default', () => {
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yaml');
  const resultPath = getFixturePath('expectFileStylish.txt');

  const expectedResult = readFile(resultPath).trim();

  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedResult);
});

test('testing plain JSON', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const resultPath = getFixturePath('expectFilePlain.txt');

  const expectedResult = readFile(resultPath).trim();

  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedResult);
});

test('testing plain YAML', () => {
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yaml');
  const resultPath = getFixturePath('expectFilePlain.txt');

  const expectedResult = readFile(resultPath).trim();

  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedResult);
});

test('testing json formatting', () => {
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yaml');
  const resultPath = getFixturePath('diffJSON.txt');

  const expectedResult = readFile(resultPath).trim();
  const expectedJsonString = JSON.stringify(JSON.parse(expectedResult));

  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJsonString);
});
