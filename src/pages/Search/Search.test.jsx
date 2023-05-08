import { render, screen } from "@testing-library/react";
import React, { useState } from "react";
import Search from "./index.jsx";
import { SearchValueProvider } from "../../context/index.jsx";

describe("App tests", () => {
  it("should contains message", () => {
    render(
      <SearchValueProvider>
        <Search />
      </SearchValueProvider>
    );
    const message = screen.getByText(/Try looking for/i);
    expect(message).toBeInTheDocument();
  });
});
