var expect = chai.expect;
var renderRootId = 'render-root';

describe('ReactMomentProptypes.momentDurationObj', function() {

  describe('[optional]', function() {
    it('should not warn with valid moment duration', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = moment.duration(3, 'hours');
        ReactDOM.render(
            React.createElement(MomentDurationObj, { durationObjThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should not warn when given null', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = null;
        ReactDOM.render(
            React.createElement(MomentDurationObj, { durationObjThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should not warn when given undefined', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = undefined;
        ReactDOM.render(
            React.createElement(MomentDurationObj, { durationObjThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given a number', function() {
      wrapPropFailureCheck(true, () => {
        ReactDOM.render(
            React.createElement(MomentDurationObj, { durationObjThing : 123 }),
            document.getElementById(renderRootId)
        );
      });
    });
  });

  describe('.isRequired', function() {
    it('should not warn with valid moment duration', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = moment.duration(3, 'hours');
        ReactDOM.render(
            React.createElement(
              MomentDurationObjRequiredBase, { requiredDurationObjThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given null', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = null;
        ReactDOM.render(
            React.createElement(
              MomentDurationObjRequiredBase, { requiredDurationObjThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given undefined', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = undefined;
        ReactDOM.render(
            React.createElement(
              MomentDurationObjRequiredBase, { requiredDurationObjThing : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given a number', function() {
      wrapPropFailureCheck(true, () => {
        ReactDOM.render(
            React.createElement(
              MomentDurationObjRequiredBase, { requiredDurationObjThing : 123 }),
            document.getElementById(renderRootId)
        );
      });
    });
  });

});
