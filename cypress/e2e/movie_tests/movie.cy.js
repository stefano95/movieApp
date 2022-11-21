const randomNum = Math.floor(Math.random() * 100).toString();
var regex = new RegExp(randomNum, "i");

describe("Adds new movie", () => {
  it("adds movie", () => {
    cy.visit("http://localhost:3000/movies");
    cy.findByRole("button", { name: /add movie/i }).click();
    cy.findByRole("textbox", { name: /name/i }).type(randomNum);
    cy.findByRole("textbox", { name: /released on/i }).type("01/01/22");
    cy.findByRole("textbox", { name: /disk/i }).type("1");
    cy.findByRole("button", { name: /create/i }).click();
    cy.findByText(randomNum);
  });
});

describe("Adds second movie", () => {
  it("adds movie", () => {
    cy.visit("http://localhost:3000/movies");
    cy.findByRole("button", { name: /add movie/i }).click();
    cy.findByRole("textbox", { name: /name/i }).type(randomNum + "-copy");
    cy.findByRole("textbox", { name: /released on/i }).type("01/01/22");
    cy.findByRole("textbox", { name: /disk/i }).type("1");
    cy.findByRole("button", { name: /create/i }).click();
    cy.findByText(randomNum + "-copy");
  });
});

describe("Edit existing movie", () => {
  it("edits movie", () => {
    cy.visit("http://localhost:3000/movies");
    cy.findByRole("cell", { name: randomNum }).click();
    cy.findByRole("textbox", { name: /name/i }).type("-edit");
    cy.findByRole("button", { name: /edit/i }).click();
    cy.findByRole("textbox", { name: /disk/i }).type("1");
    cy.findByText(randomNum + "-edit");
  });
});

describe("Delete existing movie", () => {
  it("deletes movie", () => {
    cy.visit("http://localhost:3000/movies");
    cy.findByRole("cell", { name: randomNum + "-copy" }).click();
    cy.findByRole("button", { name: /delete/i }).click();
    cy.findByText(randomNum + "-copy").not();
  });
});
