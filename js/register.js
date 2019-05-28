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
const valid_id = document.querySelector('.validity-id')

/*innerHTML -> firstchild*/
id.addEventListener('input', function(){
    let standard_id = /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.([a-zA-Z0-9]*\.[a-zA-Z0-9]*|[a-zA-Z0-9]*)/;
    if(standard_id.test(id.value)){
        valid_id.classList.remove("invalid");
        valid_id.classList.add("valid");
        valid_id.firstChild.nodeValue = "Cool!";
    } else {
        valid_id.classList.remove("valid");
        valid_id.classList.add("invalid");
        valid_id.firstChild.nodeValue = "Enter valid Email Address";
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
    if(valid_id.classList.contains("invalid")){
        alert("Enter Email Address");
        id.focus();
        return false;
    } else if (valid_pw.classList.contains("invalid")){
        alert("Enter Password");
        pw.focus();
        return false;
    } else if (valid_pwch.classList.contains("invalid")){
        alert("Doesn't match Password and Confirm Password");
        pwch.focus();
        return false;
    }
    return true;
});
