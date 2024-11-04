import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = "feedback-form-state";

function populateForm() {
    const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (savedData) {
        form.elements.email.value = savedData.email || '';
        form.elements.message.value = savedData.message || '';
    }
}


function onInputForm (evt) {
    let emailValue =  form.elements.email.value;
    let messageValue = form.elements.message.value;
            const STORAGE_VALUE = {
                email: emailValue, 
                message: messageValue,
    };
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(STORAGE_VALUE));
}

form.addEventListener('input', throttle(onInputForm, 500));

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };

    console.log(formData);
    form.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY)
    
})

populateForm();