// Retry - Re-runs befaoreEach/afterEach hooks but NOT before/after hooks

let assert = require("assert");
const { beforeEach } = require("mocha");

describe('Retry and Timeouts', function () {
  this.timeout(500);

  let a = 10;
  let b = 10;

  beforeEach(function(done) {
    // hook level timeout
    this.timeout(5000);
    setTimeout(done, 3000);
  })

  it('should add two variables', function (done) {
    // test level timeout
    this.timeout(500);
    setTimeout(done, 3000);

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
