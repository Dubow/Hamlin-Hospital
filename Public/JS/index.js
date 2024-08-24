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

    // Simple example: Redirect to Google search results for website
    const searchUrl = `http://localhost:3000/home`;
    window.location.href = searchUrl;
}

document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    console.log('Submit Button:', submitBtn); // Check if this logs the button element

    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            console.log('Button clicked'); // Check if this logs when the button is clicked
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const imageInput = document.getElementById('image');

            if (title && content && imageInput.files.length > 0) {
                const reader = new FileReader();
                reader.onload = function () {
                    const imageSrc = reader.result;
                    const article = document.createElement('div');
                    article.classList.add('article');

                    article.innerHTML = `
                        <img src="${imageSrc}" alt="Article Image">
                        <h2>${title}</h2>
                        <p>${content}</p>
                    `;

                    document.getElementById('articles').appendChild(article);

                    // Clear input fields after posting
                    document.getElementById('title').value = '';
                    document.getElementById('content').value = '';
                    document.getElementById('image').value = '';
                };
                reader.readAsDataURL(imageInput.files[0]);
            } else {
                alert('Please fill out all fields and select an image.');
            }
        });
    } else {
        console.error('Submit Button not found');
    }
});
