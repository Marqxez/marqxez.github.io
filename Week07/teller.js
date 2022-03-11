var job = ["Pro Athlete","Dentist","QA Analyst","Store Manager"];
var city = ["Houston","Austin","Out of the US","Chicago"];
var spouse = ["Rolando","Mateo","Korbin","Jacob"];
var numKids = [0,10,5,2];

var xx = Math.floor(Math.random() * 4 );

function teller(job,city,spouse,numKids) {

  document.write("You will be a " + job + " in " + city + ", and married to " + spouse + " with " + numKids + " kids. ");
}

teller (job[xx],city[xx],spouse[xx],numKids[xx])
