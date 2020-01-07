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
function verifyUser(){
    if(localStorage.getItem("username")==null){
        window.open("homework1.html");
    }
    
}
function logOff(){
    if(localStorage.username){
        localStorage.removeItem("username");
        localStorage.clear();
        window.open("homework1.html");
    }
}