before(() => {
  sinon.stub(console, 'error').callsFake((warning) => {
    throw new PropFailedError(warning);
  });
});

after(() => {
  console.error.restore();
});
