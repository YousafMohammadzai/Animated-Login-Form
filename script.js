const wrapper = document.querySelector('.wrapper');
const logreg = document.querySelector('.logreg');
const login = document.querySelector('.loginLink');
logreg.onclick = () =>{
    wrapper.classList.add('active');
}

login.onclick = () =>{
    wrapper.classList.remove('active');
}