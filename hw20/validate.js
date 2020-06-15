function validate(data) {
    const { login, password, confirmPassword, license, firstName, gender } = data;
    const wrongLogins = ['beeline', 'beeinterns', 'bee'];
    if (!firstName) {
        alert('Введите имя');
    } else if (wrongLogins.some(wrondlogin => wrondlogin === login)) {
        alert('Логин занят');
    } else if (!login || !password) {
        alert('Укажите логин/пароль');
    } else if (password.length < 6) {
        alert('Пароль должен быть длинной не менее 6 символов');
    } else if (password !== confirmPassword) {
        alert('Пароли должны совпадать');
    } else if (!license) {
        alert('Необходимо согласие');
    } else {
        if (gender === "female") {
            alert(`Уважаемая ${firstName}, заявка создана`);
        } else {
            alert(`Уважаемый ${firstName}, заявка создана`);
        }
    }
}
