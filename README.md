# ReactMomentProptypes Tests

A set of tests that can be run in the browser.

There appears to be some problems with testing React isolated from a browser resulting in the
 occasional discrepancy in behavior. Example of v1.3.0 not handling undefined correctly in
 [react-moment-proptypes#23].

## Caveats

The test code makes use of ES6 to work with React and the current recommendations for components.

If there is enough desire for a lower level implementation I can work toward back-porting support.

## Running Tests

### Browser Execution

- Option 1: Pull the code locally and open the `tests-*.html` files in a browser to test.
- Option 2: Open the test files a deployed Github Page
  - [react-moment-proptypes-tests:moment-1.6.0](https://calebmorris.github.io/react-moment-proptypes-tests/tests-1.6.0.html)
  - [react-moment-proptypes-tests:moment-1.7.0](https://calebmorris.github.io/react-moment-proptypes-tests/tests-1.7.0.html)
  - [react-moment-proptypes-tests:moment-latest](https://calebmorris.github.io/react-moment-proptypes-tests/tests-latest.html)

### CLI Execution

The dev setup allows to execution in Chrome headless browser through puppeteer.

Simply run `test-all` to test against `moment-1.7.0`, `moment-1.6.0`, and the latest moment version.


[_]: #Links
[react-moment-proptypes#23]: https://github.com/CalebMorris/react-moment-proptypes/issues/23
