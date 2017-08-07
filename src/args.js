import * as utils from './utils';
import value from './value';

// TODO: Support non-arrow function.
export default (target, name, descriptor) => ({
  value(...args) {
    console.log(
      `{ @revtype.args } ${target.constructor.name}.${name}`,
      value(args)
    );
    return descriptor.initializer.apply(this)(...args);
  }
});
