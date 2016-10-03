module.exports = function (casper, options) {

  casper.select = function(selector, value) {
    this.evaluate(function(selector, value) {
      $(selector).val(value).change().blur().each(function () {
        this.dispatchEvent(new Event('change'));
      });
    }, selector, value);
  };

  var login = function (loginInfo, imageIrl) {
    casper.then(function () {
      casper.echo('Logging in as ' + loginInfo.username);
    });

    casper.then(function () {
      casper.clear();
      phantom.clearCookies();
    });

    casper.thenOpen(loginInfo.url);
    casper.waitForSelector('#cred_userid_inputtext');
    casper.then(function () {
      casper.sendKeys('#cred_userid_inputtext', loginInfo.username);
      casper.waitForSelector('#login_workload_logo_image');
      casper.wait(300, function () {
        casper.sendKeys('#cred_password_inputtext', loginInfo.password);
        casper.then(function () { casper.echo('password typed in'); });
      });
    });

    casper.waitForSelector('#cred_sign_in_button');
    casper.wait(300, function (){
      casper.click('#cred_sign_in_button');
      casper.then(function () { casper.echo('sign in button clicked'); });
    });

    casper.waitForUrl(/[dD]e(fault|v[Hh]ome)?.aspx/);
    

    casper.then(function () {
      casper.echo('Saving screenshot ' + imageIrl + '...');

      casper.capture(imageIrl);
      casper.echo('done ' + imageIrl);
    });
  };
  
  return {
    login: login    
  };
};
