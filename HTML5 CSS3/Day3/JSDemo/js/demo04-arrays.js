var numbers=[];
var numbers= new Array();
var listOfBoys=["Mohan","Mithun","Amal"];
var listOfGirls=new Array("Usha","Kruthi","Monisha");
document.write("<h3>"+typeof(listOfBoys)+"</h3>");
document.write("<h3>"+typeof(listOfBoys)+"</h3>");

document.write("<h3>"+listOfBoys+"</h3>");
document.write("<h3>"+listOfGirls+"</h3>");

document.write("<h3>Boys Count: "+listOfBoys.length+"</h3>");
document.write("<h3>Girls Count: "+listOfGirls.length+"</h3>");

document.write("<h3>Boys List using Traditional For Loop</h3>");
for(var i=0;i<listOfBoys.length;i++){
    document.write(listOfBoys[i].link().bold()+"<br/>");
}

document.write("<h3>Boys List using  For-in Loop</h3>");
for(var name in listOfBoys){
    document.write(listOfBoys[name].bold().italics().fontcolor('Green')+"<br/>");
}

document.write("<h3>Boys List using  For-of Loop</h3>");
for(var name of listOfBoys){
    document.write(name.bold().toUpperCase().fontcolor('Pink')+"<br/>");
}

listOfBoys.push("Akshay");
document.write("<h3>Boys Count: "+listOfBoys.length+"</h3>");
document.write("<h3>Boys List using  For-of Loop</h3>");
for(var name of listOfBoys){
    document.write(name.bold().toUpperCase().fontcolor('Chocolate')+"<br/>");
}

listOfGirls.unshift("Gomadi");
document.write("<h3>Girls Count: "+listOfGirls.length+"</h3>");
document.write("<h3>Girls List using  For-of Loop</h3>");
for(var name of listOfGirls){
    document.write(name.bold().toUpperCase()+"<br/>");
}

listOfGirls.pop();
document.write("<h3>Girls Count: "+listOfGirls.length+"</h3>");
document.write("<h3>Girls List after removing last element</h3>");
document.write("<h3>"+listOfGirls+"</h3>");

listOfGirls.shift();
document.write("<h3>Girls Count: "+listOfGirls.length+"</h3>");
document.write("<h3>Girls List after removing first element</h3>");
document.write("<h3>"+listOfGirls+"</h3>");

var listOfEmps=listOfGirls.concat(listOfBoys);
document.write("<h3>Total Count: "+listOfEmps.length+"</h3>");
document.write("<h3>Total Employeest</h3>");
document.write("<h3>"+listOfEmps+"</h3>");

listOfEmps.sort();
document.write("<h3>Total Employees in ascending order</h3>");
document.write("<h3>"+listOfEmps+"</h3>");

listOfEmps.reverse();
document.write("<h3>Total Employees in descending order</h3>");
document.write("<h3>"+listOfEmps+"</h3>");

var list=listOfEmps.join(" * ");
document.write("<h3>Total Employees after joining</h3>");
document.write("<h3>"+list+"</h3>");

document.write("<h3>Selected Employee</h3>");
document.write("<h3>"+listOfEmps[5]+"</h3>");

var sliceList=listOfEmps.slice(0,3);
document.write("<h3>After Slicing </h3>");
document.write("<h3>"+sliceList+"</h3>");

var spliceList = listOfEmps.splice(0,2,["Kichu","Moni"]);
document.write("<h3>After Splicing </h3>");
document.write("<h3>"+spliceList+"</h3>");
document.write("<h3>"+listOfEmps+"</h3>");