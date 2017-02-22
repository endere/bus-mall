'use strict';
var dataShown = [];
var dataPressed = [];
var dataPercent = [];
var dataLabels = [];
var imageArray = [];
function returnFromStorage(){
  imageArray = localStorage.getItem('key');
  imageArray = JSON.parse(imageArray);
}
function processData(){
  for (var x = 0; x < imageArray.length; x++){
    dataShown.push(imageArray[x].timesShown);
    dataPressed.push(imageArray[x].timesPressed);
    dataPercent.push(Math.floor((imageArray[x].timesPressed / imageArray[x].timesShown) * 100));
    dataLabels.push(imageArray[x].name);
  }
}
function createChart(dataType,tag,title){
  var context = document.getElementById(tag).getContext('2d');
  var labelColors = ['blue','red','orange','purple','green','yellow','salmon','blue','red','orange','purple','green','yellow','salmon','blue','red','orange','purple','green','yellow','salmon'];
  var chartData = {
    type: 'bar',
    data: {
      labels: dataLabels,
      datasets: [{
        label: title,
        data: dataType,
        backgroundColor: labelColors,
      }],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  var myChart = new Chart(context,chartData);
}
var buttonEl = document.getElementById('buttonForm');
buttonEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  event.stopPropagation();
  returnFromStorage();
  processData();
  createChart(dataShown,'shown','# times shown');
  createChart(dataPressed,'pressed','# times pressed');
  createChart(dataPercent,'percent', '% of times pressed');
}
