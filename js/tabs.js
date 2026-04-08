  const tabs = document.querySelectorAll(".tab");
  /* HArd coded values **/
  const data = {
    raw: {
      title: "High-Grade Raw Material Selection",
      desc: "Ensures high durability and strength using premium PE100 materials.",
      list: ["PE100 grade material", "Optimal molecular distribution"],
      img: "./assets/images/fisher.svg"
    },
    extrusion: {
      title: "Precision Extrusion",
      desc: "Advanced extrusion ensures consistent pipe thickness.",
      list: ["Uniform wall thickness", "High-speed processing"],
      img: "./assets/images/fisher.svg"
    },
    cooling: {
      title: "Controlled Cooling",
      desc: "Cooling systems maintain dimensional stability.",
      list: ["Water cooling tanks", "Shape retention"],
      img: "./assets/images/fisher.svg"
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const key = tab.dataset.tab;
      const item = data[key];

      document.getElementById("processTitle").innerText = item.title;
      document.getElementById("processDesc").innerText = item.desc;
      document.getElementById("processImg").src = item.img;

      const list = document.getElementById("processList");
      list.innerHTML = item.list.map(li => `<li>${li}</li>`).join("");
    });
  });
