// 1 - Create an object literal called `menu` representing the menu of a jazz cafe with the 
//following properties: drink, appetizer, mainCourse
var menu = {
    drink,
    appetizer,
    mainCourse
}


// 2 - Assign values to the properties using the dot notation 
//(e.g., "Espresso", "Bruschetta", "Salmon Steak")
    menu.drink= "Espresso";
    menu.appetizer= "Bruschetta";
    menu.mainCourse= "Salmon Steak"



// 3 - Create a variable called `specials` and assign it to an empty object literal
var specials = {};


// 4 - Add properties to `specials` using the bracket notation for the following specials: 
//"Drink Special", "Appetizer Special", "Main Course Special"
specials ['Drink Special'] = "";
specials ['Appetizer Special'] = "";
specials ['Main Course Special'] = "",


// 5 - Assign special items (e.g., "Blue Note Cocktail", "Jazz Trio Sampler", "Miles Davis Ribeye") 
//to each special using the dot notation
specials.DrinkSpecial="Blue Note Cocktail";
specials.AppetizerSpecial= "Jazz Trio Sampler";
specials.MainCourseSpecial="Miles Davis Ribeye"



// 6 - Create an empty array called `playlist`
var playlist= [];


// 7 - Use the push() method to add at least 3 jazz songs to the `playlist` array (e.g., "Take Five", 
//"So What", "My Favorite Things")
playlist.push("Take Five");
playlist.push("So What");
playlist.push("My Favorite Things");



// 8 - Use the pop() method to remove the last song from the `playlist` array
playlist.pop();


// 9 - Create a variable called `totalSongs` and set it equal to the length of the `playlist` array
var totalSongs = (playlist.length);


// 10 - Create a variable called `roundedTotalSongs` and use Math.ceil() to round up the value of 
//`totalSongs`
var roundedTotalSongs = Math.ceil('totalSongs');


// 11 - Create a variable called `daysRemaining` to show the days remaining for the special menu items
//and set it to 7
var daysRemaining = (7, "days remaining");


// 12 - Create a while loop that decrements `daysRemaining` by 1 each iteration, and console logs the 
//current value of `daysRemaining`
var i = 0;
while (i < 6) {
    console.log(i);
    i=i-1;
}

// 13 - Create a string variable called `message` and set it to an empty string
var message = [];


// 14 - Use concat() to concatenate the strings "Welcome to our jazz cafe! Our menu features " with the 
//value of the `mainCourse` property from `menu`
console.log("Welcome to our jazz cafe! Our menu features ".concat(mainCourse));


// 15 - Use concat() to concatenate the string ", and our specials include " with the value of the 
//"Drink Special" property from `specials`
console.log(", and our specials include ".concat(DrinkSpecial));



// 16 - Use concat() to concatenate the string ", along with our playlist of " with the value of the 
//`totalSongs` variable
console.log(", along with our playlist of ".concat(totalSongs));



// 17 - Use toUpperCase() to convert the entire `message` string to uppercase
message.toUpperCase();


// 18 - Console log the `message` string
console.log(message);