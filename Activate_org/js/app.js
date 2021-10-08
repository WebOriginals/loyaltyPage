
// указываем input технический класс ._seach и датапараметр data-input-search="name"
// указываем блоку содержащиму поисковые элементы дата артибут  data-block-search="name"
// добавляем в стили  класс .hide

let serchElemrnts =  document.querySelectorAll('._seach');
serchElemrnts.forEach( (element) =>{
    element.addEventListener('keyup', (event) => {
        let val = event.target.value.trim().toLowerCase();
        let getAttributeValue = event.target.getAttribute('data-input-search');
        console.log(getAttributeValue);
        let getWrapperSearchElements = document.querySelector('[data-block-search='+ getAttributeValue +']');

        let gettingChildElements = Array.from(getWrapperSearchElements.children);
        console.log(gettingChildElements);

        if(val !== ''){
            gettingChildElements.forEach( (elem) => {
                if(elem.innerText.toLowerCase().search(val) == -1){
                    elem.classList.add('hide');
                } else {
                    elem.classList.remove('hide');
                }
            })
        } else {
            gettingChildElements.forEach(function (elem){
                elem.classList.remove('hide');
            })
        }
    })
})





