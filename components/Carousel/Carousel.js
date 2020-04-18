/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.

    Extra
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carouselCreator(){
  const carouselDiv = document.createElement(`div`);
  carouselDiv.classList.add(`carousel`);

    const leftButton = document.createElement(`div`);
    leftButton.classList.add(`left-button`);
    carouselDiv.appendChild(leftButton);

    const mountainsImg = document.createElement(`img`);
    mountainsImg.src = `./assets/carousel/mountains.jpeg`;
    carouselDiv.appendChild(mountainsImg);

    const computerImg = document.createElement(`img`);
    computerImg.src = `./assets/carousel/computer.jpeg`;
    carouselDiv.appendChild(computerImg);

    const treesImg = document.createElement(`img`);
    treesImg.src = `./assets/carousel/trees.jpeg`;
    carouselDiv.appendChild(treesImg);

    const turntableImg = document.createElement(`img`);
    turntableImg.src = `./assets/carousel/turntable.jpeg`;
    carouselDiv.appendChild(turntableImg);

    const rightButton = document.createElement(`div`);
    rightButton.classList.add(`right-button`);
    carouselDiv.appendChild(rightButton);

  return carouselDiv;
}

carouselContainer = document.querySelector(`.carousel-container`);
myCarousel = carouselCreator();
carouselContainer.appendChild(myCarousel);

const carouselImgs = document.querySelectorAll(`.carousel img`);

carouselImgs.forEach(img => {
  img.style.display = `block`;
});

console.log(carouselImgs);