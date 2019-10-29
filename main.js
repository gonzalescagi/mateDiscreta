function procesar(){
            
        
var inNiveles= document.getElementById("niveles").value; 
var inAncho= document.getElementById("ancho").value;
var inAlto= document.getElementById("alto").value;
var inColor = document.getElementById("color").value;
var inColorFigura = document.getElementById("colorFigura").value;
            
var c = document.getElementById("myCanvas");
var ups = document.getElementById("ups");
    c.setAttribute("style","display:block !important");
    ups.setAttribute("style","display:none");
        
    var x=100;
    var y=100;
    var dy=parseInt(inAlto);
    var dx =parseInt(inAncho);
    var n= inNiveles;
    var height = (n*dy)+y; 
    var width = (n*dx);
            console.log("we "+width);
        document.getElementsByTagName("CANVAS")[0].setAttribute("height",height);
        document.getElementsByTagName("CANVAS")[0].setAttribute("width",width);
        var ctx = c.getContext("2d");
        
    var star= (width/2)-(dx/2);console.log("star" +star);
    x=star;
    for(var j=1; j<=n; j++){
        ctx.moveTo(x, y);
        var a=x; var b=y;
        for(var i =0; i<j; i++){
                ctx.lineTo(a+(dx/2), b-dy);
                ctx.lineTo(a+dx, b);
                ctx.lineTo(a, b);
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
    
    var figuras= n*((n*1)+1);
    var lineas= figuras*3;

    showRes(n,lineas, figuras);
               
}
function showRes(n, lineas, figuras){
    var resShow = document.getElementById('resultados');
    resShow.setAttribute("style","display:block !important");
    var nv = document.getElementById('nivelesRes'); nv.innerHTML=" "+n;
    var li = document.getElementById('lineasRes'); li.innerHTML=" "+lineas;
    var fi = document.getElementById('figurasRes'); fi.innerHTML=" "+figuras;
   
}
function opcionesShow(){
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