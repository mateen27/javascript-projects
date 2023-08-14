const toggle = document.getElementById('toggleDark');

const body = document.querySelector('body');

toggle.addEventListener('click' , ()=> {
    if(toggle.classList.contains('bi-brightness-high-fill')){
        //removing the className
        body.classList.remove('bi-brightness-high-fill');
        //adding new className
        toggle.classList = 'bi-moon';
        //setting background & color for the body
        body.style.background = '#000000';
        body.style.color = '#f1f1f1f1';
        //for slow animation
        body.style.transition = '2s';
    }
    else {
        toggle.classList.remove('bi-moon');
        toggle.classList = 'bi-brightness-high-fill';
        body.style.background = '#ffffff';
        body.style.color = '#333';
        body.style.transition = '2s';
    }
})