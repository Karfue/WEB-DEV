// Calculate if you can afford ur car or not.
// const express = require("express");
import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json());

function calculateMinimumMonthlyIncome(carPrice) {
  const downPayment = carPrice * 0.2;
  const loanAmount = carPrice - downPayment;
  const annualInterestRate = 0.1;
  const monthlyInterestRate = annualInterestRate / 12;
  const loanTenureMonths = 48;
  const emi =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanTenureMonths)) /
    (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1);
  const minimumMonthlyIncome = emi / 0.1;
  console.log(
    `you need to earn minimum ${minimumMonthlyIncome} to buy the car.`,
  );
  // res.send(minimumMonthlyIncome);
}

app.post("/", (req, res) => {
  const { carPrice } = req.body;
  if (isNaN(carPrice) || carPrice <= 0) {
    console.log("Please enter a valid car price");
  }
  calculateMinimumMonthlyIncome(carPrice);
});

app.listen(PORT, () => {
  console.log("harsh");
});
