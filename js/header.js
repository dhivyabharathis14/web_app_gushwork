  // Sticky header
  window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    header.classList.toggle('sticky', window.scrollY > 10);
  });

  // Thumbnail click to switch main image
  const thumbs = document.querySelectorAll('.thumb-box');
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Zoom on hover
  const mainImg = document.getElementById('currentImage');
  const zoomPreview = document.getElementById('zoomPreview');

  mainImg.addEventListener('mousemove', (e) => {
    const rect = mainImg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    zoomPreview.style.display = 'block';
    zoomPreview.style.backgroundImage = `url(${mainImg.src})`;
    zoomPreview.style.backgroundSize = '300%';
    zoomPreview.style.backgroundPosition = `${x}% ${y}%`;
  });

  mainImg.addEventListener('mouseleave', () => {
    zoomPreview.style.display = 'none';
  });
