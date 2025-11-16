"use strict";

// Задача 1: Решение квадратных уравнений
function solveEquation(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  
 if (d < 0) {
    return [];
  }
  
  if (d == 0) {
    let x = -b / (2 * a);
    return [x];
  }
  
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  return [x1, x2];
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
  
  let P = percent / 100 / 12;
  let S = amount - contribution;
  
  if (S <= 0) {
    return 0;
  }
  
  let payment = S * (P + P / (Math.pow(1 + P, countMonths) - 1));
  let total = payment * countMonths;
  
  return Number(total.toFixed(2));
}

// Тестовые случаи для проверки
function testCase() {
  console.log("Тестирование решения квадратных уравнений:");
  console.log("x² - 3x + 2 = 0:", solveEquation(1, -3, 2)); 
  console.log("x² - 4x + 4 = 0:", solveEquation(1, -4, 4)); 
  console.log("x² + x + 1 = 0:", solveEquation(1, 1, 1)); 
  
  console.log("\nТестирование калькулятора ипотеки:");
  console.log("10, 0, 50000, 12:", calculateTotalMortgage(10, 0, 50000, 12)); 
  console.log("10, 1000, 50000, 12:", calculateTotalMortgage(10, 1000, 50000, 12)); 
  console.log("10, 0, 20000, 24:", calculateTotalMortgage(10, 0, 20000, 24)); 
  console.log("10, 1000, 20000, 24:", calculateTotalMortgage(10, 1000, 20000, 24)); 
  console.log("10, 20000, 20000, 24:", calculateTotalMortgage(10, 20000, 20000, 24)); 
  console.log("10, 0, 10000, 36:", calculateTotalMortgage(10, 0, 10000, 36)); 
  console.log("15, 0, 10000, 36:", calculateTotalMortgage(15, 0, 10000, 36)); 
}
