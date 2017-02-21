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
var list = document.getElementById('listHolder');
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
var clickLimit = 25;
var n = 0;
function print(){
  if (n < clickLimit){
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
      document.getElementById(upNext[j].name).addEventListener('click', handleClick);
      banned.push(upNext[j]);
      upNext[j].timesShown += 1;
      //console.log(upNext[j].name + ' has been shown ' + upNext[j].timesShown + ' times!');
    }
    n++;
  } else {
    for (var i = 0; i < banned.length; i++) {
      var axed = document.getElementById(banned[i].name);
      axed.parentNode.removeChild(axed);
    }
    for (var x = 0; x < imageArray.length; x++){
      console.log(imageArray[x].name + ' has been shown ' + imageArray[x].timesShown + ' times!');
      console.log('It has been clicked ' + imageArray[x].timesPressed + ' times!');
      console.log('That is ' + ((imageArray[x].timesPressed / imageArray[x].timesShown) * 100) + '% of the times it was shown!');
      console.log('');
      createElement('tr', 'class', 'tableRow', '', list, 'id', imageArray[x].name);
      createElement('img', 'src', imageArray[x].src, '', document.getElementById(imageArray[x].name), 'class', 'finalPhoto');
      createElement('li', 'class', 'listElement', 'Shown: ' + imageArray[x].timesShown, document.getElementById(imageArray[x].name), 'class', 'timesShownElement');
      createElement('li', 'class', 'listElement', 'Pressed: ' + imageArray[x].timesPressed, document.getElementById(imageArray[x].name), 'class', 'timesPressedElement');
      createElement('li', 'class', 'listElement', Math.floor((imageArray[x].timesPressed / imageArray[x].timesShown) * 100) + '%', document.getElementById(imageArray[x].name), 'class', 'percentageElement');
    }
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
      //console.log(number);
    }
  }
  return chosen;
}

function handleClick(event){
  event.preventDefault();
  event.stopPropagation();
  var findObj = imageArray.filter(function(e) {
    return e.name == event.target.id;
  });
  //array filtering function found at http://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property
  // and written by stackoverflow user Rohit
  var object = findObj.pop();
  object.timesPressed += 1;
  //console.log(object.name + ' has been pressed ' + object.timesPressed + ' times!');
  print();
};
print();
