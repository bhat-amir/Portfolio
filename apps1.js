let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.getsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a 
                    [href*=' + id + '] ).classlist.add
                     ('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classlist.toggle('bx-x');
    navbar.classList.toggle('active');
}