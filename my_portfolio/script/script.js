// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero_title');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animation = `typing 1s ${i * 0.1}s forwards`;
        heroTitle.appendChild(span);
    }
});


// blog-embed.js

function fetchAndDisplayBlogPosts() {
    fetch('https://yourblogwebsite.com/rss-feed')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'application/xml');
            const items = xmlDoc.querySelectorAll('item');
            let html = '';

            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;
                html += `<h2><a href="${link}">${title}</a></h2>`;
            });

            const blogPostsContainer = document.getElementById('blog-posts');
            if (blogPostsContainer) {
                blogPostsContainer.innerHTML = html;
            }
        });
}

