import { browser, element, by } from 'protractor';
import elementIsVisible = webdriver.until.elementIsVisible;
import {isNullOrUndefined} from "util";

export class TeamkeeperPage {
  navigateTo(route) {
    return browser.get(route);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  elementExists(elementSelector) {
    return isNullOrUndefined(element(by.css(elementSelector)));
  }
}
