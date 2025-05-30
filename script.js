// Typewriter effect per il titolo principale
const titleText = "👋 Ciao! Sono Andrea Petrullo";
let i = 0;
function typeWriter() {
  if (i <= titleText.length) {
    document.getElementById('wow-title').textContent = titleText.substring(0, i);
    i++;
    setTimeout(typeWriter, 47);
  }
}
typeWriter();

// Dopo 4 secondi mostra i tab e riduci il titolo
setTimeout(() => {
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('hero-header').classList.add('sticky');
}, 4000); // 4000ms = 4 secondi

// Tab navigation
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});
// Sfondo animato Vanta.js
window.addEventListener('DOMContentLoaded', function() {
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: false,
    touchControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x805ad5,
    backgroundColor: 0x181027,
    points: 14.00,
    maxDistance: 23.00,
    spacing: 18.00
  });
});
