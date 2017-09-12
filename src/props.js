import * as utils from './utils';
import revtype from './';

export default (comp) => {
  return props => {
    console.log(`{ @revtype.props } ${comp.name}`, revtype.parse(props));
    return new comp(props);
  };
};
