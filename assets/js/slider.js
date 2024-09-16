const slides = document.querySelectorAll('.slide')

let count = 1;

setInterval(function () {
  document.getElementById('slide' + count).checked = true;
  count++;
  if (count > slides.length) {
    count = 1;
  }
}, 4000);