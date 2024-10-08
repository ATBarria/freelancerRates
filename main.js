console.log("hello world!!");

// task 1

function dayRate(ratePerHour) {
  const ratePerDay = ratePerHour * 8;

  console.log(ratePerDay);
}

dayRate(16);

// task 2

function daysInBudget(budget = 1, ratePerHour = 1) {
  const ratePerDay = ratePerHour * 8;
  const totalDays = budget / ratePerDay;
  console.log(Math.floor(totalDays));
}

daysInBudget(1280, 25);

// task 3

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const ratePerDay = ratePerHour * 8;

  const numberOfMonth = Math.floor(numDays / 22);

  const excedingDays = numDays % 22;

  const discountedMonths = numberOfMonth * 22 * ratePerDay * (1 - discount);
  const excedingDaysCost = excedingDays * ratePerDay;
  const totalCost = Math.ceil(discountedMonths + excedingDaysCost);

  console.log(totalCost);
}

priceWithMonthlyDiscount(16, 130, 0.15);
