// get element
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// shou input error message
function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = message;
}

// show input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// check email 
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return re.test(String(email));
}

// checkRequired input
function checkRequired(inputArr) {
    inputArr.forEach( input => {
        if (input.value.trim()==='') {
            showError(input, `${input.placeholder}`);
        } else {
            showSuccess(input);
        }
    });
}

// event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // if (username.value == '') {
    //     showError(username, '用户名称为必填项');
    //     return;
    // } else {
    //     showSuccess(username);
    // }
  
    // if (email.value == '') {
    //     showError(email, '邮箱为必填项');
    //     return;
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, '邮箱格式错误');
    //     return;
    //  }else {
    //     showSuccess(email);
    // }
    
    // if (password.value == '') {
    //     showError(password, '密码为必填项');
    //     return;
    // } else {
    //     showSuccess(password);
    // }
    
    // if (password2.value == '') {
    //     showError(password2, '请重新输入密码');
    //     return;
    // } else if (password2.value !== password.value) {
    //     showError(password2, '两次密码输入不一致');
    //     return;
    // } else {
    //     showSuccess(password2);
    // }

    checkRequired([username, email, password, password2]);
});