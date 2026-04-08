const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
const mainImage = document.getElementById("currentImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;

    thumbs.forEach((t) => t.classList.remove("active"));
    thumb.classList.add("active");
  });
});
const zoomPreview = document.getElementById("zoomPreview");

mainImage.addEventListener("mousemove", (e) => {
  zoomPreview.style.display = "block";

  const rect = mainImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  zoomPreview.style.backgroundImage = `url(${mainImage.src})`;
  zoomPreview.style.backgroundSize = `${mainImage.width * 2}px ${mainImage.height * 2}px`;
  zoomPreview.style.backgroundPosition = `-${x}px -${y}px`;
});

mainImage.addEventListener("mouseleave", () => {
  zoomPreview.style.display = "none";
});

const container = document.getElementById("thumbnails");

for (let i = 0; i < 5; i++) {
  const box = document.createElement("div");
  box.classList.add("thumb-box");

  box.addEventListener("click", () => {
    document
      .querySelectorAll(".thumb-box")
      .forEach((b) => b.classList.remove("active"));

    box.classList.add("active");
  });

  container.appendChild(box);
}