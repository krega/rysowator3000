tabX=[];
tabY=[];
function point(){

//console.log("iX+=1;",iX+=1);
//console.log("x!",iX);


for(var i=0;i<=iX;i++)
{
   // console.log("i",i);
   
    tabX[i]=parseFloat(document.getElementById('duplicatorX'+ i).value);
    tabY[i]=parseFloat(document.getElementById('duplicatorY'+ i).value);
    if(i>0){
        console.log("ix",iX);
    document.getElementById('duplicatorX'+ i).remove();
    document.getElementById('duplicatorY'+ i).remove();
}
}
}

function deleteDiv(){

    for(var i=1;i<=iX;i++){
    document.getElementById('duplicatorX'+ i).remove();
    document.getElementById('duplicatorY'+ i).remove();
    }
    console.log("usuwanie");
}
 function draw(){
var Xname;
var Yname;
var supString = "2";
var seups=supString.sup();
if(document.getElementById('Przyrost_masy').value==1)
{
    Xname= "Różnica potencjałów między elektrodami [V]";
    Yname= "Przyrost masy powłoki  [mg/cm²]";
}
if(document.getElementById('Przyrost_masy').value==2)
{
    Xname= "Czas osadzania [min]";
    Yname= "Przyrost masy powłoki [mg/cm²]";

}
var pointChart = new CanvasJS.Chart("chartContainer",
{ 
    zoomEnabled: true,
    responsive: true,
    exportEnabled: true,
     showInLegend: true, 
     axisX: {
    title: Xname,
    },
     axisY:{
        title: Yname,
    },



    data: [
    {
     
    }
    ]
});

pointChart.render();
document.getElementById ("remove").addEventListener ("click", point, true);


document.getElementById ("remove").addEventListener ("click", rysuj, true);
document.getElementById ("remove").addEventListener ("click", clearTabXY, true);
//document.getElementById ("remove").addEventListener ("click", deleteDiv, true);


function rysuj(){  
    //console.log("jeste");
    var dataPointss=[];   
    for(var i=0;i<tabX.length;i++){
     dataPointss.push({
         x:tabX[i],
          y:tabY[i]  })
    }
    console.log(document.getElementById("nazwaLinii").value);

    var newSeries = {

        type: "scatter",
          showInLegend: true, 

          showInLegend: true, 
name:  document.getElementById("nazwaLinii").value,
        dataPoints: dataPointss

      };
pointChart.options.data.push(newSeries);
    pointChart.render();
    $("#removerr").click(function(){ 
    pointChart.options.data.pop();
    pointChart.render();
});
}

};


document.getElementById ("renderButton").addEventListener ("click", draw, true);


function clearTabXY(){
   // console.log("przed", tabX);
for(var i=0;i<tabX.length;i++)
{
    tabX.pop();
    tabY.pop();
}
//console.log("po czyszczenieu", tabX);
iX=0;   
zY=0;

}
document.getElementById ("removerr").addEventListener ("click", clearTabXY, true);
//draw, point, rysuj, cleat TXY