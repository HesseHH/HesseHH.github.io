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

    if ( listMb.classList.contains('animate__backInRight') ) {
        listMb.classList.remove('animate__backInRight');
        listMb.classList.add('animate__backOutRight');
    }else {
        listMb.classList.remove('animate__backOutRight');
        listMb.classList.add('animate__backInRight');

    }

    if ( !listMb.classList.contains('animate__backInRight') && !listMb.classList.contains('animate__backOutRight') ) {
        listMb.classList.add('animate__backInRight');
    }

});

window.addEventListener('scroll', () => {
    console.log('1')
})

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    // e.preventDefault();
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    console.log('hola')
    
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