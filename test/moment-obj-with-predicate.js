var expect = chai.expect;
var renderRootId = 'render-root';

describe('ReactMomentProptypes.momentObj.withPredicate', function() {

  describe('[optional]', function() {
    it('should not warn with valid moment that passes the predicate', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = moment.utc();
        ReactDOM.render(
            React.createElement(MomentObj, { dateThingWithPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn with valid moment that fails the predicate', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = moment().year(1800);
        ReactDOM.render(
            React.createElement(MomentObj, { dateThingWithPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when predicate throws', function() {
      const testThrowMessage = 'This is a message from inside of a predicate.';
      function throwingFunction(momentObject) {
        throw new TypeError(testThrowMessage);
      }
      MomentObjPredicateThrows.propTypes = {
        dateThingWithThrowingPredicate : ReactMomentProptypes.momentObj
          .withPredicate(throwingFunction),
      };
      wrapPropFailureCheck(true, () => {
        var testProp = moment().year(1800);
        ReactDOM.render(
            React.createElement(
              MomentObjPredicateThrows,
              { dateThingWithThrowingPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      }, (ex) => {
        expect(ex.message).to.contain(testThrowMessage);
        // Currently not implemented in source
        // expect(ex.message).to.contain(TypeError.name);
        // expect(ex.message).to.contain(throwingFunction.name);
      });
    });

    it('should not warn when given null', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = null;
        ReactDOM.render(
            React.createElement(MomentObj, { dateThingWithPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should not warn when given undefined', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = undefined;
        ReactDOM.render(
            React.createElement(MomentObj, { dateThingWithPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given a number', function() {
      wrapPropFailureCheck(true, () => {
        ReactDOM.render(
            React.createElement(MomentObj, { dateThingWithPredicate : 123 }),
            document.getElementById(renderRootId)
        );
      });
    });
  });

  describe('.isRequired', function() {

    it('should not warn with valid moment that passes the predicate', function() {
      wrapPropFailureCheck(false, () => {
        var testProp = moment.utc();
        ReactDOM.render(
            React.createElement(
              MomentObjRequiredPredicate, { requiredDateThingWithPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn with valid moment that fails the predicate', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = moment().year(1800);
        ReactDOM.render(
            React.createElement(
              MomentObjRequiredPredicate, { requiredDateThingWithPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when predicate throws', function() {
      const testThrowMessage = 'Required predicate thrown message.';
      function throwingFunction(momentObject) {
        throw new TypeError(testThrowMessage);
      }
      MomentObjRequiredPredicateThrow.propTypes = {
        requiredDateThingWithThrowingPredicate : ReactMomentProptypes.momentObj
          .withPredicate(throwingFunction).isRequired,
      };
      wrapPropFailureCheck(true, () => {
        var testProp = moment().year(1800);
        ReactDOM.render(
            React.createElement(
              MomentObjRequiredPredicateThrow,
              { requiredDateThingWithThrowingPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      }, (ex) => {
        expect(ex.message).to.contain(testThrowMessage);
        // Currently not implemented in source
        // expect(ex.message).to.contain(TypeError.name);
        // expect(ex.message).to.contain(throwingFunction.name);
      });
    });

    it('should not warn when given null', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = null;
        ReactDOM.render(
            React.createElement(
              MomentObjRequiredPredicate, { requiredDateThingWithPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should not warn when given undefined', function() {
      wrapPropFailureCheck(true, () => {
        var testProp = undefined;
        ReactDOM.render(
            React.createElement(
              MomentObjRequiredPredicate, { requiredDateThingWithPredicate : testProp }),
            document.getElementById(renderRootId)
        );
      });
    });

    it('should warn when given a number', function() {
      wrapPropFailureCheck(true, () => {
        ReactDOM.render(
            React.createElement(
              MomentObjRequiredPredicate, { requiredDateThingWithPredicate : 123 }),
            document.getElementById(renderRootId)
        );
      });
    });

  });

});
