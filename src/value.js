import * as utils from './utils';

export default (value) => {
  const typeOfValue = typeof value;
  const isPrimitive = utils.primitiveMatch(typeOfValue);

  if (isPrimitive) {
    const type = isPrimitive;
    if (type === 'function') {
      return `${type}(...${value.length})`
    }
    return isPrimitive;
  } else if (value === null) {
    return "null";
  } else if (value === undefined) {
    return "undefined";
  }

  if (Array.isArray(value)) {
    return utils.handleArray(value);
  }

  if (typeof value === "object") {
    return utils.handleObject(value);
  }
};
