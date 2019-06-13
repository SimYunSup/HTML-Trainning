const storageId = document.querySelector('.id');
const rememberA = document.querySelector('.rememberId');
const loginButton = document.querySelector('.login');


loginButton.onclick = () => {
    let expDate = new Date();
    //요청받은 시각을 기준으로 Date 객체를 만들고 setTime으로 그 시각(ms) + 72시간을 더해 쿠키를 지우지 않을 경우 72시간 지속되게 한다.
    expDate.setTime(expDate.getTime()+(3*24*60*60*1000));
    //document.cookie = "문자열"를 통해 Set-Cookie 헤더를 설정한다.
    /*
    문자열에는 다음이 들어간다.
    먼저 쿠키에 넣고싶은 정보에 대한 이름-값 쌍이 들어간다.
    Expires = 시각; / Max-age = 시간(ms); 으로 만료시간을 정한다.
    Domain = 도메일; 으로 쿠키가 적용되는 도메인을 지정한다.
    Path = 위치; 로 쿠키를 반환할 경로를 지정한다.
    Secure; / HTTP-Only; 로 HTTPS에서만 작동/자바스크립트에서 쿠키 조회 불가로 만든다.
    Samesite; 로 사이트 간 요청과 함께 보내지 못하도록 한다.
     */
    //toGMTString은 더이상 사용되지 않는다고 한다. 이전버전과의 호환성 때문에 남아있다고.
    document.cookie = "Id=" + storageId.value + ";expires="+expDate.toUTCString()+";";
    //window.localStorage.setitem(이름, 값)으로 세션 안에 쌍을 생성, sessionStorage도 동일하다.
    window.localStorage.setItem('Id', storageId.value);
    window.sessionStorage.setItem('Id', storageId.value);

};


