let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        "ответ на первый вопрос": "ответ на второй вопрос"
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = +prompt("Во сколько обойдется?", "");
    if (typeof (a) === "string" && typeof (a) != null && typeof (b) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad answer");
        i--;
    }
}
appData.moneyPerDay = appData.budget / 30;
alert("Ваш бюджет на день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log("Это высокий уровень достатка!");
} else {
    console.log("Произошла ошибка");
}

switch (appData.moneyPerDay) {
    case (appData.moneyPerDay < 2000):
        console.log("Низкий уровень");
        break;
    case (appData.moneyPerDay > 2000 && appData.moneyPerDay < 5000):
        console.log("Средний уровень");
        break;
    case (appData.moneyPerDay > 5000):
        console.log("Высокий уровень");
        break;
    default:
        console.log("Что-то не сработало");
        break;
}