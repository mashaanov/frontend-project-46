import _ from 'lodash';

const getFormattedValue = (value) => {
  if (_.isObject(value) && value !== null) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const getPropertyPath = (parentPath, property) => (parentPath ? `${parentPath}.${property}` : property);

const plainFormatter = (diffTree, parentPath = '') => {
  const lines = diffTree
    .map((node) => {
      const propertyPath = getPropertyPath(parentPath, node.key);
      switch (node.type) {
        case 'added':
          return `Property '${propertyPath}' was added with value: ${getFormattedValue(node.value)}`;
        case 'deleted':
          return `Property '${propertyPath}' was removed`;
        case 'changed':
          return `Property '${propertyPath}' was updated. From ${getFormattedValue(node.oldValue)} to ${getFormattedValue(node.newValue)}`;
        case 'nested':
          return plainFormatter(node.children, propertyPath);
        case 'unchanged':
          return null;
        default:
          throw new Error(`Unknown node type: ${node.type}`);
      }
    });
  return lines.filter((line) => line !== null).join('\n');
};

export default plainFormatter;
