document.addEventListener('DOMContentLoaded', () => {

    //Getting our handles
    const signIn = document.querySelector('.signin');
    const modal = document.querySelector('.modal');
    const close = document.querySelector('.close');
    const submit = document.querySelector('.submit');
    const user = document.querySelector('#user');
    const pass = document.querySelector('#pass');


    signIn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    submit.addEventListener('click', () => {
        user.classList.add('error');
        pass.classList.add('error');
        console.log(user)
    });

    user.addEventListener('focus', (e) => {
        e.target.classList.remove('error');
        console.log(user)
    })

    pass.addEventListener('focus', (e) => {
        e.target.classList.remove('error');
    })

});
    // Jquery Styles
    // $('#user').focus( (e) => {
    //     e.target.classList.remove('error');
    //     console.log(user)
    // })