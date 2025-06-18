// API URLS
const GEO_IP_URL = `https://ipapi.co/json/`;
const WORLD_TIME_URL = "https://worldtimeapi.org/api/ip/";
const QUOTABLE_URL = "https://api.quotable.io/quotes/random";

// Quote Display Variables
let quoteDisplay = document.getElementById("quote");
let authorDisplay = document.getElementById("author");

// Time Variables
let timezone

async function getRandomQuote(){
  let quote,author;
  let response = await fetch(QUOTABLE_URL)
  let json = await response.json()

  console.log(json[0])

   author = json[0].author;
   quote = json[0].content;

   setQuote(quote,author)

}

function setQuote(quote,author){
  quoteDisplay.innerHTML = quote
  authorDisplay.innerHTML = author
}

async function getTimeData(){
  let response = await fetch(WORLD_TIME_URL)
  let timeData = await response.json();
  console.log(timeData)
}

getRandomQuote()
getTimeData()