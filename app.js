'use strict';
function createElement(tagType, tagIdentifier, tagIdentifiername, elementContent, sectionId){
  var element = document.createElement(tagType);
  element.setAttribute(tagIdentifier, tagIdentifiername);
  element.textContent = elementContent;
//  console.log(element);
  sectionId.appendChild(element);
  //this element creation function created by Benjamin Ayzenberg.
}
function Image(name, id, src){
  this.name = name;
  this.id = id;
  this.src = src;
  this.timesShown = 0;
  this.timesPressed = 0;
}
var holder = document.getElementById('imageHolder');

var bag = new Image('Bag', 1, 'img/bag.jpg');
var banana = new Image('Banana', 2, 'img/banana.jpg');
var bathroom = new Image('Bathroom', 3, 'img/bathroom.jpg');
var boots = new Image('Boots', 4, 'img/boots.jpg');
var breakfast = new Image('breakfast', 5, 'img/breakfast.jpg');
var bubblegum = new Image('Bubblegum', 6, 'img/bubblegum.jpg');
var chair = new Image('Chair', 7, 'img/chair.jpg');
var cthulhu = new Image('Cthulhu', 8, 'img/cthulhu.jpg');
var dogDuck = new Image('Dog-duck', 9, 'img/dog-duck.jpg');
var dragon = new Image('Dragon', 10, 'img/dragon.jpg');
var pen = new Image('Pen', 11, 'img/pen.jpg');
var petSweep = new Image('Pet-sweep', 12, 'img/pet-sweep.jpg');
var scissors = new Image('Scissors', 13, 'img/scissors.jpg');
var shark = new Image('Shark', 14, 'img/shark.jpg');
var sweep = new Image('Sweep', 15, 'img/sweep.png');
var tauntaun = new Image('Tauntaun', 16, 'img/tauntaun.jpg');
var unicorn = new Image('Unicron', 17, 'img/unicorn.jpg');
var usb = new Image('USB', 18, 'img/usb.gif');
var waterCan = new Image('Water-can', 19, 'img/water-can.jpg');
var wineGlass = new Image('Wine-glass', 20, 'img/wine-glass.jpg');

var imageArray = [bag,banana,bathroom,boots,breakfast,bubblegum,boots,breakfast,chair,cthulhu,dogDuck,dragon,pen,petSweep,scissors,shark,sweep,tauntaun,unicorn,usb,waterCan,wineGlass];
function print(){
  for (var i = 0; i < imageArray.length; i++){
    createElement('img', 'src', imageArray[i].src, '', imageHolder);
  }
}
print();
