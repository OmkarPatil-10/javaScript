//generate random color 
// console.log(Math.floor(Math.random() * 16)

const randomColor = function() {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) { 
    color += hex[Math.floor(Math.random() * 16)]; // Append a random hex character
  }
  return color; 
};

let randomBgColor;

const startChangingColor = function(){
  changeBgColor = function (){
    document.body.style.backgroundColor = randomColor();
    console.log(randomColor());
  }
  
  // randomBgColor = setInterval(changeBgColor, 1000)

  if(!randomBgColor){
    randomBgColor = setInterval(changeBgColor, 1000)
  }
}

const stopChangingColor = function(){
  clearInterval(randomBgColor)
  randomBgColor = null;
}

document.querySelector('#start').addEventListener('click', 
startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
