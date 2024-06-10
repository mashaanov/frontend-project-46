import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortedUniqBy(_.union(keys1, keys2));

  keys.map((key) => {
    if (!Object.hasOwn(keys1, key)) {
      return {key, type: 'added', value: data2[key]}
    } 
    if (!Object.hasOwn(keys2, key)) {
      return { key, type: 'deleted', value: data1[key] };
    } 
    if (data1[key] !== data2[key]) {
      return { key, type: 'changed', oldValue: data1[key], newValue: data2[key] };
    } 
    return { key, type: 'unchanged', value: data1[key] };
  })
};
export default buildTree;