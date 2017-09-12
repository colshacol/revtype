import revtype from '../';

export default array => {
  return array.map(val => {
    return revtype.parse(val);
  });
};
