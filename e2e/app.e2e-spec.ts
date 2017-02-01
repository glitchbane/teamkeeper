import { TeamkeeperPage } from './app.po';
import {browser, by, element, protractor} from "protractor";


describe('teamkeeper App', function() {
  let page: TeamkeeperPage;

  beforeEach(() => {
    page = new TeamkeeperPage();
    browser.ignoreSynchronization = true;
    // let logoutLink = element(by.css('.logout'));
    // if (logoutLink.isPresent()) {
    //   logoutLink.click();
    // }
  });

  it('should show the start component when path is empty', () => {
    page.navigateTo('/');
    let el = element(by.css('tk-start'));

    expect(el.isPresent()).toBeTruthy();
  });

  it('should contain the secondary nav bar', () => {
    page.navigateTo('start');

    let primaryNav = element(by.css('tk-primary-nav'));

    expect(primaryNav.isPresent()).toBeTruthy();
  });

  it('should show the start component on start route', () => {
    page.navigateTo('start');

    let startComponent = element(by.css('tk-start'));

    expect(startComponent.isPresent()).toBeTruthy();
  });


});
describe("login module", () => {
  it("should login successfully using auth0", () => {

    //set window size and navigate to the path where the template is loaded
    browser.driver.manage().window().setSize(1500, 1000);
    browser.get('/start');

    //check if login button is present & visible
    let loginButton = element(by.css('.btn-sign-in'));
    browser.wait(() =>  {
      return (loginButton.isPresent());
    }, 2000);

    loginButton.click();

    browser.sleep(2000);
    //check if email field exists to see if the pop-up has been successfully loaded
    let emailField = element(by.css('input.auth0-lock-input[type="text"]'));
    //
    // browser.driver.wait(() =>  {
    //   return (emailField.isPresent());
    // }, 5000);


    emailField.sendKeys('sheila@materialthoughts.com');

    let passWordField = element(by.css('input.auth0-lock-input[type="password"]'));

    passWordField.sendKeys('dispeer');
    //wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
    browser.sleep(2000);
    let accessButton = element(by.css('button.auth0-lock-submit'));

    accessButton.click();
    browser.sleep(2000);
    //verify that the login was successful by checking if the logout button is displayed
    let logoutLink = element(by.css('a.logout'));
    browser.wait(() =>  {
      return (logoutLink.isPresent());
    }, 5000);

    logoutLink.click();
  });
});
