const createTargetBoard = (numRings) => {
    const targetBoard = document.getElementById('targetBoard');
    targetBoard.innerHTML = '';
  
    for (let i = 1; i <= numRings; i++) {
      const ring = document.createElement('div');
      ring.className = `ring ring-${i}`;
      targetBoard.appendChild(ring);
    }
  };
  
  
  createTargetBoard(9); // You can change the argument to create a different number of rings.
  function animateTarget() {
    const ring = document.querySelectorAll(".ring");
    let delay = 10;
    ring.forEach((circle, index) => {
      setTimeout(() => {
        circle.style.opacity = "1";
      }, delay * index);
    });
  }
  animateTarget();
