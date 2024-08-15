const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Sending your message, please wait...'); 
    
    let formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent!');
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
        }else{
            alert('Something went wrong!')
        }
    }
    xhr.send(JSON.stringify(formData))
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
};
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
};

function performSearch() {
    const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchQuery === "") {
        alert("Please enter a search term.");
        return;
    }

    // Simple example: Redirect to Google search results for your website
    const searchUrl = `http://localhost:3000/home`;
    window.location.href = searchUrl;

    // Alternatively, you can handle the search within your website
    // For example, you might filter or search through your site's content dynamically
}
