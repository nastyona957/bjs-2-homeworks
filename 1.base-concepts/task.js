"use strict";

// Задача 1: Решение квадратных уравнений
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return []; 
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root]; 
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2]; 
  }
}

// Задача 2: Калькулятор ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseFloat(countMonths);
  
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  
  const monthlyPercent = percent / 100 / 12;
  
  const loanBody = amount - contribution;
  
  if (loanBody === 0) {
    return 0;
  }
  
  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  const totalAmount = monthlyPayment * countMonths;
  
  return Number(totalAmount.toFixed(2));
}

function testCase() {
  console.log("Тестирование решения квадратных уравнений:");
  console.log("x² - 3x + 2 = 0:", solveEquation(1, -3, 2)); 
  
  console.log("\nТестирование калькулятора ипотеки:");
  console.log("10, 0, 50000, 12:", calculateTotalMortgage(10, 0, 50000, 12)); 
  console.log("10, 1000, 50000, 12:", calculateTotalMortgage(10, 1000, 50000, 12)); 

}