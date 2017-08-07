import value from './value';

export const primitiveMatch = type => {
  const match = type.match(/(string|number|boolean|function)/);
  return (match)
    ? match[0]
    : false;
};

export const handleArray = array => {
  return array.map(val => {
    return value(val);
  });
};

export const handleObject = object => {
  return Object.entries(object).reduce((target, [key, val]) => {
    target[key] = value(val);
    return target;
  }, {});
};
