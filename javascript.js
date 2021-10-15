let today = new Date();
let date =today.getDate()+ ' '+ (today.getMonth()+1) + ' ' + (today.getFullYear())
console.log(date)
let login = document.querySelector('.login').innerHTML;
let currentDate =  login + ' ' + date;
 let el = document.querySelector("#log");
 el.innerHTML = currentDate

 const dropdown = document.querySelector('.dropdown');
 const cardToggle = document.querySelector('.toggle');
 cardToggle.onclick = function(){
     dropdown.classList.toggle('active')
 }
 
 
