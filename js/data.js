function full(){
 clearrr();


//console.log(resultFromFile);
  for(var i =0;i<resultFromFile.length;i++)
  {
    onlyResult[i]=resultFromFile[1][i][1];
   

  }
  
  
   for(var i in onlyResult){
    console.log("aaaaa");
   if(onlyResult[i].Value != ""){
       onlyResult[i].Value = parseFloat(onlyResult[i].Value);
       
        onlyResult[i]=onlyResult[i];

   }
   
}
onlyResult.shift();
onlyResult.pop();



var timeFromInput = document.getElementById("time").value;

timeFromInput= timeFromInput/onlyResult.length;
time[0]=timeFromInput;
for(var i =1;i<onlyResult.length;i++)
{

    time[i]=time[i-1]+timeFromInput;
}
   


var pole_probki = document.getElementById("pole_probki").value;


pole_probki=pole_probki;
   

console.log(gestoscPradu);
 console.log("onlyResult",onlyResult);
for(var i =0; i<onlyResult.length;i++)
{
    gestoscPradu[i] = onlyResult[i] / pole_probki;
}
 console.log("onlyResult",onlyResult);
 console.log(gestoscPradu);
}
document.getElementById ("cli").addEventListener ("click", full, true);

document.getElementById ("cli").addEventListener ("click", clear, true);

function clear()
{
  for(var i = 0;i<resultFromFile.length;i++)
{
  resultFromFile.shift();
}

resultFromFile.length=0;
//console.log(resultFromFile);

}


  function clearr(){
  console.log("jestem");
 
  for(var i = 0;i<onlyResult.length;i++)
{
  onlyResult.pop();
 
}

onlyResult.length=0;
console.log("clearr clearr",onlyResult);
 

}

 function clearrr(){

 for(var i = 0;i<gestoscPradu.length;i++)
  console.log("gestoscPradu czyszczenie");
for(var i=0;i<gestoscPradu.length;i++)
{
  gestoscPradu.pop();
}
gestoscPradu.length=0;
console.log("clearrr",gestoscPradu);
  }

