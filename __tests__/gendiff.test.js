import genDiff from '../src/index.js';
import { readFile } from '../src/index.js';
import getFixturePath from '../src/helper.js';

test('genDiff should return correct diff', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');
    const resultPath = getFixturePath('result_genDiff.txt');

    const expectedResult = readFile(resultPath).trim(); // Удаление лишних пробелов и переносов строк

    expect(genDiff(filePath1, filePath2)).toEqual(expectedResult);
});
