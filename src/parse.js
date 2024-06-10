import yaml from 'js-yaml';

const parse = (data, format) => {
  switch (format) {
  case 'json':
    return JSON.parse(data);
  case 'yaml':
    return yaml.load(data);
  case 'yml':
    return yaml.load(data);
  default:
    return 'unsupported format';
  }
};

export default parse;