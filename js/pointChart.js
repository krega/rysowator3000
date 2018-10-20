  tabX=[];
  tabY=[];
  tabSR=[];
  tabMin=[];
  tabMax=[];
  function point(){


  for(var i=0;i<=zY;i++)
  {// console.log("i",i);
    tabY[i]=parseFloat(document.getElementById('duplicatorY'+ i).value);
  }

    for(var z=0;z<=index;z++)
    {
     // console.log("z",z);
      tabX.push(parseFloat(document.getElementById('duplicatorX'+ z ).value));
      //console.log(document.getElementById('duplicatorX'+ z ).value);
    }
  //console.log("tabX",tabX);
  var srednia=0;
  var a=tabX.length/tabY.length;
  var b=tabX.length/tabY.length;
 // console.log("a",a);
 // console.log("ilosc y", tabY.length);
  var max=0;
  var min=10000000000000000000000000000000000000000000;
  for(var z=0;z<tabX.length;z++)
    {
     // console.log("z",z);
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
      //console.log("tabx",tabX);
     // console.log("iX",iX);
      
     
     srednia +=tabX[z];
     if(z==(a-1)){
    // console.log("dupa");
     srednia=srednia/b;
      tabSR.push(srednia);
      srednia=0;
      tabMin.push(min);
      tabMax.push(max);
      min=99999999999999999999999999999999999;
      max=0;
      a=a+b;
      //console.log("a",a);
     }
     
    /* srednia +=tabX[z];
     console.log(tabX[z]);
     var counter=1;
     if((z+1)/iX == counter)
     {  console.log("iz",z);
      console.log("if", (z+1)/iX);
      console.log("srednia",srednia);
      console.log("iX+1",iX+1);
      srednia=srednia/(iX+1);
      console.log(srednia);
      tabSR.push(srednia);
      srednia=0;
      counter++;

     }*/

    }
   // console.log("tabSR",tabSR);
   // console.log("tabMax", tabMax);
    //console.log("tabMin",tabMin);
  }

  function deleteDiv(){

      for(var i=1;i<=iX;i++){
      document.getElementById('duplicatorX'+ i).remove();
      document.getElementById('duplicatorY'+ i).remove();
      }
     // console.log("usuwanie");
  }
   function draw(){
  var Xname;
  var Yname;

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
  var pointChart = new CanvasJS.Chart("pointChart",
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
  document.getElementById ("remove").addEventListener ("click", deleteDiv, true);


  function rysuj(){  
      //console.log("jeste");
      console.log("rysowanie tabY",tabY);
            console.log("rysowanie tabSR",tabSR);
            console.log("tabMax", tabMax);
            console.log("tabMin", tabMin);
            var tabMinMax = new Array(tabMax.length);

              for (var i = 0; i < tabMinMax.length; i++) {
              tabMinMax[i] = new Array(tabMin.length);
          }
     // var tabMinMax[][] = 0;
      var dataPointss=[];  
      var errorPoints=[];
       for(var i=0;i<tabY.length;i++){
       dataPointss.push({
           x:tabY[i],
           y:tabSR[i]
            })
      } 

    //  var a=[tabMax[0],tabMin[0]];
   //   console.log("a",a);
        console.log("dataPointss", tabSR.length);
        for(var i=0;i<tabMax.length;i++)
        {
          errorPoints.push({
            y:[tabMax[i],tabMin[i]],
            x:tabY[i],
          })
        }

     /* for(var i=0;i<tabSR.length;i++){
       dataPointss.push({
           y:tabSR[i]
            })
      }
      console.log("dataPointss", tabSR.length);
     /* for(var i=0;i<tabMax;i++)
      {
         tabMinMax[i]=tabMax;
        for(var y=0;y<tabMin;y++)
        {
          tabMinMax[y]=tabMin;
          tabMinMax[i]=tabMax;
        }
      }
      tabMinMax.shift();
      /*for(var i=0;i<tabY.length;i++)
      {
       errorPoints.push({
           x:tabY[i]
            })
      }*/
     /* for(var i=0;i<tabMax.length;i++)
      {
        errorPoints.push({
           y:tabMax[i]
            })
      }*/
     /* for(var i=0;i<tabMinMax.length;i++)
      {
        errorPoints.push({
           y:tabMinMax[i]
            })
      }*/
      console.log("tabMinMax", tabMinMax);
     console.log("errorPoints", errorPoints);
      console.log(document.getElementById("nazwaLinii").value);

      var newSeries = {

          type: "spline",
          showInLegend: true, 

          showInLegend: true, 
          name:  document.getElementById("nazwaLinii").value,
          dataPoints: dataPointss,

        };
        var newError ={
          type: "error",
          whiskerLength: 15,
         
          dataPoints: errorPoints
         // dataPoints: tabMinMax,
        };
      
 pointChart.options.data.push(newSeries);
  pointChart.render();
  pointChart.options.data.push(newError);
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
      tabSR.pop();
      tabMin.pop();
      tabMax.pop();
  }
  //console.log("po czyszczenieu", tabX);
  iX=0;   
  zY=0;

  }
  document.getElementById ("removerr").addEventListener ("click", clearTabXY, true);
  //draw, point, rysuj, cleat TXY