let money = +prompt('Ваш бюджет на месяц?'); //Благодаря унарному плюсу здесь передается число.
let time = prompt('Введите дату в формате YYYY-MM-DD');



let appData = {
    budget: money,
    timeData: time,
    expenses: {}, //Это объект. Чтобы создать новое свойство или метод у объекта 2 способа: через точку или [].
    optionalExpenses: {},
    income: [],
    savings: false
};


//Записываем цикл, который задаст вопросы 2 раза

for (let i = 0; i < 2; /*пока не закончатся вопросы, всего два комплекса вопросов*/ i++) {
    /*Записываем действия, которые должны произойти*/
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько обойдется?", '');


    //Пишем условие для цикла
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 20) { //Проверяем что тип данных - строка. Для prompt не имеет смысла./ Проверяем что НЕ равно null. И то же для b. Не может быть пустой строкой
        console.log('done');
        appData.expenses[a] = b;
        /*При использовании квадратных скобок, свойство может содержать любую строку. 
           При ответе на вопрос a - ответ будет записан как свойство объекта appData.expenses. Получается пара (ключ-значение) При вводе данные записываются*/
    } else { //Возвращение на цикл обратно 

    }



}



appData.moneyPerDay = Math.round(appData.budget / 30);

alert(appData.moneyPerDay);

//Цикл проверки уровня бюджета
if (appData.moneyPerDay < 1000) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) { //В противном случае
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 5000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}