const puppeteer = require('puppeteer');
const path = require('path');
const promisify = require('util').promisify;
const chalk = require('chalk');

var testPath = 'file://' + path.join(__dirname, '../src/index.html');
console.log(`loading file at location @"${chalk.yellow(testPath)}"`);

async function execute(filePath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(filePath);

  const mocaStatsHandler = await page.$('ul#mocha-stats');
  const results = await page.evaluate(
    mocaStats => {
      if (! mocaStats) {
        return null;
      }

      const messages = [];
      const statsMap = [].slice.call(mocaStats.children).reduce(
        (memo, item) => {
          messages.push('Found stat [' + item.className + ']');
          const emChildren = [].slice.call(item.getElementsByTagName('em'));
          const innerTextList = emChildren.map(x => x.innerText);
          if (innerTextList && innerTextList.length === 1) {
            memo[item.className] = innerTextList[0];
          } else {
            memo[item.className] = innerTextList.join(';');
          }
          return memo;
        },
        {}
      );

      return {
        stats: statsMap,
        messages: messages,
      };
    },
    mocaStatsHandler
  );
  await mocaStatsHandler.dispose();

  await page.screenshot({
    path: 'test/artifacts/chrome-snapshot.png',
  });

  await browser.close();

  return results;
}

var resultsPromise = execute(testPath);
resultsPromise.then((results) => {
  var failureCount = 0;
  console.log(chalk.cyan('>>messages'));
  console.log(results.messages.forEach(x => console.log(chalk.yellow(x))));
  console.log(chalk.cyan('>>stats'));
  Object.keys(results.stats).forEach((key) => {
    if (! results.stats[key]) {
      return;
    }
    if (key === 'failures') {
      failureCount = Number.parseInt(results.stats['failures']);
      const chalkColor = failureCount > 0 ? chalk.red : chalk.green;
      console.log(key.padStart(10), chalkColor(results.stats[key]));
    } else {
      console.log(key.padStart(10), chalk.green(results.stats[key]));
    }
  });
  if (failureCount > 0) {
    process.exit(-1);
  } else {
    process.exit(0);
  }
}).catch((ex) => {
  console.error(chalk.red('Unexpected exception'));
  console.error(chalk.red(ex.stack));
  process.exit(-1);
});
