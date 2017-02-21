'use strict';
function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId, tagIdentifierTwo, tagIdentifiernameTwo){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.setAttribute(tagIdentifierTwo, tagIdentifiernameTwo);
  element.textContent = elementContent;
//  console.log(element);
  sectionId.appendChild(element);
  //this element creation function created by Benjamin Ayzenberg.
}
function Image(name, src){
  this.name = name;
  this.src = src;
  this.timesShown = 0;
  this.timesPressed = 0;
}
var holder = document.getElementById('imageHolder');

var imageArray = [
  new Image('Bag', 'img/bag.jpg'),
  new Image('Banana', 'img/banana.jpg'),
  new Image('Bathroom', 'img/bathroom.jpg'),
  new Image('Boots', 'img/boots.jpg'),
  new Image('breakfast', 'img/breakfast.jpg'),
  new Image('Bubblegum', 'img/bubblegum.jpg'),
  new Image('Chair', 'img/chair.jpg'),
  new Image('Cthulhu', 'img/cthulhu.jpg'),
  new Image('Dog-duck', 'img/dog-duck.jpg'),
  new Image('Dragon', 'img/dragon.jpg'),
  new Image('Pen', 'img/pen.jpg'),
  new Image('Pet-sweep', 'img/pet-sweep.jpg'),
  new Image('Scissors', 'img/scissors.jpg'),
  new Image('Shark', 'img/shark.jpg'),
  new Image('Sweep', 'img/sweep.png'),
  new Image('Tauntaun', 'img/tauntaun.jpg'),
  new Image('Unicron', 'img/unicorn.jpg'),
  new Image('USB', 'img/usb.gif'),
  new Image('Water-can', 'img/water-can.jpg'),
  new Image('Wine-glass', 'img/wine-glass.jpg'),
];
var banned = [];
var chosen = [];
function print(){
  for (var i = 0; i < banned.length; i++) {
    var axed = document.getElementById(banned[i].name);
    axed.parentNode.removeChild(axed);
  }
  banned = chosen;
  chosen = chooseThree();
  var upNext = [];
  console.log(chosen);
  upNext.push(imageArray[chosen[0]]);
  upNext.push(imageArray[chosen[1]]);
  upNext.push(imageArray[chosen[2]]);
  console.log(upNext);
  banned = [];
  for (var j = 0; j < upNext.length; j++){
    createElement('img', 'src', upNext[j].src, '', imageHolder, 'id', upNext[j].name);
    // upNext[j].addEventListener('submit', handleSubmit);
    banned.push(upNext[j]);
  }
}
function chooseThree(){
  chosen = [];
  while (chosen.length < 3) {
    var number = Math.floor(Math.random() * (imageArray.length));
    if (chosen.includes(number) || banned.includes(number)) {
      console.log('invalid number found... rerolling...');
    } else {
      chosen.push(number);
      console.log(number);
    }
  }
  return chosen;
}
print();
