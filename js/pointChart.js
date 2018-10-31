  tabX=[];
  tabY=[];
  tabSR=[];
  tabMin=[];
  tabMax=[];
  var pointChart;
  function point(){
  for(var i=0;i<=zY;i++)
  {
    tabY[i]=parseFloat(document.getElementById('duplicatorY'+ i).value);
  }
    for(var z=0;z<=index;z++)
    {
      if(document.getElementById('duplicatorX'+z))
        {
      tabX.push(parseFloat(document.getElementById('duplicatorX'+ z ).value));
    }
      
    }

  var srednia=0;
  var a=tabX.length/tabY.length;
  var b=tabX.length/tabY.length;
 
  var max=0;
  var min=10000000000000000000000000000000000000000000;
  for(var z=0;z<tabX.length;z++)
    {
    
      if(iX==0)
      {
        tabSR.push(tabX[z]);
      }
      if(tabX[z]>max)
      {
        max=tabX[z];
      }
      if(tabX[z]<min)
      {
      min=tabX[z];
      }

      srednia +=tabX[z];
      if(z==(a-1)){
      srednia=srednia/b;
      tabSR.push(srednia);
      srednia=0;
      tabMin.push(min);
      tabMax.push(max);
      min=99999999999999999999999999999999999;
      max=0;
      a=a+b;
      }
    }
  }

  function deleteDiv(){
     for(var i=1;i<=index;i++){
        console.log("i",i);
        if(document.getElementById('duplicatorX'+i))
        {
            document.getElementById('duplicatorX'+i).remove();
        }
    }
   for(var i=1;i<=delete_counterY;i++){
        console.log("i",i);
      
        if(document.getElementById('duplicatorY'+i))
        {
            document.getElementById('duplicatorY'+i).remove();
        }
      }
  }
  function draw(){
  var Xname;
  var Yname;

  if(document.getElementById('zxc').checked==true)
  {
      Xname= "Różnica potencjałów między elektrodami [V]";
      Yname= "Przyrost masy powłoki  [mg/cm²]";
  }
  if( document.getElementById('asd').checked==true)
  {
      Xname= "Czas osadzania [min]";
      Yname= "Przyrost masy powłoki [mg/cm²]";

  }
 pointChart = new CanvasJS.Chart("pointChart",
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
  });}

 
  document.getElementById ("remove").addEventListener ("click", point, true);
   document.getElementById ("remove").addEventListener ("click", rysuj, true);
  document.getElementById ("remove").addEventListener ("click", clearTabXY, true);
  document.getElementById ("remove").addEventListener ("click", deleteDiv, true);


function rysuj(){  
 var tabMinMax = new Array(tabMax.length);
 for (var i = 0; i < tabMinMax.length; i++) {
      tabMinMax[i] = new Array(tabMin.length);
       }
var dataPointss=[];  
var errorPoints=[];
 for(var i=0;i<tabY.length;i++){
       dataPointss.push({
           x:tabY[i],
           y:tabSR[i]
            })
      } 
console.log(tabMin);
   for(var i=0;i<tabMax.length;i++)
    {
     errorPoints.push({
     y:[tabMax[i],tabMin[i]],
     x:tabY[i],
     })
    }
    var newSeries = {
     type: "spline",
     showInLegend: true, 
     showInLegend: true, 
     name:  document.getElementById("nazwaLinii").value,
     lineDashType: "dash",
     axisX:{
           labelFontFamily: "arial",
         labelFontSize: 200,
         valueFormatString: "#,##,###",
      },
      axisY:{
        labelFontFamily: "arial",
         labelFontSize: 20,
         valueFormatString: "#,##,###",
      },
     

     dataPoints: dataPointss,
       };
        var newError ={
          type: "error",
          whiskerLength: 15, 
         
          dataPoints: errorPoints 
        };
      pointChart.options.data.push(newSeries);
  pointChart.options.data.push(newError);
      pointChart.render();
      $("#removerr").click(function(){ 
      pointChart.options.data.pop();
      pointChart.render();
  });
  
};

document.getElementById ("masaOdNapiecia").addEventListener ("click", draw, true);
document.getElementById ("masaOdCzasu").addEventListener ("click", draw, true);

  function clearTabXY(){   
  for(var i=0;i<tabX.length;i++)
  {
      tabX.pop();
      tabY.pop();
      tabSR.pop();     
  }
  tabX.length=0;
   tabSR.length=0;
  for (var i = tabMin.length - 1; i >= 0; i--) {
    tabMin.pop();
    tabMax.pop();
  }
   tabMin.length=0;
    tabMax.length=0;
  console.log("po czyszczenieu", tabMin);
  console.log("po czyszczenieu", tabMax);
  console.log("po czyszczenieu", tabX);
  console.log("po czyszczenieu", tabMax);
  console.log("po czyszczenieu", tabY);
  console.log("po czyszczenieu", tabSR);
  iX=0;   
  zY=0;
  }
  document.getElementById ("removerr").addEventListener ("click", clearTabXY, true);
