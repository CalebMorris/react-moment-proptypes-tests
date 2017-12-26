var expect = chai.expect;
var renderRootId = 'render-root';

describe('ReactMomentProptypes.momentStr', function() {
  before(() => {
    sinon.stub(console,'error').callsFake((warning) => {
      throw new PropFailedError(warning)
    });
  });

  after(() => {
    console.error.restore();
  });

  describe('simple', function() {
    it('should return -1 when the value is not present', function() {
      let didFailCorrectly = false;

      try {
        ReactDOM.render(
            React.createElement(Greetings, { name : 123 }),
            document.getElementById(renderRootId)
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
