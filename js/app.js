const btnToggle = document.querySelector('.nav-toggle');
const btnClose = document.querySelector('.btn-close-nav');
const sidebar = document.querySelector('.sidebar-nav');

btnToggle.addEventListener('click', () => {

    if(sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    } else {
        sidebar.classList.add('show-sidebar');
        document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
        document.body.style.transition = 'all 0.5s';
    }

}); 

btnClose.addEventListener('click', () => {
        sidebar.classList.remove("show-sidebar");
        document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
        document.body.style.transition = "all 0.5s";
});

