import allure from "@wdio/allure-reporter";

describe("Test allure", () => {
  it("test include attachment in afterHook", () => {
    allure.step("Open url", async () => {
      browser.url("https://the-internet.herokuapp.com/");
    });
  });
  afterEach(() => {
    allure.addAttachment("test log", "successfully opened url", "text/plain");
  });
});
