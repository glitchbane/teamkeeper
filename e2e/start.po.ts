import { browser, element, by } from 'protractor';
import elementIsVisible = webdriver.until.elementIsVisible;
import {isNullOrUndefined} from "util";

export class TkStartPage {
  navigateTo(route) {
    return browser.get(route);
  }

  elementExists(elementSelector) {
    return isNullOrUndefined(element(by.css(elementSelector)));
  }
}
