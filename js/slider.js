
  const slider = document.getElementById("slider");

  document.getElementById("nextBtn").onclick = () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
  };

  document.getElementById("prevBtn").onclick = () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
  };
