import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import createStore from "../../api/store";
import { Provider } from "react-redux";
import Header from "./Header";

const store = createStore();

describe("Header", () => {
  it("renders", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Header />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
