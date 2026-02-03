
// EX02 :

let images = document.querySelectorAll(".image_aff");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let index = 0;

function showImages(i) {
  for (let img of images) {
    img.classList.remove("active");
  }
  images[i].classList.add("active");
}

showImages(index);

const nextImage = () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImages(index);
};
let autoAffiche = setInterval(nextImage, 1000);

const prevImage = () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImages(index);
};

next.onclick = (e) => {
  clearInterval(autoAffiche);
  nextImage();
};

prev.onclick = (e) => {
  clearInterval(autoAffiche);
  prevImage();
};


