function checkEvenOdd(){
    var num=parseInt(prompt("Enter number : ",0));
    var result= (num==0)
                    ? num+" is neither even nor odd...!"
                    : (num%2==0)? num+" is even number...!"
                        :num+" is odd number...!";
    document.getElementById("result").innerHTML=result;
}

function checkMax(){
    var num1=parseInt(prompt("Enter fisrt number : ",0));
    var num2=parseInt(prompt("Enter second number : ",0));
    if(num1==num2)
        result= num1+" and "+num2+" are same..!";
    else if(num1>num2)
        result=num1+" is greater than "+num2+"..!";
    else
        result=num1+" is lesser than "+num2+"..!";
    document.getElementById("result").innerHTML=result;
}
function checkVowels(){
    var character=prompt("Enter the Character : ",);
    var code=character.charCodeAt(character);
    Console.log(code);
    //if(isNaN(character)){
    if((code>=65 && code<=90) || (code>=97 && code<=122)){
    switch(character.toUpperCase())
    {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
                    result=character+" is a vowel..!";
                break;
        default:
            result=character+" is a consonant...!";
            break;
        
    }
    document.getElementById("result").innerHTML=result;
}
    else
    document.getElementById("result").innerHTML="Please enter between[A-Z] or [a-z]";

}


function printnums(){
    var num=parseInt(prompt("Enter number: ",0));
    var numbers=0;
    var i=1;
    while(i<=num){
        numbers=numbers + ","+ i;
        i++;
    }
    document.getElementById("message").innerHTML="Numbers from 0 to "+num+" are:"+numbers;
}

function findfactorial(){
    var num=parseInt(prompt("Enter number: ",0));
    var fact=1;
    for(var i=1;i<=num;i++){
        fact *= i;
    }
    document.getElementById("message").innerHTML="Factorial of " +num+" is "+fact;
}

function sumofconsecutivenumbers(){
    var num=parseInt(prompt("Enter number: ",0));
    var sum=0;
    var i=0;
    do{
        sum+=i;
        i++;
    }while(i<=num);
    
    document.getElementById("message").innerHTML="Sum of consecutive numbers till " +num+" is "+sum;
}