import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const fNameInput = screen.getByLabelText(/first name/i);
  const lNameInput = screen.getByLabelText(/last name/i);
  const addInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);

  const button = screen.getByRole("button", { type: "submit" });

  fireEvent.change(fNameInput, { target: { value: "Justin" } });
  fireEvent.change(lNameInput, { target: { value: "Marks" } });
  fireEvent.change(addInput, { target: { value: "10512 SE 151st St" } });
  fireEvent.change(cityInput, { target: { value: "Kansas City" } });
  fireEvent.change(stateInput, { target: { value: "MO" } });
  fireEvent.change(zipInput, { target: { value: "64157" } });

  fireEvent.click(button);

  await screen.findByText(/justin/i);
  await screen.findByText(/marks/i);
  await screen.findByText(/10512 SE 151st St/i);
  await screen.findByText(/Kansas City/i);
  await screen.findByText(/mo/i);
  await screen.findByText(/64157/i);
});
