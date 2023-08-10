"use strict"; // Строгий режим.
function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let countMonths = window.date.value;

  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Контроль корректность введенных данных.
  if (percent > 0) {
    percent = +percent;
  } else if (percent != 0 || percent == 0) {
    return `"Параметр "Процентная ставка" содержит неправильное значение ${percent}".`;
  }

  if (contribution >= 0) {
    contribution = +contribution;
  } else if (contribution != 0) {
    return `"Параметр "Начальный взнос" содержит неправильное значение ${contribution}".`;
  }

  if (amount >= 0) {
    amount = +amount;
  } else if (amount != 0) {
    return `"Параметр "Общая стоимость" содержит неправильное значение ${amount}".`;
  }
  // Расчет количества месяцев, на которые оформляется ипотека.
  let currentDate = new Date(); // Дата с какого числа берется ипотеки
  countMonths = new Date(window.date.value); //Дата до какого числа берется ипотека
  let payPeriod =
    0 -
    (currentDate.getFullYear() - countMonths.getFullYear()) * 12 -
    (currentDate.getMonth() - countMonths.getMonth());
  countMonths = payPeriod; // Количество месяцев, на которые оформляется ипотека.
  let returnAmount = amount - contribution; // Сумма, которую необходимо вернуть банку.
  percent = percent / 1200; // Процентная ставка
  let monthlyPay =
    amount * (percent + percent / ((1 + percent) ** countMonths - 1)); // Ежемесячная оплата
  let totalAmount = monthlyPay * countMonths; //  общая сумма, которую придется заплатить клиенту.
  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2); //  Возврат результата в функцию
}
