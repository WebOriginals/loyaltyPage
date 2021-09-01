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


//Select
let selects = document.getElementsByTagName('select');

if (selects.length > 0) {
    selects_init();
}
function selects_init() {
    for (let index = 0; index < selects.length; index++) {
        const select = selects[index];
        select_init(select);
    }
    //select_callback();
    document.addEventListener('click', function (e) {
        selects_close(e);
    });
    document.addEventListener('keydown', function (e) {
        if (e.which == 27) {
            selects_close(e);
        }
    });
}
function selects_close(e) {
    const selects = document.querySelectorAll('.select');
    if (!e.target.closest('.select')) {
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            const select_body_options = select.querySelector('.select__options');
            select.classList.remove('_active');
            _slideUp(select_body_options, 100);
        }
    }
}
function select_init(select) {
    const select_parent = select.parentElement;
    const select_modifikator = select.getAttribute('class');
    const select_selected_option = select.querySelector('option:checked');
    select.setAttribute('data-default', select_selected_option.value);
    select.style.display = 'none';

    select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

    let new_select = select.parentElement.querySelector('.select');
    new_select.appendChild(select);
    select_item(select);
}
function select_item(select) {
    const select_parent = select.parentElement;
    const select_items = select_parent.querySelector('.select__item');
    const select_options = select.querySelectorAll('option');
    const select_selected_option = select.querySelector('option:checked');
    const select_selected_text = select_selected_option.text;
    const select_type = select.getAttribute('data-type');

    if (select_items) {
        select_items.remove();
    }

    let select_type_content = '';
    if (select_type == 'input') {
        select_type_content = '<div class="select__value"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
    } else {
        select_type_content = '<div class="select__value"><span>' + select_selected_text + '</span></div>';
    }

    select_parent.insertAdjacentHTML('beforeend',
        '<div class="select__item">' +
        '<div class="select__title">' + select_type_content + '</div>' +
        '<div class="select__options">' + select_get_options(select_options) + '</div>' +
        '</div></div>');

    select_actions(select, select_parent);
}
function select_actions(original, select) {
    const select_item = select.querySelector('.select__item');
    const select_body_options = select.querySelector('.select__options');
    const select_options = select.querySelectorAll('.select__option');
    const select_type = original.getAttribute('data-type');
    const select_input = select.querySelector('.select__input');

    select_item.addEventListener('click', function () {
        let selects = document.querySelectorAll('.select');
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            const select_body_options = select.querySelector('.select__options');
            if (select != select_item.closest('.select')) {
                select.classList.remove('_active');
                _slideUp(select_body_options, 100);
            }
        }
        _slideToggle(select_body_options, 100);
        select.classList.toggle('_active');
    });

    for (let index = 0; index < select_options.length; index++) {
        const select_option = select_options[index];
        const select_option_value = select_option.getAttribute('data-value');
        const select_option_text = select_option.innerHTML;

        if (select_type == 'input') {
            select_input.addEventListener('keyup', select_search);
        } else {
            if (select_option.getAttribute('data-value') == original.value) {
                select_option.style.display = 'none';
            }
        }
        select_option.addEventListener('click', function () {
            for (let index = 0; index < select_options.length; index++) {
                const el = select_options[index];
                el.style.display = 'block';
            }
            if (select_type == 'input') {
                select_input.value = select_option_text;
                original.value = select_option_value;
            } else {
                select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
                original.value = select_option_value;
                select_option.style.display = 'none';
            }
        });
    }
}
function select_get_options(select_options) {
    if (select_options) {
        let select_options_content = '';
        for (let index = 0; index < select_options.length; index++) {
            const select_option = select_options[index];
            const select_option_value = select_option.value;
            if (select_option_value != '') {
                const select_option_text = select_option.text;
                select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
            }
        }
        return select_options_content;
    }
}
function select_search(e) {
    let select_block = e.target.closest('.select ').querySelector('.select__options');
    let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
    let select_search_text = e.target.value.toUpperCase();

    for (let i = 0; i < select_options.length; i++) {
        let select_option = select_options[i];
        let select_txt_value = select_option.textContent || select_option.innerText;
        if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
            select_option.style.display = "";
        } else {
            select_option.style.display = "none";
        }
    }
}
function selects_update_all() {
    let selects = document.querySelectorAll('select');
    if (selects) {
        for (let index = 0; index < selects.length; index++) {
            const select = selects[index];
            select_item(select);
        }
    }
}


let _slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}
let _slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}
let _slideToggle = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (window.getComputedStyle(target).display === 'none') {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    }
}