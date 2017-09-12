import revtype from '../';

export default object => {
  return Object.entries(object).reduce((target, [key, val]) => {
    target[key] = revtype.parse(val);
    return target;
  }, {});
};
