import yaml from 'js-yaml';

const parse = (data, format) => {
    const formatNormal = format.toLowerCase();
    switch (formatNormal) {
        case 'json':
            return JSON.parse(data);
        case 'yaml':
            return yaml.load(data);
        case 'yml':
            return yaml.load(data);
        default:
            throw new Error('unsupported format')
    }
};

export default parse;