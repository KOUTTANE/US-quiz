const button_quiz = document.querySelector('#button_quiz');
const exit_btn = document.querySelector('.exit_btn');
const pop_up_info = document.querySelector('.pop_up_info');
const button_info = document.querySelector('#button_info');
const pop_up_inf = document.querySelector('.pop_up_inf');
const exits_btn = document.querySelector('.exits_btn');
const main_div = document.querySelector('.main_div');




button_quiz.onclick = () => {
    pop_up_info.classList.add('active');
    main_div.classList.add('active');
}
exit_btn.onclick = () => {
    pop_up_info.classList.remove('active');
    main_div.classList.remove('active');
}
button_info.onclick = () => {
    pop_up_inf.classList.add('active');
    main_div.classList.add('active');
}
exits_btn.onclick = () => {
    pop_up_inf.classList.remove('active');
    main_div.classList.remove('active');
}

