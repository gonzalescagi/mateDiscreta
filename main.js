    var inSeleccion= document.getElementById("sel1").value;
    var inNiveles= document.getElementById("niveles").value;
    var inAncho= document.getElementById("ancho").value;
    var inAlto= document.getElementById("alto").value;
    var inColor = document.getElementById("color").value;
    var inColorFigura = document.getElementById("colorFigura").value;
    var inOpcResumido = document.getElementById("opcResumido");

function formulario(){
    inSeleccion= document.getElementById("sel1").value;
    inNiveles= document.getElementById("niveles").value;
    inAncho= document.getElementById("ancho").value;
    inAlto= document.getElementById("alto").value;
    inColor = document.getElementById("color").value;
    inColorFigura = document.getElementById("colorFigura").value;
    inOpcResumido = document.getElementById("opcResumnido");
}

function procesar(){
            
    formulario();
            
    var c = document.getElementById("myCanvas");
    var ups = document.getElementById("ups");
    c.setAttribute("style","display:block !important");
    ups.setAttribute("style","display:none");
    
    switch (inSeleccion){
        case "0": triangulo(c); break
        case "1": semiCuadrados(c); break
        case "2": ; break
    }
           
}

function triangulo(c){
    formulario();
    var x=100;
    var y=100;
    var dy=parseInt(inAlto);
    var dx =parseInt(inAncho);
    var n= inNiveles;
    
    var ctx = c.getContext("2d");
        
    var z = n;
    if(n > 30 && inOpcResumido.checked){
    z = 10;
    }
    
    var height = (z*dy)+y; 
    var width = (z*dx);
    document.getElementsByTagName("CANVAS")[0].setAttribute("height",height);
    document.getElementsByTagName("CANVAS")[0].setAttribute("width",width);
    var star= (width/2)-(dx/2);console.log("star" +star);
    
    x=star;
    for(var j=1; j<=z; j++){
        
         ctx.moveTo(x, y);
        var paseRender=true;
        if(inOpcResumido.checked){
            paseRender = false;
        }
        
        if(j<=5 || j>=10 || paseRender ){

        var a=x; var b=y;
        for(var i =0; i<j; i++){
                ctx.lineTo(a+(dx/2), b-dy);
                ctx.lineTo(a+dx, b);
                ctx.lineTo(a, b);
               ctx.moveTo(a+dx, b);
                a=a+dx;
            }
        }

     
        if(inOpcResumido.checked && inNiveles>30 && j>=6 && j<9){
                var xb = x+(dx*j);
                var yb = y;
                //ctx.fillStyle = inColor; 
                ctx.arc(x, y, 3, 0, Math.PI * 2, true);
                //ctx.fill(); // Terminar trazo
            
                ctx.moveTo(xb, yb);
                ctx.arc(xb, yb, 3, 0, Math.PI * 2, true);
                //ctx.fill(); // Terminar trazo
        }
        x=x-(dx/2);
        y=y+dy;
    }

    ctx.strokeStyle= inColor
    ctx.stroke();
    
    ctx.shadowOffsetX=5; //desplazamiento horizontal sombra.
    ctx.shadowOffsetY=0; //desplazamiento vertical sombra
    ctx.shadowColor="#000"; //color de sombra
    ctx.shadowBlur=10; 
    
    
    if(opcionesShow()){
        var opa= document.getElementById('relleno');
        if(!opa.checked){
            ctx.fillStyle=inColorFigura;
            ctx.fill();
        }
    }
      
    console.log(n);
    var figuras= Math.pow(n,2);
    var lineas= 3*((n*((n*1)+1))/2);
    var formula= "3*(n*(n+1)/2)";

    showRes(n,lineas, figuras, formula);
    showMenu();
        
    
}

function semiCuadrados(c){
    var x=100;
    var y=100;
    var dy=parseInt(inAlto);
    var dx =parseInt(inAncho);
    var n= inNiveles;
    var height = (n*dy)+y; 
    var width = (n*dx);
        document.getElementsByTagName("CANVAS")[0].setAttribute("height",height);
        document.getElementsByTagName("CANVAS")[0].setAttribute("width",width);
        var ctx = c.getContext("2d");
     var star= (width/2)-(dx/2);
    x=star;
    for(var j=1; j<=n; j++){
        ctx.moveTo(x, y);
        var a=x; var b=y;
        for(var i =0; i<j; i++){
                ctx.lineTo(a, b-dy);
                ctx.lineTo(a+dx, b-dy);
                ctx.lineTo(a+dx, b);
               ctx.moveTo(a+dx, b);
                a=a+dx;
            }
        x=x-(dx/2);
        y=y+dy;
        
    }

    ctx.strokeStyle= inColor
    ctx.stroke();
    
       if(opcionesShow()){
    var opa= document.getElementById('relleno');
    if(!opa.checked){
        ctx.fillStyle=inColorFigura;
        ctx.fill();
    }
   
}
    var figuras= n*(((n*1)+1)/2);
    var lineas= n*((n*1)+2);
    var formula= "n*(n+2)";

    showRes(n,lineas, figuras, formula);
     showMenu();
    
}

function showRes(n, lineas, figuras, formula){
    var resShow = document.getElementById('resultados');
    resShow.setAttribute("style","display:flex !important");
    var nv = document.getElementById('nivelesRes'); nv.innerHTML=" "+n;
    var li = document.getElementById('lineasRes'); li.innerHTML=" "+lineas;
    var fi = document.getElementById('figurasRes'); fi.innerHTML=" "+figuras;
   // var fi = document.getElementById('figurasRes'); fi.innerHTML=" "+figuras;
    var fo = document.getElementById('formula'); fo.innerHTML=" "+formula;
   
}
function opcionesShow(){
    //document.documentElement.requestFullscreen();
        
    var check =  document.getElementById('myCheck');
    var opc = document.getElementById('opAvanzadas');
    if(check.checked){
        opc.setAttribute("style","display:block !important");
        return true;
    }else{
        opc.setAttribute("style","display:none !important");
        return false;
    }
    
}

function showMenu(){
 var resShow = document.getElementById('aside');
    if(resShow.getAttribute("open") == "true"){
        resShow.setAttribute("style","display:none");
        resShow.setAttribute("open","false");
    }else{
    resShow.setAttribute("style","display:block");
    resShow.setAttribute("open","true");
    }
}

function advetenciaRender(){
     var hi = document.getElementById('text_opcResumnido');
    var opR = document.getElementById("opcResumnido");

    if(opR.checked){
        hi.setAttribute("style","display:none !important");
    }else{
        hi.setAttribute("style","display:block !important");
    }
     
}