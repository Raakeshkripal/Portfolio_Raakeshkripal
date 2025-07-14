// Cursor elements
const bigBall = document.querySelector('.cursor__ball--big');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');

// Move the cursor balls
document.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  gsap.to(bigBall, { duration: 0.4, x: x - 15, y: y - 15 });
  gsap.to(smallBall, { duration: 0.1, x: x - 5, y: y - 5 });
});

// Hover effect
hoverables.forEach(el => {
  el.addEventListener('mouseenter', () => {
    gsap.to(bigBall, { duration: 0.3, scale: 4 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(bigBall, { duration: 0.3, scale: 1 });
  });
});

// Ripple and cursor click animation with behind effect
hoverables.forEach(el => {
  el.addEventListener('click', e => {
    bigBall.classList.add('behind');

    gsap.to(bigBall, { duration: 0.2, scale: 0.1 });
    setTimeout(() => {
      gsap.to(bigBall, { duration: 0.4, scale: 1 });
      bigBall.classList.remove('behind');
    }, 500);

    // Create ripple
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.pageX}px`;
    ripple.style.top = `${e.pageY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Smooth scroll for navigation links with fade animation
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(anchor.getAttribute('href'));
    if (section) {
      document.body.classList.add('fade-out');
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
        document.body.classList.remove('fade-out');
      }, 300);
    }
  });
});

// Typing animation
new Typed(".typing", {
  strings: [
    "Electronics and Communication Engineer",
    "AI/ML Enthusiast",
    "IoT and Embedded Developer"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});