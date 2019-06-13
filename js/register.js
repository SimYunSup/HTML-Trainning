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
const checkTerm = document.querySelector('.check-term');

const idValid = document.querySelector('.valid-id');
const idInvalid = document.querySelector('.invalid-id');
const pwValid = document.querySelector('.valid-pw');
const pwInvalid = document.querySelector('.invalid-pw');
const pwChValid = document.querySelector('.valid-pwch');
const pwChInvalid = document.querySelector('.invalid-pwch');
const lastnameValid = document.querySelector('.valid-lastname');
const lastnameInvalid = document.querySelector('.invalid-lastname');
const firstnameValid = document.querySelector('.valid-firstname');
const firstnameInvalid = document.querySelector('.invalid-firstname');
const genderValid = document.querySelector('.valid-gender');
const genderInvalid = document.querySelector('.invalid-gender');
const phoneNumValid = document.querySelector('.valid-phonenum');
const phoneNumInvalid = document.querySelector('.invalid-phonenum');
const studentNumValid = document.querySelector('.valid-studentnum');
const studentNumInvalid = document.querySelector('.invalid-studentnum');
const termInvalid = document.querySelector('.invalid-term');

/*innerHTML -> firstchild*/
id.addEventListener('input', () => {
    let standard_id = /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.([a-zA-Z0-9]*\.[a-zA-Z0-9]*|[a-zA-Z0-9]*)/;
    if (standard_id.test(id.value)) {
        idInvalid.classList.add('invisible');
        idValid.classList.remove('invisible');
    } else {
        idInvalid.classList.remove("invisible");
        idValid.classList.add("invisible");
    }
});

pw.addEventListener('input', () => {
    if (!(pw.value == "")) {
        pwInvalid.classList.add('invisible');
        pwValid.classList.remove('invisible');
    } else {
        pwInvalid.classList.remove("invisible");
        pwValid.classList.add("invisible");
    }
});

pwch.addEventListener('input', () => {
    if (pw.value == pwch.value) {
        pwChInvalid.classList.add('invisible');
        pwChValid.classList.remove('invisible');
    } else {
        pwChInvalid.classList.remove('invisible');
        pwChValid.classList.add('invisible');
    }
});

lastname.addEventListener('input', () => {
    if (!(lastname.value == "")) {
        lastnameInvalid.classList.add('invisible');
        lastnameValid.classList.remove('invisible');
    } else {
        lastnameInvalid.classList.remove("invisible");
        lastnameValid.classList.add("invisible");
    }
});

firstname.addEventListener('input', () => {
    if (!(firstname.value == "")) {
        firstnameInvalid.classList.add('invisible');
        firstnameValid.classList.remove('invisible');
    } else {
        firstnameInvalid.classList.remove("invisible");
        firstnameValid.classList.add("invisible");
    }
});

gender.addEventListener('change', () => {
    genderInvalid.classList.add('invisible');
    genderValid.classList.remove('invisible');
});

phonenum.addEventListener('input', () => {
    let standard_phone = /^01\d{9}/;
    if (standard_phone.test(phonenum.value)) {
        phoneNumInvalid.classList.add('invisible');
        phoneNumValid.classList.remove('invisible');
    } else {
        phoneNumInvalid.classList.remove("invisible");
        phoneNumValid.classList.add("invisible");
    }
});

studentnum.addEventListener('input', () => {
    let standard_st = /\d{4}(\d{3})\d{3}/;
    if (!(studentnum.value.length > 9 && studentnum.value.length < 11) || !(standard_st.exec(studentnum.value))) {
        studentNumValid.classList.add('invisible');
        studentNumInvalid.classList.remove('invisible');
        major.textContent = "";
    } else {
        studentNumValid.classList.remove('invisible');
        studentNumInvalid.classList.add('invisible');

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

checkTerm.addEventListener('click', () => {
    if (checkTerm.checked == true) {
        termInvalid.classList.add('invisible');
    } else {
        termInvalid.classList.remove('invisible');
    }
});

form.onsubmit = () => {
    if (!(id.value)) {
        idValid.classList.add('invisible');
        idInvalid.classList.remove('invisible');
    }
    if (!(pw.value)) {
        pwValid.classList.add('invisible');
        pwInvalid.classList.remove('invisible');
    }
    if (!(pwch.value)) {
        pwChValid.classList.add('invisible');
        pwChInvalid.classList.remove('invisible');
    }
    if (!(lastname.value)) {
        lastnameValid.classList.add('invisible');
        lastnameInvalid.classList.remove('invisible');
    }
    if (!(firstname.value)) {
        firstnameValid.classList.add('invisible');
        firstnameInvalid.classList.remove('invisible');
    }
    if (!(phonenum.value)) {
        phoneNumValid.classList.add('invisible');
        phoneNumInvalid.classList.remove('invisible');
    }
    if (!(studentnum.value)) {
        studentNumValid.classList.add('invisible');
        studentNumInvalid.classList.remove('invisible');
    }
    if (gender.options[gender.selectedIndex].text == 'Choose') {
        genderValid.classList.add('invisible');
        genderInvalid.classList.remove('invisible');
    }
    if (checkTerm.checked != true) {
        termInvalid.classList.remove('invisible');
    }
    if (idValid.classList.contains("invisible")) {
        alert("Enter Email Address.");
        id.focus();
        return false;
    } else if (pwValid.classList.contains("invisible")) {
        alert("Enter Password.");
        pw.focus();
        return false;
    } else if (pwChValid.classList.contains("invisible")) {
        alert("Doesn't match Password and Confirm Password.");
        pwch.focus();
        return false;
    } else if (lastnameValid.classList.contains("invisible")) {
        alert("Enter your Lastname.");
        lastname.focus();
        return false;
    } else if (firstnameValid.classList.contains("invisible")) {
        alert("Enter your Firstname.");
        firstname.focus();
        return false;
    } else if (genderValid.classList.contains("invisible")) {
        alert("Select your gender.");
        gender.focus();
        return false;
    } else if (phoneNumValid.classList.contains("invisible")) {
        alert("Enter your Phone number.");
        phonenum.focus();
        return false;
    } else if (studentNumValid.classList.contains("invisible")) {
        alert("Enter your Student-ID");
        studentnum.focus();
        return false;
    } else if (!(termInvalid.classList.contains("invisible"))) {
        alert("Agree Term of Services and Conditions");
        checkTerm.focus();
        return false;
    } else {
        alert("Register successfully");
        return true;
    }
};
