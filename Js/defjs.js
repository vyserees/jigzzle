
$(document).ready(function(){
    $('.dropdown-toggle').dropdown();
});

function populate(choose){
    document.getElementById("kontrolni").innerHTML = choose;
    
    for (i=1; i<5; i++){
        for (j=1; j<5; j++){
            document.getElementById(i.toString()+j.toString()).style.backgroundImage = "url('Assets/Pics/"+choose+"/pic"+i+j+".png')";
        }
    }
}

function shafl(){
    if(document.getElementById("kontrolni").innerHTML==="TEST"){
        window.alert("THERE'S NO PICTURE SELECTED FOR JIGSAW!!!");
    }else{
    
    var arra = ['11', '12', '13', '14', '21', '22', '23', '24', '31', '32', '33', '34', '41', '42', '43'];
    var count = 0;
    newarr = shufarray(arra);
    
     for (i=1; i<5; i++){
        for (j=1; j<5; j++){
            if(i===4 && j===4){
                document.getElementById(i.toString()+j.toString()).style.backgroundImage = "none";
                document.getElementById(i.toString()+j.toString()).innerHTML = i.toString()+j.toString();
            }else{
            document.getElementById(i.toString()+j.toString()).style.backgroundImage = "url('Assets/Pics/"+document.getElementById("kontrolni").innerHTML+"/pic"+newarr[count]+".png')";           
            document.getElementById(i.toString()+j.toString()).innerHTML = newarr[count];
            count++;
        }
        }
    }
    }
}

function shufarray(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function moving(field){
   
    var idbroj = field.id;
    var picpath = document.getElementById(idbroj).innerHTML;
    
    
    var right = idbroj/1 + 1;
    var left = idbroj/1 - 1;
    var top = idbroj/1 - 10;
    var down = idbroj/1 + 10;
    
    if ((right.toString().charAt(1)<5)&&(document.getElementById((right).toString()).style.backgroundImage === "none")) 
    {
        document.getElementById((right).toString()).style.backgroundImage = "url('Assets/Pics/"+document.getElementById("kontrolni").innerHTML+"/pic"+picpath+".png')";
        document.getElementById((right).toString()).innerHTML = picpath;
        document.getElementById(idbroj).style.backgroundImage = "none";
    document.getElementById((idbroj).toString()).innerHTML = '44';
    }else{
        if ((left.toString().charAt(1)>0)&&(document.getElementById((left).toString()).style.backgroundImage === "none"))
    {
        document.getElementById((left).toString()).style.backgroundImage = "url('Assets/Pics/"+document.getElementById("kontrolni").innerHTML+"/pic"+picpath+".png')";
        document.getElementById((left).toString()).innerHTML = picpath;
        document.getElementById(idbroj).style.backgroundImage = "none";
    document.getElementById((idbroj).toString()).innerHTML = '44';
    }else{
        if ((top>10)&&(document.getElementById((top).toString()).style.backgroundImage === "none"))
    {
        document.getElementById((top).toString()).style.backgroundImage = "url('Assets/Pics/"+document.getElementById("kontrolni").innerHTML+"/pic"+picpath+".png')";
        document.getElementById((top).toString()).innerHTML = picpath;
        document.getElementById(idbroj).style.backgroundImage = "none";
    document.getElementById((idbroj).toString()).innerHTML = '44';
    }else{
        if ((down.toString().charAt(0)<5)&&(document.getElementById((down).toString()).style.backgroundImage === "none"))
    {
        document.getElementById((down).toString()).style.backgroundImage = "url('Assets/Pics/"+document.getElementById("kontrolni").innerHTML+"/pic"+picpath+".png')";
        document.getElementById((down).toString()).innerHTML = picpath;
        document.getElementById(idbroj).style.backgroundImage = "none";
    document.getElementById((idbroj).toString()).innerHTML = '44';
    }else{
        window.alert("CANNOT MOVE THIS FIELD!!!");
    }
    }
    }
    }
    
    
    
}
