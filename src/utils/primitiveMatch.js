
export default type => {
  const match = type.match(/(string|number|boolean|function)/);
  return (match)
    ? match[0]
    : false;
};
