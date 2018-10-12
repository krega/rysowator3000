function point(){

//console.log("iX+=1;",iX+=1);
//console.log("x!",iX);

tabX=[];
tabY=[];
for(var i=0;i<=iX;i++)
{
    console.log("i",i);
    console.log("document.getElementById('duplicaterX'+ i).value;"
        ,document.getElementById('duplicatorX'+ 0).value)
    tabX[i]=parseInt(document.getElementById('duplicatorX'+ i).value);
    tabY[i]=parseInt(document.getElementById('duplicatorY'+ i).value);

}
 

var chart = new CanvasJS.Chart("chartContainer",
{      
    data: [
    {
        
        
    }
    ]
});



$("#renderButton").click(function(){  
    console.log("jeste");
    var dataPointss=[];   
    for(var i=0;i<tabX.length;i++){
     dataPointss.push({
         x:tabX[i],
          y:tabY[i]  })
    }

    var newSeries = {

        type: "scatter",
        dataPoints: dataPointss

      };

chart.options.data.push(newSeries);
    //chart.options.data[0].dataPoints.push({ x: 100, y: 14});
    chart.render();
});
}
document.getElementById ("renderButton").addEventListener ("click", point, true);