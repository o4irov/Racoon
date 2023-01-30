$(document).ready(function () {
    let $circles = document.getElementsByClassName('work_circle')
    let circles = Array.from($circles)
    // circles.forEach(element => {
    //     element.addEventListener('click', function() {
    //         let current = document.getElementsByClassName("active");
    //         current[0].className = current[0].className.replace(" active", "");
    //         this.className += " active"
    //     })
    // });
    circles[0].addEventListener('click', function () {
        circles[0].className = circles[0].className.replace(" neighbor", " active");
        circles[0].className = circles[0].className.replace(" far", " active");
        circles[1].className = circles[1].className.replace(" active", " neighbor");
        circles[2].className = circles[2].className.replace(" active", " far");
        circles[2].className = circles[2].className.replace(" neighbor", " far");
    });
    circles[1].addEventListener('click', function () {
        circles[1].className = circles[1].className.replace(" neighbor", " active");
        circles[1].className = circles[1].className.replace(" far", " active");
        circles[0].className = circles[0].className.replace(" active", " neighbor");
        circles[0].className = circles[0].className.replace(" far", " neighbor");
        circles[2].className = circles[2].className.replace(" active", " neighbor");
        circles[2].className = circles[2].className.replace(" far", " neighbor");
    });
    circles[2].addEventListener('click', function () {
        circles[2].className = circles[2].className.replace(" neighbor", " active");
        circles[2].className = circles[2].className.replace(" far", " active");
        circles[1].className = circles[1].className.replace(" active", " neighbor");
        circles[0].className = circles[0].className.replace(" active", " far");
        circles[0].className = circles[0].className.replace(" neighbor", " far");
    });
    $(window).scroll(function () {
        if (document.documentElement.scrollTop > 2000) {
            document.getElementById('hrWork').style.transform = 'translateX(0)'
        }
        if (document.documentElement.scrollTop > 2800) {
            document.getElementById('hrProjects').style.transform = 'translateX(0)'
        }
    })
});