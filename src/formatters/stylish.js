import _ from 'lodash';

const getIndentation = (depth, countSpace = 4, replacer = ' ') => replacer.repeat(depth * countSpace - 2);
const getBracketIndentation = (depth, replacer = ' ', countSpace = 4) => replacer.repeat(depth * countSpace - countSpace);

const formatValue = (value, depth, countSpace = 4) => {
  if (!_.isObject(value) || value === null) {
    return value;
  }
  const indent = getIndentation(depth + 1, countSpace);
  const bracketIndent = getBracketIndentation(depth + 1, ' ', countSpace);
  const formatted = Object.entries(value)
    .map(([key, val]) => `${indent}  ${key}: ${formatValue(val, depth + 1)}`)
    .join('\n');
  return `{\n${formatted}\n${bracketIndent}}`;
};

const stylishFormatter = (diffTree, depth = 1, countSpace = 4) => {
  const indent = getIndentation(depth, countSpace);
  const sortedTree = _.sortBy(diffTree, 'key');
  const result = sortedTree
    .map((node) => {
      switch (node.type) {
        case 'added':
          return `${indent}+ ${node.key}: ${formatValue(node.value, depth, countSpace)}`;
        case 'deleted':
          return `${indent}- ${node.key}: ${formatValue(node.value, depth, countSpace)}`;
        case 'changed':
          return `${indent}- ${node.key}: ${formatValue(node.oldValue, depth, countSpace)}\n${indent}+ ${node.key}: ${formatValue(node.newValue, depth, countSpace)}`;
        case 'unchanged':
          return `${indent}  ${node.key}: ${formatValue(node.value, depth, countSpace)}`;
        case 'nested':
          return `${indent}  ${node.key}: ${stylishFormatter(node.children, depth + 1, countSpace)}`;
        default:
          throw new Error(`unknown type: ${node.type}`);
      }
    }).join('\n');
  const bracketIndent = getBracketIndentation(depth, ' ', countSpace);
  return `{\n${result}\n${bracketIndent}}`;
};

export default stylishFormatter;
