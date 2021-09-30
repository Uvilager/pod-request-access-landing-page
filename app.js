function validateEmail() {
    let email = document.querySelector('.email').value;
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        document.querySelector('.error').style.visibility = 'hidden';
    } else {
        document.querySelector('.error').style.visibility = 'visible';
    }
}
