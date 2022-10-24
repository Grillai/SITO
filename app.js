const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links").forEach((n) =>
    n.addEventListener("click", () => {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
    })
  );
};

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

const instagram = document.querySelector(".instagram");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    instagram.classList.add("active");
  } else {
    instagram.classList.remove("active");
  }
});

navSlide();


const carousel = new bootstrap.Carousel('#myCarousel');


touch = "true";