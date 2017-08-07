import * as utils from './utils';
import value from './value';

export default (comp) => {
  return props => {
    console.log(`{ @revtype.props } ${comp.name}`, value(props));
    return new comp(props);
  };
};
