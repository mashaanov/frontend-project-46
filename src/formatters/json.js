const formatJson = (diffTree) => {
  const convertNode = (node) => {
    if (node.type === 'nested') {
      return node.children.reduce((acc, child) => {
        acc[child.key] = convertNode(child);
        return acc;
      }, {});
    }

    const result = { changing: node.type };

    if (node.type === 'changed') {
      result.value1 = node.oldValue;
      result.value2 = node.newValue;
    } else {
      result.value = node.value;
    }

    return result;
  };

  const result = diffTree.reduce((acc, node) => {
    acc[node.key] = convertNode(node);
    return acc;
  }, {});

  return JSON.stringify(result);
};

export default formatJson;
