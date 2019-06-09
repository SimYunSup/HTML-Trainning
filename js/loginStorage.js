const storageId = document.querySelector('.id');
const rememberA = document.querySelector('.rememberId');
const loginButton = document.querySelector('.login');


loginButton.onclick = () => {
    let expDate = new Date();
    expDate.setTime(expDate.getTime()+(3*24*60*60*1000));
    //document.cookie를 통해 Set-Cookie 헤더를 설정한다.
    //toGMTString은 더이상 사용되지 않는다고 한다. 이전버전과의 호환성 때문에 남아있다고.
    document.cookie = "Id=" + storageId.value + ";expires="+expDate.toUTCString()+";";
    //window.localStorage.setitem(이름, 값)으로 세션 안에 쌍을 생성, sessionStorage도 그렇다.
    window.localStorage.setItem('Id', storageId.value);
    window.sessionStorage.setItem('Id', storageId.value);

};


