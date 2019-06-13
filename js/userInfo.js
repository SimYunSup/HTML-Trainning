const navLogin = document.querySelector('.nav-login');
const navRegister = document.querySelector('.nav-register');
const navLogout = document.querySelector('.nav-logout');
const userId = document.querySelector('.user-id');

let idPromise = new Promise((resolve, reject) =>{
    //sessionStorage의 메소드인 getitem('이름')으로 변수 값을 받는다.
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
    //localStorage의 메소드인 removeitem('이름')으로 변수를 지우거나 clear()로 모든 변수를 지운다. SessionStorage도 같다.
    window.localStorage.clear();
    window.sessionStorage.clear();
};

//Cookie를 지우는 함수를 만들었다. name에 Cookie에 변수이름을 쓰면 지워진다.
let deleteCookie = (name) => {
    let delDate = new Date();
    //Id의 값을 없애고 expires의 시간을 요청받은 시간 1ms전으로 설정(굳이 안 해도 된다.)하여 cookie를 삭제한다.
    delDate.setTime(delDate.getTime() - 1);
    document.cookie = name + "=;expires=" + delDate.toUTCString() +";";
};