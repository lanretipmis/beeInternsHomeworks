const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(1);
    const inputs = document.querySelectorAll('input');
    [].slice.call(inputs).forEach(input => {
        console.log(input.type === 'checkbox' && input.checked === true);
        if (input.type === 'checkbox' && input.checked === true) {
            document.cookie = `${input.name}=${input.value}`
        } else if (input.value !== '' && input.type === 'text') {
            document.cookie = `${input.name}=${input.value}`
        }
    
        // if (input.value === '' || input.checked === false){
        //     console.log(document.cookie.split(';'));
        //     // input
        // }
    });
});

const cookie = [];
document.cookie.split('; ').forEach((v, i) => {
    let array = v.split('=');
    cookie.push(array);
})
console.log(cookie);
const inputs = document.querySelectorAll('input');
[].slice.call(inputs).forEach(input => {
    inp
});