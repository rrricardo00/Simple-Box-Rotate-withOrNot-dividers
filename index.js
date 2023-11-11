var container = document.querySelector('.cube');

container.addEventListener('mousemove', function(event) {
 var centerX = container.clientWidth / 2;
 var centerY = container.clientHeight / 2;
 var angleX = (event.clientX - centerX) / centerX * 90;
 var angleY = (event.clientY - centerY) / centerY * -90;
 var angleZ = (event.clientX - centerX) / centerX * -45;
 container.style.transform = 'rotateX(' + angleY + 'deg) rotateY(' + angleX + 'deg) rotateZ(' + angleZ + 'deg)';
});

container.addEventListener('mouseleave', function() {
    container.style.transform = 'rotateX(' + angleY + 'deg) rotateY(' + angleX + 'deg) rotateZ(' + angleZ + 'deg)';
});