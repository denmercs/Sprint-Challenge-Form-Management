import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import FormikForm from "./";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

it("App renders without crashing using react DOM", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("submit clicked and submitted", () => {
  // Tests if FormikForm renders
  const { getByText } = render(<FormikForm />);

  // Grabs element with the exact text of strike which is why we use the ^$ syntax
  const submitButton = getByText(/^submit$/i);

  //Manually click button
  fireEvent.click(submitButton);

  // Test if on click of submit button nothing is displayed because username and password inputs are not filed
  getByText(/Name/);
});
