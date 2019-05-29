const id = document.querySelector('.id');
const pw = document.querySelector(".pw");
const form = document.querySelector('.form-login');
const invalid_id = document.querySelector('.invalid-id');
const invalid_pw = document.querySelector('.invalid-pw');

id.addEventListener('input', function () {
    let standard_id = /[a-zA-Z0-9]*@[a-zA-Z0-9]*\.([a-zA-Z0-9]*\.[a-zA-Z0-9]*|[a-zA-Z0-9]*)/;
    if (standard_id.test(id.value)) {
        invalid_id.classList.add('invisible');
    } else {
        invalid_id.classList.remove("invisible");
    }
});

pw.addEventListener('input', function () {
    if (isNaN(pw.value)) {
        invalid_pw.classList.add('invisible');
    } else {
        invalid_pw.classList.remove("invisible");
    }
});

form.onsubmit = function () {
    if (!(id.value)) {
        invalid_id.classList.remove('invisible');

        if (!(pw.value)) {
            invalid_pw.classList.remove('invisible');
        }
    }
    if (!(invalid_id.classList.contains("invisible"))) {
        alert("Enter your ID.");
        id.focus();
        return false;
    } else if (!(invalid_pw.classList.contains("invisible"))) {
        alert("Enter your Password.");
        pw.focus();
        return false;
    } else {
        alert("Login successfully");
        return true;
    }
};


pw.addEventListener('keypress', function () {
    if (!(isNaN(id.value) || isNaN(pw.value)))
        if (event.keyCode == 13) {
            form.submit();
        }
});
