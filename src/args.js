import * as utils from './utils';
import revtype from './';

// TODO: Support non-arrow function.
export default (target, name, descriptor) => ({
  value(...args) {
    console.log(
      `{ @revtype.args } ${target.constructor.name}.${name}`,
      revtype.parse(args)
    );
    return descriptor.initializer.apply(this)(...args);
  }
});
