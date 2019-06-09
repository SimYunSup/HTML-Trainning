const navLogin = document.querySelector('.nav-login');
const navRegister = document.querySelector('.nav-register');
const navLogout = document.querySelector('.nav-logout');
const userId = document.querySelector('.user-id');

let idPromise = new Promise((resolve, reject) =>{
    let idSession = window.sessionStorage.getItem('Id');
    if(idSession)
        resolve(idSession);
    else
        reject();
});
window.addEventListener('load', () => {
    idPromise
        .then((idSession) => {
            userId.textContent = idSession;
            navLogin.classList.add('invisible');
            navRegister.classList.add('invisible');
            navLogout.classList.remove('invisible');
        }).catch(() => {
        userId.textContent = 'Guest';
        navLogin.classList.remove('invisible');
        navRegister.classList.remove('invisible');
        navLogout.classList.add('invisible');
    });
});

navLogout.onclick = () => {
    deleteCookie('Id');
    window.localStorage.clear();
    window.sessionStorage.clear();
};

let deleteCookie = (name) => {
    let delDate = new Date();
    delDate.setTime(delDate.getTime() - 1);
    document.cookie = name + "=;expires=" + delDate.toUTCString() +";";
};