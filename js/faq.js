  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {

      // close others
      items.forEach(i => i.classList.remove("active"));

      // open clicked
      item.classList.toggle("active");
    });
  });
