import test from "ava";
import args from "../src/args";

const startLogCollection = () => {
  global.console.history = [];
  global.console.log = (...args) => {
    console.history.push(args);
  };
};

const endLogCollection = (() => {
  const log = console.log;
  return () => {
    global.console.log = log;
  };
})();

class TestClass {
  @args
  myFunc = (foo, bar) => {
    // do stuff with foo and bar.
  };
}

test("log correctly", t => {
  startLogCollection();

  const testClass = new TestClass();
  testClass.myFunc(100, "baz");
  const argsLog = console.history[0][1];

  endLogCollection();
  t.deepEqual(argsLog, ["number", "string"]);
});
