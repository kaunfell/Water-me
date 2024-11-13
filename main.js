const can = document.querySelector('#can');
const plant = document.querySelector('.kasvi1');
const plantContainer = document.querySelector('.plantContainer');
const test = document.querySelector('header h1');

//music
musicButton = document.createElement('button');
musicButton.className = 'musicButton';
musicButton.innerHTML = 'Play Music <i class="fa-solid fa-music"></i>';
let music = new Audio('./resurssit/music/little_cafe.wav');
let isPlaying = false;
music.loop = true;



musicButton.addEventListener('click', function() {
  if(isPlaying) {
    music.pause();
    musicButton.innerHTML = 'Play Music <i class="fa-solid fa-music"></i>';
  } else {
    music.play();
    musicButton.innerHTML = 'Pause Music <i class="fa-solid fa-music"></i>';
  }
  isPlaying = !isPlaying;

});

document.body.appendChild(musicButton); //this makes the button appear


const images = [
    //'./resurssit/kuvat/kasvi2.png',
    './resurssit/kuvat/kasvi3.png',
    //'./resurssit/kuvat/kasvi4.png',
    './resurssit/kuvat/kasvi5.png',
  //  './resurssit/kuvat/kasvi6.png',
    './resurssit/kuvat/kasvi7.png',
    './resurssit/kuvat/kasvi8.png',
    './resurssit/kuvat/kasvi9_anim.gif',
    './resurssit/kuvat/kasvi_empty.png',
]

let currentImageIndex = 0;




//drag start
can.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text', 'can');
});

//kohde container, where things are dropped
plantContainer.addEventListener('dragover', function(event) {
    event.preventDefault();
});


againButton = document.createElement('button');
againButton.className = 'againButton';
againButton.innerHTML = 'Try again?';
againButton.style.position = 'absolute';
againButton.style.zIndex = '1';
againButton.style.top = '36%';

const message = document.querySelector(".message");
//const message = document.createElement("p");
//message.className = 'message';
//message.textContent = 'Too much water!';
//message.style.display = 'none';
//plantContainer.appendChild(message);


let parentContainer = document.querySelector('header');

//what happens when dropped
plantContainer.addEventListener('drop', function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');

    
    if(data === 'can') {

        plant.src = images[currentImageIndex];
        let water = new Audio('./resurssit/music/water.wav');
        water.play();


        currentImageIndex++;
        if(currentImageIndex >= images.length) {
            parentContainer.appendChild(againButton);
        }

        if(currentImageIndex >= images.length) {
 
            message.style.opacity = '1';
            message.style.position = 'absolute';
            message.style.zIndex = '1';
            plant.src= './resurssit/kuvat/kasvi_empty.png';
            parentContainer.appendChild(againButton);

        }
    }

});
let initialImageSrc = plant.src;

againButton.addEventListener('click', function() {
    plantContainer.style = '';
    currentImageIndex = 0;
    plant.src = initialImageSrc;
    message.style.opacity = '0';
    parentContainer.removeChild(againButton);
});





