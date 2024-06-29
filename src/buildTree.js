import _ from 'lodash';

const buildTree = (data1, data2) => {
  const getKeys = ((data) => Object.keys(data));
  const getCombineAndSortKeys = ((keys1, keys2) => _.sortBy(_.union(keys1, keys2)));

  const keys1 = getKeys(data1);
  const keys2 = getKeys(data2);
  const combineAndSortKeys = getCombineAndSortKeys(keys1, keys2);

  const diffTree = combineAndSortKeys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    } if (!Object.hasOwn(data2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    } if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: buildTree(data1[key], data2[key]) };
    } if (data1[key] !== data2[key]) {
      return {
        key, type: 'changed', oldValue: data1[key], newValue: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });
  return diffTree;
};

export default buildTree;
