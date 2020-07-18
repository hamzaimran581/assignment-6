// //chapter 21-25
// //task 1
// var name = prompt("enter your first name");
// var sirname = prompt ("enter your second name");
// var fullname = name + " " +sirname ;
// alert ("greetings " + fullname);

// //task 2
// var fav = prompt ("enter the name of your favourite phone");
// for (i=0; i<fav.length;i++ ){
// }
// alert(i)

// //task 3
// var word= ("pakistani");
// document.write ( "string: " + word);
// document.write ("<br>Index of 'n' " +word.indexOf("n"));

// //task 4
// var word= ("hello world");
// document.write ( "string: " + word);
// document.write ("<br>last Index of 'l' " +word.lastIndexOf("l"));

// //task 5
// var word= ("pakistani");
// document.write ( "string: " + word);
// document.write ("<br>character at index 3 is: " +word.charAt(3));

//task 6
// var name = prompt("enter your first name");
// var sirname = prompt ("enter your second name");
// var fullname = name + " " +sirname ;
// alert ("greetings " + fullname);

// //task 7
// var city= "hyderabad"
// var rep = city.replace ("hyder" , "islam");
// document.write ("city: " + city)
// document.write ("<br>after replacement: " + rep)

// //task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var end = message.replace (/and/g , "&");
// document.write ("text before replacement: " +message);
// document.write ("<br>text after replacement: " +end);

// //task 9
// var val = "472";
// document.write ("value " + val + "<br> type: string <br>");
// document.write ("value " + (+val) + "<br> type: number <br>");

// //task 10
// var input= prompt ("enter input")
// document.write ("user input: " + input)
// document.write ("<br>upper case: " + input.toUpperCase() );

// //task 11
// var input= prompt ("enter input")
// document.write ("user input: " + input);
// var title = input.charAt(0).toUpperCase()
// document.write ("<br>title case: " + title);
// for(i=1; i<input.length; i++){
//     document.write(input[i])
// }
 

// //task 12
// var num = "35.36" ; 
// var rou = num.replace("." , "")
// document.write ("number: " +num)
// document.write ("<br>result: " +rou)

// //task 13
// var name = prompt ("enter your username")
// for (i=0; i<name.length; i++){
//if(name.charAt(i) ==="!"|| name.charAt(i) === "@" || name.charAt(i) === "," || name.charAt(i) === "."  ){
//         alert ("enter valid username");
//         alert (name1 = prompt ("enter your username"));
//         break
//     }    
// }

// //task 14
// var a = ["cake", "apple pie" , "cookie", "chips", "patties"];
// var b = prompt ("write the name of bakery item you want to buy")
// var c  = b.toLowerCase();

// for (i=0; i<a.length; i++){
//     if(a[i] === c ){ alert (b + " is available"  + " at our store"  );}
// else {alert("sorry item is not available")}
// break
// }

// //task 15
// var pass = prompt ("enter your password")
// var pass0 = pass.charAt(0)
// // var passl = pass.toLowerCase()
// if (pass0 === "0" || pass0 === "1" || pass0 === "2" || pass0 === "3" || pass0 === "4" || pass0 === "5" || pass0 === "6" || pass0 === "7" || pass0 === "8" || pass0 === "9"){
//     alert ("password cannot begin with numbers")
// }
// for(i=0; i<pass.length; i++){

// }
// if (i < 6 ) {alert ("password should contain atleast 6 character")}

// //task 16
// var university = "University of Karachi"; 
// for (i=0; i<university.length; i++){
//     document.write (university[i] + "<br>")
// }

// //task 17 
// var str = prompt("Enter Any Thing"); 
// var res = str.charAt(str.length-1); 
// document.write(res)

// //cahpter 26-30
// //task 1
// var number = prompt ("enter a positive integer");
// var rouoff = Math.round(number)
// var ceil = Math.ceil(number)
// var floor = Math.floor (number)
// if (number < 0 ){
//     alert ("enter a positive integer")
// }
// document.write ("user input " + number);
// if (number >= 0){
//     document.write ("<br>roundoff value " + rouoff)
// }
// document.write ("<br>ceil value " + ceil)
// document.write ("<br>floor value " + floor)

// //task 2
// var number = prompt ("enter a negative decimal integer");
// var rouoff = Math.round(number)
// var ceil = Math.ceil(number)
// var floor = Math.floor (number)
// if (number >= 0 ){
//     alert ("enter a negative decimal number")
// }
// document.write ("user input " + number);
// if (number < 0){
//     document.write ("<br>roundoff value " + rouoff)
// }
// document.write ("<br>ceil value " + ceil)
// document.write ("<br>floor value " + floor)

// //task 3
// var number = prompt ("enter a number");
// var a = Math.abs(number)
// document.write ("the absolute value of " + number + " is " + a)

// //task 4
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write ( numberOfStars);

// //task 5
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 2) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write ( numberOfStars);
// if (numberOfStars === 1){
// document.write ( "<br> random coin value is head " );
// }
// else {
// document.write ( "<br> random coin value is tail " );
// }

// //task 6
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write ( "random number between 1-100 is: " + numberOfStars);

//task 7

// //task 8
// var secret = 7;
// var guess = +prompt ("guess the secret number bw 1-10");
// if (guess === secret){
//     alert ("congragulations your guess is correct");
// }
// else{
//     alert ("Try again");
// }

// //chapter 31-34
// //task 1
// var rightNow = new Date();
// document.write (rightNow);

// //task 2
// var monthNames = ["january" , "febuary" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "october" , "november" , "december"];
// var date = new Date();
// var month = date.getMonth();
// document.write ("current month: " + monthNames[month]); 

// //task 3
// var weekName = ["sun" ,"mon","tues","wed","thu","fri","sat"];
// var date = new Date();
// var week = date.getDay();
// document.write ("current day: " + weekName[week]);

// //task 4
// var weekName = ["its fun day" ,"mon","tues","wed","thu","fri","its fun day"];
// var date = new Date();
// var week = date.getDay();
// document.write ("current day: " + weekName[week]);

// //task 5
// var date = new Date();
// var dateOnly = date.getDate();
// if (dateOnly < 16){ document.write("First fifteen day of the month")}
// else {document.write ("last days of the month")}

// //task 6
// var date = new Date();
// var date70 = new Date("January 01 , 1970");
// var mili = date.getTime();
// var sec = date70.getMinutes();
// document.write ("current date " +date);
// document.write ("<br>elapsed milisecond since 1 jan 1970 " +mili);

// //task 7
// var date = new Date();
// var hour = date.getHours();
// if (hour < 13){document.write ("It's AM" ); }
// else {document.write("it's PM");}

// //task 8
// var date = new Date("31 december , 2020");
// document.write ("later date: " +date) 

// // task 9
// var dateo = new Date("june 18, 2000");
// var milio = dateo.getTime();
// var date = new Date();
// var mili = date.getTime();
// var diff = mili - milio ;
// var days = diff/ (1000*60*60*24);
// document.write (days + " day have passed since first ramzan") 

// //task 10
// var date = new Date("June 19, 2019");
// var mili = date.getTime();
// var sec = mili/(999);
// document.write (sec)
 
// //task 11
// var date = new Date();
// document.write ("current date: " + date);

// // task 12
// var a = new Date();
// document.write('<h1>Current Date ;' +'</h1>' + a + '<br>' )
// var b = new Date();
// var c = b.setFullYear(1920);
// document.write( '<h1>100 Years Back ;' + '</h1> ' + ' ' + ' ' + b + '<br>' )


// //task 13
// var x = prompt ("enter your birth date")
// var y= prompt ("enter your birth month")
// var z = prompt ("enter your birth year")
// var dateo = new Date(y + x + "," + z);
// var milio = dateo.getTime();
// var date = new Date();
// var mili = date.getTime();
// var diff = mili - milio ;
// var days = diff/ (1000*60*60*24*30*12);
// document.write ( "your age is " + Math.floor(days) ); 

// task 14
// var a = 'K- Electric';
// document.write('<h1>' + '<u>' + a + '</u>' +'</h1>')
// var str = prompt('Enter your name');
// var res = str.toUpperCase();
// document.write('<h1>' + 'Costumer Name:' + ' ' + ' ' +  str +'</h1>')
// var d = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[d.getMonth()];
//  document.write('<h1>' +  'Month  :' + ' ' + n  + '</h1>')
//  var e = prompt('Number Of Units');
//  document.write('<h1>'  + 'Number Of Units :' + ' ' + e + '</h1>')
//  document.write('<h1>'  + 'Charge Per Units :' + ' ' + '16' + '</h1>')
//  document.write('<br>');
//  document.write('<br>');
//  var f = e * 16;
//  document.write( '<h1>' + 'Net Amount Payable (within Due Date) :'  + ' ' + f + '</h1>' + '<br>')
//  document.write('<h1>' + ' Late Payment Surcharge :' + '350' + '</h1>' + '<br>')
// document.write('<h1>' + ' Gross Amount Payable (after Due Date) :' + (f + 350)  + '</h1>')


// //cahpter 35-38
// //task 1
// function date() {
//  var x =  new Date ()  
//  document.write (x) 
// }
// date();

// //task 2
// function greet () {
//     var n = prompt("enter your first name");
//     var sn = prompt ("enter your first name");
//     alert ("hello " + n + " " + sn)
// }
// greet ();

// //task 3 
// function sum(){
//     var x = +prompt ("enter first number");
//     var y = +prompt ("enter second number");
//     alert (x + y);
// }
// sum()

// //task 4
// function cal (){
//     var si1 = +prompt ("enter your first number");
//     var operator = prompt ("enter your operator");
//     var si2 = +prompt ("enter your second number");
//     if(operator === "+"){
//         alert ( si1 + si2)
//     }
//     else if(operator === "-"){
//         alert ( si1 - si2)
//     }

//     else if(operator === "*"){
//         alert ( si1 * si2)
//     }

//     else if(operator === "/"){
//         alert ( si1 / si2)
//     }

// }
// cal ();

// //task 5
// function square(){
//     var insert = +prompt ("enter any number to find its square");
//     alert ((insert) * (insert) );
// }
// square();

//task 6


// //task 7
// function counting(){
//     var sel1 = +prompt("enter first number")
//     var sel2 = +prompt("enter second number")
//     for(i=sel1 ; i<=sel2 ; i++){
//         document.write (i + "<br>");
//     }
// }
// counting();

// task 8

// var base = prompt('Enter Base of triangle');
// var per = prompt('Enter Perpendicular of a triangle');
// function calcHypotenus(base,  per) {
//     return Math.sqrt(base*base  + per*per);
// }

// document.write('The hypoteneous of your triangle is ' + calcHypotenus(base,  per));  

// //task 9
// function area(width , hight){
//     document.write ("area of triangle = " + width*hight )
// }
// area (3,6);


//task 10
// function palindrome ( ) {
//     var a = prompt ("enter any word")
//     for (i=0 ; i< a.length /2; i++ ){
//         if (a[i]===a[i,length-1-i ]){
//             alert("this is palindrome word")
//         }
//     }
// }

// palindrome();

//task 11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// // TASK 12

// function find_longest_word(word)
// {
//   var array1 = word.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));
