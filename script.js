let menu_icon = document.querySelector('.menu_icon')
let sidebar = document.querySelector('.sidebar')
let sidebar_icon = document.querySelector('.sidebar_icon')
const loadingSpinner = document.getElementById('loading-spinner');

menu_icon.addEventListener('click', () => {
    sidebar.classList.add('open');
})

sidebar_icon.addEventListener('click', () => {
    sidebar.classList.remove('open')
});


loadingSpinner.style.display = 'block';
setTimeout(() => {
  loadingSpinner.style.display = 'none';
}, 2000);
