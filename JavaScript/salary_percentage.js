let salary= Number(prompt("enter salary"));
let total_days=Number(prompt("enter total days"));
let working_days=Number(prompt("enter number of working days"));
let bonus=salary * 5/100;

let one_day_salary=salary/total_days;
let total=one_day_salary*working_days;
let total_salary=bonus+total;

document.write("total_salary:   "+total_salary);