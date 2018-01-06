var expect = chai.expect;

describe('ReactMomentProptypes', function() {
  it('should be loaded into browser', function() {
    expect(ReactMomentProptypes).to.not.be.null;

    expect(ReactMomentProptypes)
      .to.have.property('momentObj')
      .that.is.a('function');

    expect(ReactMomentProptypes)
      .to.have.property('momentString')
      .that.is.a('function');

    expect(ReactMomentProptypes)
      .to.have.property('momentDurationObj')
      .that.is.a('function');
  });
});
