var expect = chai.expect;

before(() => {
  sinon.stub(console,'error').callsFake((warning) => {
    throw new PropFailedError(warning)
  });
});

after(() => {
  console.error.restore();
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      let didFailCorrectly = false;

      try {
        ReactDOM.render(
            React.createElement(Greetings, { name : 123 }),
            document.getElementById('render-root')
        );
      } catch (ex) {
        expect(ex).to.not.be.null;
        expect(ex).to.be.an.instanceof(PropFailedError);
        didFailCorrectly = true;
      } finally {
        expect(didFailCorrectly, 'Should have failed').to.be.true;
      }
    });
  });
});
