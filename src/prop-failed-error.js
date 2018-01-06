function PropFailedError(message) {
    this.name = 'PropFailedError';
    this.message = message;
    this.stack = (new Error()).stack;
}
PropFailedError.prototype = new Error;

/**
 * QoL utility to handle reporting the unexpected error messaging correctly
 * @param  {boolean} shouldHaveThrown should the execution have thrown
 * @param  {function<Void, T>} testFunc test executor
 * @param  {function<PropFailedError>} exceptionInspection exception assertion method
 * @return {<T>}            [description]
 */
function wrapPropFailureCheck(shouldHaveThrown, testFunc, exceptionInspection) {
  if (typeof shouldHaveThrown !== 'boolean') {
    throw new TypeError('[shouldHaveThrown] must be a boolean');
  }

  if (typeof testFunc !== 'function') {
    throw new TypeError('[testFunc] must be a function');
  }

  if (exceptionInspection && typeof exceptionInspection !== 'function') {
    throw new TypeError('[exceptionInspection] must be a function');
  }

  var didFailCorrectly = false;

  try {
    testFunc.call();
  } catch (ex) {
    if (! shouldHaveThrown) {
      expect.fail(ex, null, 'Unexpected error with message: "' + ex.message + '"');
    }
    expect(ex).to.not.be.null;
    expect(ex).to.be.an.instanceof(PropFailedError);
    didFailCorrectly = true;

    if (exceptionInspection) {
      exceptionInspection.call(null, ex);
    }
  } finally {
    expect(didFailCorrectly, 'Failed in the opposite manner').to.equal(shouldHaveThrown);
  }
}
