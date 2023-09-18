// Mathematical Operations

let assert = require("assert");

describe('Mathematical Operations - Test Suite', function () {
  let a = 10;
  let b = 10;

  it('should add two variables', function () {
    const c = a + b;
    assert.equal(c, 20);
  })

  it('should subtract two variables', function () {
    const c = a - b;
    assert.equal(c, 0);
  })

  it('should multiply two variables', function () {
    const c = a * b;
    assert.equal(c, 100);
  })

  it('should divide two variables', function () {
    const c = a / b;
    assert.equal(c, 1);
  })
})
