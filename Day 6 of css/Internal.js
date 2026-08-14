
let n=Number(prompt("Enter the number"));
if(n > 0){
    document.write("positive");
}
else if(n < 0){
    document.write("negative");
}
else if(n==0){
    document.write("Neutral");
}
else{
    document.write("Not an Number");
}


let num=Number(prompt("Enter the number"));
if(num%3==0 && num%5==0){
    document.write("Fizz Bus");
}
else if(num%3==0){
    document.write("Fizz");

}
else if(num%5==0){
    document.write("bus");
}
else{
    document.write(num);
}


let day=Number(prompt("Enter Day number:"));
if(day==1){
    document.write("sunday");
}
else if(day==2){
     document.write("monday");

}
else if(day==3){
     document.write("tuesday");

}
else if(day==4){
     document.write("wednesday");

}
else if(day==5){
     document.write("thursday");

}
else if(day==6){
     document.write("friday");

}
else if(day==7){
     document.write("saturday");

}
else{
    document.write("invalid");
}


let a = Number(prompt("Enter a Value:"));
let b = Number(prompt("Enter b Value:"));
let c = Number(prompt("Enter c Value:"));

if(c==1){
    document.write(a+b);
}
else if(c==2){
    document.write(a-b);
}
else if(c==3){
    document.write(a*b);
}
else if(c==4){
    document.write(a/b);
}
else{
    document.write(c)
}








