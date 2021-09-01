let btnElement = document.querySelector('.calculator__btn');
let sumElement = document.querySelector('#sum');
let deyElement = document.querySelector('#day');
let monthElement = document.querySelector('#month');
let yearElement = document.querySelector('#year');

let rankElement = document.querySelector('#rank');
let cashbackElement = document.querySelector('#cashback');
let bonusesElement = document.querySelector('#bonuses');
let termElement = document.querySelector('#term');
let num;
//работаем срангами
let rank = (sum) =>{


    if (sum >= 1000 && sum < 2000) {
        rankElement.innerHTML = `<img src="img/icons/1.svg"> 1 ранг`;
        cashbackElement.innerHTML = `4%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg">`;
        num = 1;
    }
    else if (sum >= 2000 && sum < 4000) {
        rankElement.innerHTML = `<img src="img/icons/2.svg"> 2 ранг`;
        cashbackElement.innerHTML = `4,5%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg">`;
        num = 2;
    }
    else if (sum >= 4000 && sum < 8000) {
        rankElement.innerHTML = `<img src="img/icons/3.svg"> 3 ранг`;
        cashbackElement.innerHTML = `6,5%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg"> <img src="img/icons/tel.svg">`;
        num = 3;
    }
    else if(sum >= 8000 && sum < 15000){
        rankElement.innerHTML = `<img src="img/icons/4.svg"> 4 ранг`;
        cashbackElement.innerHTML = `7%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg"> <img src="img/icons/tel.svg">`;
        num = 4;
    }
    else if(sum >= 15000 && sum < 30000) {
        rankElement.innerHTML = `<img src="img/icons/5.svg"> 5 ранг`;
        cashbackElement.innerHTML = `9%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg"> <img src="img/icons/tel.svg">  <img src="img/icons/vip.svg">`;
        num = 5;
    }
    else if(sum >= 30000 && sum < 60000) {
        rankElement.innerHTML = `<img src="img/icons/6.svg"> 6 ранг`;
        cashbackElement.innerHTML = `9,5%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg"> <img src="img/icons/tel.svg">  <img src="img/icons/vip.svg">`;
        num = 6;
    }
    else if(sum >= 6000 && sum < 10000) {
        rankElement.innerHTML = `<img src="img/icons/7.svg"> 7 ранг`;
        cashbackElement.innerHTML = `12,5%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg"> <img src="img/icons/tel.svg">  <img src="img/icons/vip.svg"> <img src="img/icons/pr.svg">`;
        num = 7;
    }
    else if (sum >= 10000 && sum < 15000) {
        rankElement.innerHTML = `<img src="img/icons/8.svg"> 8 ранг`;
        cashbackElement.innerHTML = `13%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg"> <img src="img/icons/tel.svg">  <img src="img/icons/vip.svg"> <img src="img/icons/pr.svg">`;
        num = 8;
    }
    else if (sum >= 15000 && sum < 20000) {
        rankElement.innerHTML = `<img src="img/icons/9.svg"> 9 ранг`;
        cashbackElement.innerHTML = `17,5%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg"> <img src="img/icons/tel.svg">  <img src="img/icons/vip.svg"> <img src="img/icons/pr.svg">`;
        num = 9;
    }
    else if (sum >= 20000) {
        rankElement.innerHTML = `<img src="img/icons/10.svg"> 10 ранг`;
        cashbackElement.innerHTML = `20%`;
        bonusesElement.innerHTML = `<img src="img/icons/castle.svg"> <img src="img/icons/tel.svg">  <img src="img/icons/vip.svg"> <img src="img/icons/pr.svg">`;
        num = 10;
    }
}

//расчитываем дату
let getDates = () => {
    let currentDey = deyElement.value;
    let currentmonth = monthElement.value;
    let currentyear = yearElement.value;

    let fullDate = new Date(currentyear,currentmonth,currentDey);
    fullDate.setDate(fullDate.getDate() + 56);

    //преобразовываем дату
    let finalDate = [
        addLeadZero(fullDate.getDate()),
        addLeadZero(fullDate.getMonth() + 1),
        fullDate.getFullYear()
    ].join('.');

    function addLeadZero(val) {
        if (+val < 10) return '0' + val;
        return val;
    };
    termElement.innerHTML = `Максимальны доступный кебек будет получен <b>${finalDate}</b> на <b>${num} уровне </b>`;
};

btnElement.addEventListener('click', () => {
    rank(sumElement.value);
    getDates();
});

