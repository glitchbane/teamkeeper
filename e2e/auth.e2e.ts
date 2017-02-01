import {browser, by, element} from "protractor";
describe("login module", () => {
  it("should login successfully using auth0", () => {
    //set window size and navigate to the path where the template is loaded
    browser.driver.manage().window().setSize(1500, 1000);
    browser.get('/start');

    //check if login button is present & visible
    let loginButton = element(by.css('.btn-sign-in'));
    browser.wait(() =>  {
      return (loginButton.isPresent());
    }, 5000);

    loginButton.click();

    //check if email field exists to see if the pop-up has been successfully loaded
    let emailField = element(by.css('#a0-signin_easy_email'));

    browser.driver.wait(() =>  {
      return (emailField.isPresent());
    }, 5000);

    //wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
    browser.sleep(2000);

    //type credentials and click the 'access' button to log in
    emailField.sendKeys('test@user.com');

    let passWordField = element(by.css('#a0-signin_easy_password'));
    passWordField.sendKeys('0000');

    let accessButton = element(by.css('.a0-notloggedin .a0-primary'));
    accessButton.click();

    //verify that the login was successful by checking if the logout button is displayed
    let logoutLink = element(by.css('.logout'));
    browser.wait(() =>  {
      return (logoutLink.isPresent());
    }, 5000);
  });
});
