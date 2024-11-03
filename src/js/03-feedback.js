const form = document.querySelector('.feedback-form');
const btn = document.querySelector('button');
const LOCAL_STORAGE_KEY = "feedback-form-state"

// form.elements.message.value = localStorage.getItem(LOCAL_STORAGE_KEY) ?? "";


// form.addEventListener('submit', (evt)=> {
//     evt.preventDefault();
    
//     const emailValue =  form.elements.email.value;
//     const messageValue = form.elements.message.value;
//     const STORAGE_VALUE = {
//     email: emailValue, 
//     message: messageValue,
// };


//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(STORAGE_VALUE))
// })




const parsedLocalStorageValue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

form.elements.email.value = parsedLocalStorageValue.email ?? {};
form.elements.message.value = parsedLocalStorageValue.message ?? {};
   




form.addEventListener('input', () => {
   
   


let emailValue =  form.elements.email.value;
let messageValue = form.elements.message.value;
        const STORAGE_VALUE = {
            email: emailValue, 
            message: messageValue,
};

localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(STORAGE_VALUE));
})


form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    form.reset();
})
