const id = document.querySelector('.id');
const pw = document.querySelector(".pw");
const pwch = document.querySelector('.pw-check');
const lastname = document.querySelector('.lastname');
const firstname = document.querySelector('.firstname');
const gender = document.querySelector('.gender');
const phonenum = document.querySelector('.phone-number');
const major = document.querySelector('.major');
const studentnum = document.querySelector('.student-number');
const form = document.querySelector('.form-register');
const check_term = document.querySelector('.check-term');

const valid_id = document.querySelector('.valid-id');
const invalid_id = document.querySelector('.invalid-id');
const valid_pw = document.querySelector('.valid-pw');
const invalid_pw = document.querySelector('.invalid-pw');
const valid_pwch = document.querySelector('.valid-pwch');
const invalid_pwch = document.querySelector('.invalid-pwch');
const valid_lastname = document.querySelector('.valid-lastname');
const invalid_lastname = document.querySelector('.invalid-lastname');
const valid_firstname = document.querySelector('.valid-firstname');
const invalid_firstname = document.querySelector('.invalid-firstname');
const valid_gender = document.querySelector('.valid-gender');
const invalid_gender = document.querySelector('.invalid-gender');
const valid_phonenum = document.querySelector('.valid-phonenum');
const invalid_phonenum = document.querySelector('.invalid-phonenum');
const valid_studentnum = document.querySelector('.valid-studentnum');
const invalid_studnetnum = document.querySelector('.invalid-studentnum');
const invalid_term = document.querySelector('.invalid-term');

/*innerHTML -> firstchild*/
id.addEventListener('input', function () {
    let standard_id = /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.([a-zA-Z0-9]*\.[a-zA-Z0-9]*|[a-zA-Z0-9]*)/;
    if (standard_id.test(id.value)) {
        invalid_id.classList.add('invisible');
        valid_id.classList.remove('invisible');
    } else {
        invalid_id.classList.remove("invisible");
        valid_id.classList.add("invisible");
    }
});

pw.addEventListener('input', function () {
    if (isNaN(pw.value)) {
        invalid_pw.classList.add('invisible');
        valid_pw.classList.remove('invisible');
    } else {
        invalid_pw.classList.remove("invisible");
        valid_pw.classList.add("invisible");
    }
});

pwch.addEventListener('input', function () {
    if (pw.value == pwch.value) {
        invalid_pwch.classList.add('invisible');
        valid_pwch.classList.remove('invisible');
    } else {
        invalid_pwch.classList.remove('invisible');
        valid_pwch.classList.add('invisible');
    }
});

lastname.addEventListener('input', function () {
    if (isNaN(lastname.value)) {
        invalid_lastname.classList.add('invisible');
        valid_lastname.classList.remove('invisible');
    } else {
        invalid_lastname.classList.remove("invisible");
        valid_lastname.classList.add("invisible");
    }
});

firstname.addEventListener('input', function () {
    if (isNaN(firstname.value)) {
        invalid_firstname.classList.add('invisible');
        valid_firstname.classList.remove('invisible');
    } else {
        invalid_firstname.classList.remove("invisible");
        valid_firstname.classList.add("invisible");
    }
});

gender.addEventListener('change', function () {
    invalid_gender.classList.add('invisible');
    valid_gender.classList.remove('invisible');
});

phonenum.addEventListener('input', function () {
    let standard_phone = /^01\d{9}/;
    if (standard_phone.test(phonenum.value)) {
        invalid_phonenum.classList.add('invisible');
        valid_phonenum.classList.remove('invisible');
    } else {
        invalid_phonenum.classList.remove("invisible");
        valid_phonenum.classList.add("invisible");
    }
});

studentnum.addEventListener('input', function () {
    if (!(studentnum.value.length > 9 && studentnum.value.length < 11)) {
        valid_studentnum.classList.add('invisible');
        invalid_studnetnum.classList.remove('invisible');
        major.textContent = "";
    } else {
        valid_studentnum.classList.remove('invisible');
        invalid_studnetnum.classList.add('invisible');
        let standard_st = /\d{4}(\d{3})\d{3}/;
        let majornum = standard_st.exec(studentnum.value)[1];
        switch (majornum) {
            case '120':
                major.textContent = '기계공학부';
                break;
            case '136':
                major.textContent = '컴퓨터공학부';
                break;
            case '140':
                major.textContent = '메카트로닉스학부';
                break;
            case '151':
                major.textContent = '디자인건축공학부';
                break;
            case '161':
                major.textContent = '전기전자통신공학부';
                break;
            case '174':
                major.textContent = '에너지신소재화학공학부';
                break;
            case '180':
                major.textContent = '산업경영학부';
                break;
            default:
                major.textContent = '';
        }
    }
});

check_term.addEventListener('click', function(){
    if (check_term.checked == true) {
        invalid_term.classList.add('invisible');
    } else {
        invalid_term.classList.remove('invisible');
    }
});

form.onsubmit = function (event) {
    if (!(id.value)) {
        valid_id.classList.add('invisible');
        invalid_id.classList.remove('invisible');
    }
    if (!(pw.value)) {
        valid_pw.classList.add('invisible');
        invalid_pw.classList.remove('invisible');
    }
    if (!(pwch.value)) {
        valid_pwch.classList.add('invisible');
        invalid_pwch.classList.remove('invisible');
    }
    if (!(lastname.value)) {
        valid_lastname.classList.add('invisible');
        invalid_lastname.classList.remove('invisible');
    }
    if (!(firstname.value)) {
        valid_firstname.classList.add('invisible');
        invalid_firstname.classList.remove('invisible');
    }
    if (!(phonenum.value)) {
        valid_phonenum.classList.add('invisible');
        invalid_phonenum.classList.remove('invisible');
    }
    if (!(studentnum.value)) {
        valid_studentnum.classList.add('invisible');
        invalid_studnetnum.classList.remove('invisible');
    }
    if (gender.options[gender.selectedIndex].text == 'Choose') {
        valid_gender.classList.add('invisible');
        invalid_gender.classList.remove('invisible');
    }
    if (check_term.checked != true) {
        invalid_term.classList.remove('invisible');
    }
    if (valid_id.classList.contains("invisible")) {
        alert("Enter Email Address.");
        id.focus();
        return false;
    } else if (valid_pw.classList.contains("invisible")) {
        alert("Enter Password.");
        pw.focus();
        return false;
    } else if (valid_pwch.classList.contains("invisible")) {
        alert("Doesn't match Password and Confirm Password.");
        pwch.focus();
        return false;
    } else if (valid_lastname.classList.contains("invisible")) {
        alert("Enter your Lastname.");
        lastname.focus();
        return false;
    } else if (valid_firstname.classList.contains("invisible")) {
        alert("Enter your Firstname.");
        firstname.focus();
        return false;
    } else if (valid_gender.classList.contains("invisible")) {
        alert("Select your gender.");
        gender.focus();
        return false;
    } else if (valid_phonenum.classList.contains("invisible")) {
        alert("Enter your Phone number.");
        phonenum.focus();
        return false;
    } else if (valid_studentnum.classList.contains("invisible")) {
        alert("Enter your Student-ID");
        studentnum.focus();
        return false;
    } else if (!(invalid_term.classList.contains("invisible"))) {
        alert("Agree Term of Services and Conditions");
        check_term.focus();
        return false;
    } else {
        alert("Register successfully");
        return true;
    }
};
