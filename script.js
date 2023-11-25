// add class navbarDark on navbar scroll
const header = document.querySelector('.header');
const navLogoImg = document.querySelector('.nav-logo img');
const headerNav = document.querySelector('.header .nav');

function getDataAfterLastSlash(text) {
    const parts = text.split('/');
    const lastPart = parts[parts.length - 1];

    return lastPart;
}
const page = getDataAfterLastSlash(window.location.pathname);

if (page != 'index.html') {
    header.style.padding = '4rem 0';
    navLogoImg.style.marginTop = '-27px'; // Adjust the value as needed
    headerNav.style.marginTop = '-13px'; // Adjust the value as needed
}

window.onscroll = function () {
    var top = window.scrollY;
    if (page == 'index.html') {

        if (top >= 200) {
            console.log('scrolled');
            header.classList.add('navbarDark');
            navLogoImg.style.marginTop = '-27px'; // Adjust the value as needed
            headerNav.style.marginTop = '-13px'; // Adjust the value as needed

        }
        else {
            header.classList.remove('navbarDark');
            navLogoImg.style.marginTop = '15px'; // Adjust the value as needed
            headerNav.style.marginTop = '30px'; // Adjust the value as needed
        }
    }
}


// //submit button
// const submitButton = document.querySelector('.btn');

// console.log(submitButton);

// submitButton.addEventListener('click', function (event) {
//     event.preventDefault();

//     const name = document.querySelector('#name').value;
//     console.log(name);
//     const email = document.querySelector('#email').value;
//     console.log(email);
//     const message = document.querySelector('#phone').value;
//     console.log(message);
//     const subject = document.querySelector('#project').value;
//     console.log(subject);

//     if (name === '' || email === '' || message === '' || subject === '') {
//         alert('Please fill all the fields!');
//     } else {
//         //  alert('Thank you for contacting us.');
//         document.querySelector('#name').value = '';
//         document.querySelector('#email').value = '';
//         document.querySelector('#phone').value = '';
//         document.querySelector('#project').value = '';

//     }
// });

//submit button
const submitButton = document.querySelector('.btn');
const messageBox = document.querySelector('#MessageBox');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#subject').value;
    const subject = document.querySelector('#project').value;

    if (name === '' || email === '' || message === '' || subject === '') {
        showMessage('Please fill all the fields', 'error');
    } else {
        showMessage('Thank you for contacting us', 'success');
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#subject').value = '';
        document.querySelector('#project').value = '';

    }
});

function showMessage(message, type) {
    messageBox.innerHTML = `<span class="alert alert-${type}" role="alert">${message}</span>`;
    // Clear message after a few seconds
    setTimeout(() => {
        messageBox.innerHTML = '';
    }, 3000);
}
