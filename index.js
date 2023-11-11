let container = document.querySelector(".cube");

if (container) {
  container.addEventListener("mousemove", function (event) {
    let centerX = container.clientWidth / 2;
    let centerY = container.clientHeight / 2;
    let angleX = ((event.clientX - centerX) / centerX) * 90;
    let angleY = ((event.clientY - centerY) / centerY) * -90;
    let angleZ = ((event.clientX - centerX) / centerX) * -45;
    container.style.transform =
      "rotateX(" +
      angleY +
      "deg) rotateY(" +
      angleX +
      "deg) rotateZ(" +
      angleZ +
      "deg)";
  });

  container.addEventListener("mouseleave", function () {
    container.style.transform =
      "rotateX(" +
      angleY +
      "deg) rotateY(" +
      angleX +
      "deg) rotateZ(" +
      angleZ +
      "deg)";
  });
}
