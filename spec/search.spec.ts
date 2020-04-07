import { should } from "chai";

should();

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title: string = browser.getTitle();
    title.should.eql("Sandbox");

    const header: string = $("h1").getText();
    header.should.eql("Sandbox");
  });
});
