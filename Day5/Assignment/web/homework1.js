function simpleinterest(pa,ri,ny){
    principleAmount= parseFloat(pa.value);
    rateofInterest=parseFloat(ri.value);
    numberofYear=parseFloat(ny.value);

    result=(principleAmount*rateofInterest*numberofYear)/100;

    //alert('Addition is ' +result);
    document.getElementById("result").innerHTML="Simple Interest is " +result;

    //console.clear();

}
function clearAll(){
    document.getElementById("txtPA").value="";
    document.getElementById("txtRI").value="";
    document.getElementById("txtNY").value="";

    document.getElementById("result").innerHTML="";

}