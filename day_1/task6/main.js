const rainContainer = document.querySelector(".rain-container");

// background Color for the raindrop
const background = [
  "linear-gradient(transparent, white)",
];

const amount = 50; // amount of raindops
let i = 0;

// Looping and creating the raindrop then adding to the rainContainer
while (i < amount) {
  //  Creating an Element
  const drop = document.createElement("i");

  //   CSS Properties for raindrop
  const raindropProperties = {
    width: Math.random() * 5 + "px",
    positionX: Math.floor(Math.random() * window.innerWidth) + "px",
    duration: Math.random() * 5 + "s",
    bg: background[Math.floor(Math.random() * background.length)],
  };

  //   Setting Styles for raindrop
  drop.style.width = raindropProperties.width;
  drop.style.left = raindropProperties.positionX;
  drop.style.animationDelay = raindropProperties.delay;
  drop.style.animationDuration = raindropProperties.duration;
  drop.style.background = raindropProperties.bg;
  drop.style.opacity = raindropProperties.opacity;

  //   Appending the raindrop in the raindrop container
  rainContainer.appendChild(drop);
  i++;
}
