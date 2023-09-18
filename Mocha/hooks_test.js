describe('Mocha Hooks', function () {

  before('Execute before all tests', function () {
    console.log('Execute before all tests');
  })

  beforeEach('Execute before each test', function () {
    console.log('Execute before each tests');
  })

  after('Execute after all tests', function () {
    console.log('Execute after all tests');
  })

  afterEach('Execute after each test', function () {
    console.log('Execute after each test');
  })

  it('Mocha Hooks Test', function () {
    console.log('This is a test for Mocha Hooks');
  })
})
