 const quoteModal = document.getElementById("quoteModal");
  const openQuoteBtn = document.getElementById("openQuoteModal");
  const closeQuoteBtn = document.getElementById("closeQuoteModal");

  // Open
  openQuoteBtn.addEventListener("click", () => {
    quoteModal.style.display = "flex";
  });

  // Close
  closeQuoteBtn.addEventListener("click", () => {
    quoteModal.style.display = "none";
  });

  // Outside click
  window.addEventListener("click", (e) => {
    if (e.target === quoteModal) {
      quoteModal.style.display = "none";
    }
  });
  const modal = document.getElementById("downloadModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
