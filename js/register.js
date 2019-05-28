const id = document.querySelector('.id');
const pw = document.querySelector(".pw");
const pwch = document.querySelector('.pw-check');
const lastname = document.querySelector('.lastname');
const firstname = document.querySelector('.firstname');
const gender = document.querySelector('.gender');
const phonenum = document.querySelector('.phone-number');
const major = document.querySelector('.major');
const studentnum = document.querySelector('.student-number');
const submit = document.querySelector('.signup');

const valid_id = document.querySelector('.valid-id');
const invalid_id = document.querySelector('.invalid-id');
const valid_pw = document.querySelector('.valid-pw');
const invalid_pw = document.querySelector('.invalid-pw');
const valid_lastname = document.querySelector('.valid-lastname');
const invalid_lastname = document.querySelector('.invalid-lastname');

/*innerHTML -> firstchild*/
id.addEventListener('input', function(){
    let standard_id = /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.([a-zA-Z0-9]*\.[a-zA-Z0-9]*|[a-zA-Z0-9]*)/;
    if(standard_id.test(id.value)){
        invalid_id.classList.add('invisible');
        valid_id.classList.remove('invisible');
    } else {
        invalid_id.classList.remove("invisible");
        valid_id.classList.add("invisible");
    }
});

pw.addEventListener('input', function(){
    if(isNaN(pw.value)){
        invalid_pw.classList.add('invisible');
        valid_pw.classList.remove('invisible');
    } else {
        invalid_pw.classList.remove("invisible");
        valid_pw.classList.add("invisible");
    }
});

lastname.addEventListener('input', function(){
    if(isNaN(lastname.value)){
        invalid_lastname.classList.add('invisible');
        valid_lastname.classList.remove('invisible');
    } else {
        invalid_lastname.classList.remove("invisible");
        valid_lastname.classList.add("invisible");
    }
});

studentnum.addEventListener('input',function(){
    if(!(studentnum.value.length > 9 && studentnum.value.length < 11)){
        major.innerHTML = '';
    } else {
        let standard_st = /\d{4}(\d{3})\d{3}/;
        let majornum = standard_st.exec(studentnum.value)[1];
        switch (majornum) {
            case '120':
                major.innerHTML = '기계공학부';
                break;
            case '136':
                major.innerHTML = '컴퓨터공학부';
                break;
            case '140':
                major.innerHTML = '메카트로닉스학부';
                break;
            case '151':
                major.innerHTML = '디자인건축공학부';
                break;
            case '161':
                major.innerHTML = '전기전자통신공학부';
                break;
            case '174':
                major.innerHTML = '에너지신소재화학공학부';
                break;
            case '180':
                major.innerHTML = '산업경영학부';
                break;
            default:
                major.innerHTML = '';
        }
    }
});

submit.addEventListener('submit', function(){






    if(invalid_id.classList.contains("invisible")){
        alert("Enter Email Address");
        id.focus();
        return false;
    } else if (invalid_pw.classList.contains("invisible")){
        alert("Enter Password");
        pw.focus();
        return false;
    } else if (invalid_pwch.classList.contains("invisible")){
        alert("Doesn't match Password and Confirm Password");
        pwch.focus();
        return false;
    }
    return true;
});
