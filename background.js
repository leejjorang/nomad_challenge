const images = ["1.jfif", "2.jfif", "3.jfif", "4.jfif"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const imagePath = `images/${chosenImage}`;
document.body.style.backgroundImage = `url(${imagePath})`;