var expect = chai.expect;
var renderRootId = 'render-root';

describe('ReactMomentProptypes.momentString', function() {

  describe('[optional]', function() {
    it('should not warn with valid moment string', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = '2012-12-31';
        ReactDOM.render(
            React.createElement(MomentStr, { stringThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn with invalid moment string', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = 'not a moment string';
        ReactDOM.render(
            React.createElement(MomentStr, { stringThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should not warn when given null', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = null;
        ReactDOM.render(
            React.createElement(MomentStr, { stringThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should not warn when given undefined', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = undefined;
        ReactDOM.render(
            React.createElement(MomentStr, { stringThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given a number', function() {
      wrapPropFailureCheck(true, () => {
        ReactDOM.render(
            React.createElement(MomentStr, { stringThing : 123 }),
            document.getElementById(renderRootId)
        );
      });
    });
  });

  describe('.isRequired', function() {
    it('should not warn with valid moment string', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = '2012-12-31';
        ReactDOM.render(
            React.createElement(MomentStrRequiredBase, { requiredStringThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn with invalid moment string', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = 'not a moment string';
        ReactDOM.render(
            React.createElement(MomentStrRequiredBase, { requiredStringThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given null', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = null;
        ReactDOM.render(
            React.createElement(MomentStrRequiredBase, { requiredStringThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given undefined', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = undefined;
        ReactDOM.render(
            React.createElement(MomentStrRequiredBase, { requiredStringThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given a number', function() {
      wrapPropFailureCheck(true, () => {
        ReactDOM.render(
            React.createElement(MomentStrRequiredBase, { requiredStringThing : 123 }),
            document.getElementById(renderRootId)
        );
      });
    });
  });

});
