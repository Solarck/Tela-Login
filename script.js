const password = document.getElementById('password');
const icon = document.getElementById('icon');

function EyeClick() {

    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        icon.setAttribute('src', 'imgs/closed-eye.svg')
    }

    else {
        password.setAttribute('type', 'password');
        icon.setAttribute('src', 'imgs/open-eye.svg')
    }
}