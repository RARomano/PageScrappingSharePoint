/**
 * Run via: casperjs server.js
 * arguments: SiteUrl UserName Password OutputDir
 */

var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
  viewportSize: {
    width: 1200,
    height: 900
  },
  paperSize: {
    width: '11in',
    height: '8.5in',
    orientation: 'portrait',
    border: '0.4in'
  }
});

var args = casper.cli.args;
if (args.length < 4) {
  console.log('wrong usage, at least 4 arguments are required: siteUrl userName passWord output');
}
var siteUrl = args[0];
var userName = args[1];
var passWord = args[2];
var output = args[args.length - 1];

var options = {
  url: siteUrl,
  username: userName,
  password: passWord  
};

var web = require('./lib/web')(casper, options);

casper.options.onWaitTimeout = function() {
  console.log("TIMEOUT");
  casper.capture(output + '/error-timeout.png');
  this.exit(1);
};

casper.start();
web.login(options, output+'/home.png');

casper.run();
