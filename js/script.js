
var randomNum // random number holding value
var message//
var div//
var randomQuote
var randomColor
var timeoutID
// quotes array
var quotes = [
  {
    quote:"Only when we lose everything, we are free to do anything.",
    source:"Fight Club",
    year:1998,
    tags: "life"
  },
  {
    quote:"Simplicity is the ultimate sophistication.",
    source:"Leonardo Da Vinci",
    year:1500,
    tags:"life"
  },
  {
    quote:"An investment in knowledge pays the best interest.",
    source:"Benjamin Franklin",
    year:1760,
    tags: "business"
  },
  {
    quote:"You cannot escape the responsibility of tomorrow by evading it today.",
    source:"Abraham Lincoln",
    year:1850,
    tags: "life advice"
  },
  {
    quote:"It is not the years in your life but the life in your years that counts.",
    source:"Adlai E. Stevenson",
    year:1947,
    tags: "life avice"
  }
];
var colors = ["#DC143C","#8A2BE2","#6495ED","#90EE90","	#20B2AA"];// creates an array of colors
displayedQuote() // displays an initial quote
setInterval(function(){ printQuote() }, 30000); //calls printQuote every 30 sec
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, true);
function getRandomQuote() {
    randomNum = Math.floor(Math.random()*quotes.length);    //selects a random quote object from the quotes array
    return quotes[randomNum];   //returns the randomly selected quote object
}

function getRandomColor(){
    randomNum = Math.floor(Math.random()*colors.length);//selects a random color object from the quotes array
    return colors[randomNum];//returns the randomly selected color object
}
function printQuote() {
    randomQuote = getRandomQuote(); // geting a random array
    message = '<p class="quote">'+ randomQuote.quote + '</p>'; // returns the quote section of the array
    message += '<p class="source">'+ randomQuote.source + '<span class="year">'+ randomQuote.year  + '</span>';// returns the source and year section of the array
    message += '<span class="tags">'+ randomQuote.tags + '</span>'+'</p>';
    div = document.getElementById("quote-box");
    div.innerHTML = message;
    document.body.style.backgroundColor = getRandomColor(); //setting the background of the page
}
function displayedQuote() {
    message = '<p class="quote">'+ "Being entirely honest with oneself is a good exercise. " + '</p>';
    message += '<p class="source">'+ "Sigmund Freud" + '<span class="year">'+  1925  + '</span>';
    message += '<span class="tags">'+ "life advice" + '</span>'+'</p>';
    div = document.getElementById("quote-box");
    div.innerHTML = message;
}
