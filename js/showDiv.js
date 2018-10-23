function showgestosc() {
    
    var x = document.getElementById("gestosc");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
     var y = document.getElementById("pointChartt");
     if (y.style.display === "none") {
        y.style.display = "none";
    } else {
        y.style.display = "none";
    }
     
}
function showMasaOdNapiecia() {
    document.getElementById('zxc').checked = true;
    document.getElementById('asd').checked = false;
  
  $( 'pointChart' ).remove();
    var x = document.getElementById("pointChartt");
    if (x.style.display === "block") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    var r = document.getElementById("pointChart");
    if (r.style.display === "block") {
        r.style.display = "block";
    } else {
        r.style.display = "block";
    }
     var y = document.getElementById("gestosc");
     if (y.style.display === "none") {
        y.style.display = "none";
    } else {
        y.style.display = "none";
    }
}
function showMasaOdCzasu() {
    document.getElementById('asd').checked = true;
     document.getElementById('zxc').checked = false;
   
    $( 'pointChart' ).remove();
    var x = document.getElementById("pointChartt");
    if (x.style.display === "block") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
    var r = document.getElementById("pointChart");
    if (r.style.display === "block") {
        r.style.display = "block";
    } else {
        r.style.display = "block";
    }
     var y = document.getElementById("gestosc");
     if (y.style.display === "none") {
        y.style.display = "none";
    } else {
        y.style.display = "none";
    }
}


document.getElementById ("Gestosc_pradu").addEventListener ("click", showgestosc, true);
document.getElementById ("masaOdNapiecia").addEventListener ("click", showMasaOdNapiecia, true);
document.getElementById ("masaOdCzasu").addEventListener ("click", showMasaOdCzasu, true);