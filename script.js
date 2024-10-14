// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Lightbox effect for gallery images
document.querySelectorAll(".gallery-item img").forEach((image) => {
  image.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);
    const img = document.createElement("img");
    img.src = image.src;
    lightbox.appendChild(img);
    lightbox.addEventListener("click", () => {
      lightbox.remove();
    });
  });
});
