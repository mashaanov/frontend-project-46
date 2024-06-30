#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../index.js';
import getFixturePath from '../src/helper.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format: "stylish", "plain" or "json"', 'stylish')
  .action((filepath1, filepath2, options) => {
    const filePath1 = getFixturePath(filepath1);
    const filePath2 = getFixturePath(filepath2);
    console.log(genDiff(filePath1, filePath2, options.format));
  });

program.parse(process.argv);
