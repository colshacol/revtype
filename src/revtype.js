import * as utils from './utils';

export default (value: any) => {
  const isPrimitive: boolean | string | null = utils.primitiveMatch(typeof value);
  const type = isPrimitive;

  // if (isPrimitive) {
  //   if (type === 'function') {
  //     return `${type}(...${value.length})`
  //   }
  //   return isPrimitive;
  // } else if (value === null) {
  //   return "null";
  // } else if (value === undefined) {
  //   return "undefined";
  // }

  return (
    ((isPrimitive === 'function') && `${type}(...${value.length})`) ||
    (isPrimitive && isPrimitive) ||
    ((value === null) && 'null') ||
    ((value === undefined) && 'undefined') ||
    (Array.isArray(value) && utils.handleArray(value)) ||
    ((typeof value === 'object') && utils.handleObject(value))
  );
};
