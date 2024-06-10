const diffFormatter = (diffTree) => {
    const result = diffTree.map((node) => {
      switch (node) {
        case 'added':
          return `    +${node.key}: ${node.value}`;
        case 'deleted':
          return `    -${node.key}: ${node.value}`;
        case 'changed':
          return `    -${node.key}: ${node.oldValue}\n   +${node.key}: ${node.newValue}`;
        case 'unchanged':
          return `    ${node.key}: ${node.value}`;
      }
    }).join('\n');
  
    return `{\n${result}\n}`;
  };
  export default diffFormatter;