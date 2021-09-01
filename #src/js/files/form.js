const email = document.querySelector('.email');

email.addEventListener('input', () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email.value)) {
        email.setCustomValidity(`Емаил не соответствует стандартам Пример : ivanov18@gmail.com`);
    }  else {
        email.setCustomValidity('');
    }
    email.reportValidity();
});

$(document).ready( function() {
    $("#formDoc").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $(".file__button").html(filename);
    });
});

const ckeck = document.querySelector('#checkAgreement');
const btn = document.querySelector('.modal-form__btn');
ckeck.addEventListener('change', (evt) => {
    if(!evt.target.checked){
        btn.disabled = true;
    }else{
        btn.disabled = false;
    }

});

const phoneMaskSelector = '.phone';
const phoneMaskInputs = document.querySelectorAll(phoneMaskSelector);
const masksOptions = {
    phone: {
        mask: '+{7} (000) 000-00-00'
    }
};

for(const item of phoneMaskInputs) {
    new IMask(item, masksOptions.phone);
}