const btnList = document.getElementById('btn-list');

btnList.addEventListener('click', () => {
    const listMb = document.getElementById('list-mb');
    
    if ( listMb.classList.contains('is-hidden') ) {
        listMb.classList.toggle('is-hidden'); 
    }else {
        setTimeout(() => {
            listMb.classList.toggle('is-hidden'); 
        }, 1000);
    }

    if ( listMb.classList.contains('animate__fadeInRight') ) {
        listMb.classList.remove('animate__fadeInRight');
        listMb.classList.add('animate__fadeOutRight');
    }else {
        listMb.classList.remove('animate__fadeOutRight');
        listMb.classList.add('animate__fadeInRight');

    }

    if ( !listMb.classList.contains('animate__fadeInRight') && !listMb.classList.contains('animate__fadeOutRight') ) {
        listMb.classList.add('animate__fadeInRight');
    }

});

const linksMb = document.querySelectorAll('.link-mb');

linksMb.forEach( element => {
    element.addEventListener('click', () => {
        const listMb = document.getElementById('list-mb');
        listMb.classList.remove('animate__fadeInRight');
        listMb.classList.add('animate__fadeOutRight');
        setTimeout(() => {
            listMb.classList.remove('animate__fadeOutRight'); 
            listMb.classList.toggle('is-hidden'); 
        }, 1000);
    });
})

window.addEventListener('scroll', () => {
    console.log('1')
})

const form = document.getElementById('form');

form.addEventListener('submit', event => {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if ( email.length === 0 || message.length === 0 ) {
        event.preventDefault();
        const errorMessage = document.getElementById('error-message');
        errorMessage.classList.remove('closed');
        errorMessage.classList.add('show');
        errorMessage.classList.add('animate__animated');
        errorMessage.classList.add('animate__fadeInUp');
        setTimeout(() => {
            setTimeout(() => {
                errorMessage.classList.add('closed');
                errorMessage.classList.remove('animate__animated');
                errorMessage.classList.remove('animate__fadeOutDown');
            }, 1000);
            
            errorMessage.classList.remove('show');
            errorMessage.classList.remove('animate__fadeInUp');
            errorMessage.classList.add('animate__animated');
            errorMessage.classList.add('animate__fadeOutDown');
        }, 5000);
    }


    
});

const proyects = document.querySelectorAll('.proyect');
const modals = document.querySelectorAll('._modal');
proyects.forEach( (element, i) => {
    element.addEventListener('click', () => {
        console.log(modals[i])
        modals[i].classList.remove('closed');
        modals[i].classList.add('show');
    });
});

const btnClosed = document.querySelectorAll('.btn-closed');
btnClosed.forEach( (element, i) => {
    element.addEventListener('click', () => {
        // const modals = document.querySelectorAll('._modal');
        modals[i].classList.remove('show');
        modals[i].classList.add('closed');
    });
});
