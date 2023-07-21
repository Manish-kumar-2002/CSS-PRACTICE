const circles = document.querySelectorAll('.circle');

function animateCircles() {
  let delay = 0;
  circles.forEach((circle, index) => {
    setTimeout(() => {
      circle.style.animation = 'pulse 1s infinite';
    }, delay);
    delay += 500; // Adjust the delay as per your preference
  });
}

animateCircles();
const circles = document.querySelectorAll('.circle');

function animateCircles() {
  let delay = 0;
  circles.forEach((circle, index) => {
    setTimeout(() => {
      circle.style.animation = 'pulse 1s infinite';
    }, delay);
    delay += 500; // Adjust the delay as per your preference
  });
}

animateCircles();
