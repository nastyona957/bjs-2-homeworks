"use strict";

// Задача 1: Решение квадратных уравнений
function solveEquation(a, b, c) {
  const discriminant = Math.pow(b, 2) - 4 * a * c;
  
  return discriminant < 0 
    ? [] 
    : discriminant === 0 
      ? [-b / (2 * a)] 
      : [
          (-b + Math.sqrt(discriminant)) / (2 * a),
          (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
}

// Задача 2: Калькулятор ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentNum = parseFloat(percent);
  const contributionNum = parseFloat(contribution);
  const amountNum = parseFloat(amount);
  const countMonthsNum = parseFloat(countMonths);
  
  const isValid = [percentNum, contributionNum, amountNum, countMonthsNum]
    .every(value => !isNaN(value));
  
  if (!isValid) {
    return false;
  }
  
  const monthlyPercent = percentNum / 100 / 12;
  
  const loanBody = amountNum - contributionNum;
  
  return loanBody === 0 
    ? 0 
    : Number(
        (loanBody * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonthsNum) - 1)) * countMonthsNum)
          .toFixed(2)
      );
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
