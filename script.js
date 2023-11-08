

const mobile_nav = document.querySelector('.mobile-btn');
const nav_header = document.querySelector('.header');

let toggleNavbar=() =>{
    // alert("saloni");
    nav_header.classList.toggle("active")
}
mobile_nav.addEventListener('click',  () => toggleNavbar())













// !====================> ANIMATED CURSOR SCRIPT <================!







const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});


document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});












// !====================> PROJECT SECTION BTN JS <====================!








$(document).on('click','.project-filter li', function(){
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active');
});

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.row').show('1000');
        }
        else{
            $('.row').not('.'+value).hide('1000');
            $('.row').filter('.'+value).show('1000');
        }
    })
})


