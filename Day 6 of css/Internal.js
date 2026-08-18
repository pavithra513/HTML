
// let n=Number(prompt("Enter the number"));
// if(n > 0){
//     document.write("positive");
// }
// else if(n < 0){
//     document.write("negative");
// }
// else if(n==0){
//     document.write("Neutral");
// }
// else{
//     document.write("Not an Number");
// }


// let num=Number(prompt("Enter the number"));
// if(num%3==0 && num%5==0){
//     document.write("Fizz Bus");
// }
// else if(num%3==0){
//     document.write("Fizz");

// }
// else if(num%5==0){
//     document.write("bus");
// }
// else{
//     document.write(num);
// }


// let day=Number(prompt("Enter Day number:"));
// if(day==1){
//     document.write("sunday");
// }
// else if(day==2){
//      document.write("monday");

// }
// else if(day==3){
//      document.write("tuesday");

// }
// else if(day==4){
//      document.write("wednesday");

// }
// else if(day==5){
//      document.write("thursday");

// }
// else if(day==6){
//      document.write("friday");

// }
// else if(day==7){
//      document.write("saturday");

// }
// else{
//     document.write("invalid");
// }


// let a = Number(prompt("Enter a Value:"));
// let b = Number(prompt("Enter b Value:"));
// let c = Number(prompt("Enter c Value:"));

// if(c==1){
//     document.write(a+b);
// }
// else if(c==2){
//     document.write(a-b);
// }
// else if(c==3){
//     document.write(a*b);
// }
// else if(c==4){
//     document.write(a/b);
// }
// else{
//     document.write(c);
// }


// let a = Number(prompt("Enter a Value:"));
// let b = Number(prompt("Enter b Value:"));
// let c = prompt("enter word: Add,Sub,Mul,Div");

// if( c== "Add"){
//     document.write(a+b);
// }
// else if(c=="Sub"){
//     document.write(a-b);
// }
// else if( c=="Mul"){
//     document.write(a*b);
// }
// else if( c=="Div"){
//     document.write(a/b);
// }
// else{
//     document.write(c);
// }

// let a = Number(prompt("Enter a Value:"));
// let b = Number(prompt("Enter b Value:"));
// let c = prompt("enter string: Add,Sub,Mul,Div");

// switch (c) {
//     case "add":
//         document.write("a+b=" + (a + b));
//         break;

//     case "sub":
//         document.write("a-b=" + (a - b));
//         break;

//     case "mul":
//         document.write("a*b=" + (a * b));
//         break;

//     case "div":
//         document.write("a/b=" + (a / b));

//     default:
//     document.write("invalid");

// let num=Number(prompt("Enter the number"));

// if(num>0){
//     document.write("+1");
// }
// else if(num<0){
//     document.write("-1");
// }
// else{
//     document.write("0");
// }

// let x=Number(prompt("Enter the number"));
// let y=Number(prompt("Enter the number"));

// if(x>0 && y>0){
//     document.write("first quadrant");
// }
// else if(x>0 && y<0){
//     document.write("II-Quadrant");
// }
// else if(x<0 && y<0){
//     document.write("III-Quadrant");

// }
// else if(x<0 && y>0){
//     document.write("IV- quadrant");
// }


// let degree=Number(prompt("enter degree"));

// if(degree<0){
//     document.write("Freezing weather");
// }
// else if(degree<=10 || degree<=20){
//     document.write("very cold");
// }
// else if(degree<20 || degree<=30 ){
//     document.write("normal");
// }
// else if(degree<=30 || degree<40){
//     document.write("hot weather");
// }
// else if(degree>40){
//     document.write("very hot")
// }


// let Tamilmark=Number(prompt("enter tamilmark:"));
// let englishmark=Number(prompt("enter englishmark:"));
// let mathsmark=Number(prompt("enter mathsmark:"));
// let sciencemark=Number(prompt("enter sciencemark:"));
// let socialmark=Number(prompt("enter socialmark:"));

// let total=Tamilmark+englishmark+mathsmark+sciencemark+socialmark;
// let average=total/5;

// if((total>=450) && (total<=500)){
//     document.write("A grade");
// }

//  else if((total>450) && (total<=400)){
//     document.write("B grade");
// }

//  else if((total>=350) && (total<=300)){
//     document.write("C grade");
// }

//  else {
//     document.write("E grade");
// }


// let salary = 15000;
// let total_workingdays = 26;
// let workingdays = Number(prompt("enter days"));
// let experience = Number(prompt("enter total experience"));
// let pds = salary / workingdays;
// let workingday_salary = pds * workingdays;
// let hike = salary * 5 / 100;
// let total_salary = workingday_salary + hike;

// if (experience > 5) {
//     document.write(total_salary);
// }
// else {
//     document.write(workingday_salary);
// }


// ----------------------ATM-----------------------------

// let amount = Number(prompt("enter amount:"));
// let user = prompt("checkbalance, widhdraw, deposit");

// switch (user) {
//     case "checkbalance":
//         document.write("balance =" + amount);
//         break;

//     case "deposit":
//         let deposit = Number(prompt("enter deposit amount"));
//         document.write("deposit =" + (amount + deposit));
//         break;

//     case "withdraw":
//         let withdraw = Number(prompt("enter withdraw amount"));
//         document.write("withdraw =" + (amount - withdraw));
//         break;
//     default:


// }


let role = prompt("admin, trainer, student");

switch (role) {
    case "admin":
        document.write("full access");
        break;

    case "trainer":
        document.write("training access");
        break;

    case "student":
        document.write("course access");
        break;
    default:


}



































































































































































































































































































































































































































