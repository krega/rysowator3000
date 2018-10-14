
resultFromFile = [];
onlyResult = [];
time =[];
gestoscPradu = [];
cl=0;
max=0;
min=0;
console.log(gestoscPradu);

//console.log(onlyResult);
function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Handle errors load
    reader.onload = loadHandler;
   
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
}


function loadHandler(event) {
    var csv = event.target.result;
    processData(csv); 
   clearr();
  clearrr();         
}

function processData(csv) {
  
  
  
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
         resultFromFile.push(lines);
    }

 //console.log(resultFromFile);



 
//if your csv file contains the column names as the first line
function processDataAsObj(csv){
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    
    //first line of csv
    var keys = allTextLines.shift().split(',');
    
    while (allTextLines.length) {
        var arr = allTextLines.shift().split(',');
        var obj = {};
        for(var i = 0; i < keys.length; i++){
            obj[keys[i]] = arr[i];
    }
        lines.push(obj);
    }
        
}


function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}

 
document.getElementById ("cli").addEventListener ("click", show, true);
 function show()
{
 max=Math.max(...gestoscPradu);
    minimum=Math.min(...gestoscPradu);
    console.log("max",max);
    console.log("min",min);
var dataPoints = [];
for (var i = 0; i < onlyResult.length; i++) {
  if(document.getElementById('jednostka').value =="mA"){
    dataPoints.push({
    x: time[i],

    y: gestoscPradu[i]*1000
  });
  }
   if(document.getElementById('jednostka').value =="A"){
  dataPoints.push({
    x: time[i],

    y: gestoscPradu[i],
   
  });
}
}
var chart = new CanvasJS.Chart("pointChart", {

  zoomEnabled: true,
  responsive: true,

  title: {
    text: " Zależność gęstości prądu od czasu osadzania powłoki przy napięciu wynoszącym " 
    +document.getElementById('napiecie_pradu').value + "V",
  },
  exportEnabled: true,
  axisX: {
    title:"Czas [s]",
   
  },
  axisY:{
    title: "Gęstość prądu "+ document.getElementById('jednostka').value,
    minimum:document.getElementById('minimum').value,
    maximum:document.getElementById('maximum').value,
     },
  data: [{
    type: "scatter",
    dataPoints: dataPoints
  }]
});

chart.render();


}


}



       
      