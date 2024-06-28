import { genDiff, readFile } from '../src/index.js';
import getFixturePath from '../src/helper.js';

test('genDiff should return correct diff for JSON files', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const resultPath = getFixturePath('expectFileStylish.txt');

  const expectedResult = readFile(resultPath).trim();
  // Удаление лишних пробелов и переносов строк

  expect(genDiff(filePath1, filePath2)).toEqual(expectedResult);
});

test('genDiff should return correct diff for YAML files', () => {
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yaml');
  const resultPath = getFixturePath('expectFileStylish.txt');

  const expectedResult = readFile(resultPath).trim();
  // Удаление лишних пробелов и переносов строк

  expect(genDiff(filePath1, filePath2)).toEqual(expectedResult);
});
