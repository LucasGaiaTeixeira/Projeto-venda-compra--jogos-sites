const carousel = document.getElementById("thumbs");
const leftBtn = document.querySelector(".carousel-btn.left");
const rightBtn = document.querySelector(".carousel-btn.right");
const mainImage = document.getElementById("mainImage");

leftBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 200, behavior: "smooth" });
});

carousel.querySelectorAll("img").forEach(thumb => {
  thumb.addEventListener("click", () => {
    const fullSrc = thumb.getAttribute("data-full");
    mainImage.setAttribute("src", fullSrc);
  });
});
