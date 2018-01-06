var expect = chai.expect;
var renderRootId = 'render-root';

describe('ReactMomentProptypes.momentObj', function() {

  describe('[optional]', function() {
    it('should not warn with valid moment', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = moment.utc();
        ReactDOM.render(
            React.createElement(MomentObj, { dateThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should not warn when given null', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = null;
        ReactDOM.render(
            React.createElement(MomentObj, { dateThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should not warn when given undefined', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = undefined;
        ReactDOM.render(
            React.createElement(MomentObj, { dateThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given a number', function() {
      wrapPropFailureCheck(true, () => {
        ReactDOM.render(
            React.createElement(MomentObj, { dateThing : 123 }),
            document.getElementById(renderRootId)
        );
      });
    });
  });

  describe('.isRequired', function() {
    it('should not warn with valid moment', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = moment.utc();
        ReactDOM.render(
            React.createElement(MomentObjRequiredBase, { requiredDateThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given null', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = null;
        ReactDOM.render(
            React.createElement(MomentObjRequiredBase, { requiredDateThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given undefined', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = undefined;
        ReactDOM.render(
            React.createElement(MomentObjRequiredBase, { requiredDateThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given a number', function() {
      wrapPropFailureCheck(true, () => {
        ReactDOM.render(
            React.createElement(MomentObjRequiredBase, { requiredDateThing : 123 }),
            document.getElementById(renderRootId)
        );
      });
    });
  });

});
