let money = prompt("Ваш бюджет на месяц?");
let time = prompt ("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        "ответ на первый вопрос" : "ответ на второй вопрос"
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert ("Ваш бюджет на 1 день: " + appData.budget/30);