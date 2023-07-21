function animateTarget() {
    const circles = document.querySelectorAll(".circle");
    let delay = 100;
    circles.forEach((circle, index) => {
      setTimeout(() => {
        circle.style.opacity = "1";
      }, delay * index);
    });
  }

  animateTarget();