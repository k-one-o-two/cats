import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

test("renders header", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const header = screen.getByText(/Cat breeds/i);
  expect(header).toBeInTheDocument();
});

test("renders sorter", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const header = screen.getByText(/Sort breeds by/i);
  expect(header).toBeInTheDocument();
});

test("renders search", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const searcher = screen.getByPlaceholderText(/search by breed name/i);
  expect(searcher).toBeInTheDocument();
});
