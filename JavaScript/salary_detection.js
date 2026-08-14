let salary= Number(prompt("enter salary"));
let total_days=Number(prompt("enter total days"));
let working_days=Number(prompt("enter number of working days"));
let detection=Number(prompt("enter detection"));


let one_day_salary=salary/total_days;
let total=one_day_salary*working_days;
let final_salary=total-detection;

document.write("final_salary:   "+final_salary);