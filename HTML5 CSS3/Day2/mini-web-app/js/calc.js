//user defined function
//1) function takes parameter
// function addition(fn,sn){
//     firstNumber= parseFloat(fn.value);
//     secondNumber=parseFloat(sn.value);

//     result=firstNumber+secondNumber;

//     //alert('Addition is ' +result);
//     document.getElementById("result").innerHTML="Addition is " +result;

// }
function subtraction(fn,sn){
    firstNumber= parseFloat(fn.value);
    secondNumber=parseFloat(sn.value);

    result=firstNumber-secondNumber;

    //alert('Addition is ' +result);
    document.getElementById("result").innerHTML="Subtraction is " +result;

}
//2) function takes 0 parameters
// function addition(){
//     var fn=parseFloat(document.getElementById("txtFN").value);
//     var sn=parseFloat(document.getElementById("txtSN").value);
//     var result=fn+sn;
//     document.getElementById("result").innerHTML="Addition is " +result;
// }

//3)function takes formObj as parameter
// function addition(){
//     var fn=parseFloat(document.forms[0].txtFN.value);
//     var sn=parseFloat(document.forms[0].txtSN.value);

//     //or calcForm.txtFN.value also......
//     //or calcForm["txtFN"].value...
//     //or calcForm[0].value...
//     var result=fn+sn;
//     document.getElementById("result").innerHTML="Addition is " +result;
// }

function addition(calcForm){
    if(calcForm.checkValidity()){
    var firstNumber= parseFloat(calcForm.txtFN.value);
    var  secondNumber=parseFloat(calcForm.txtSN.value);

    var result=firstNumber+secondNumber;
    alert('Addition is '+result);
    }
}