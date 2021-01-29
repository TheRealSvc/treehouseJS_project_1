/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = []
quotes.push({quote: "This is your life, and its ending one minute at a time", source: "Chuck Palahniuk", citation: "Fight Club", year: "1996", tag:"Entertainment" });
quotes.push({quote: "What you see is all there is", source: "Daniel Kahneman",citation: "Thinking Slow Thinking Fast", year: "", tag: "Real Person"}) ;  
quotes.push({quote: "Mistakes are always forgivable, if one has the courage to admit them", source: "Bruce Lee", citation:"", year: "", tag: "Real Person"});  
quotes.push({quote: "The greatest teacher, failure is", source: "Yoda", citation: "Star Wars", year: "", tag: "Entertainment"});  
quotes.push({quote: "If you torture the data long enough, it will confess", source: "Ronald H. Coase", citation: "", year: "", tag: "Real Person"}) ;
//console.log(quotes) ;

/***
 * `getRandomQuote` as arrow function
 *  picks a random quote from an array of -global- quote objects 
***/
getRandomQuote = () => quotes[Math.min(Math.floor(Math.random()*quotes.length),quotes.length)] ; // gets quote from global quotes array 

/***
 * `getRandomColor` as arrow function
 *  picks a random color  
***/
getRandomColor = () => [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256) ] ;

/***
 * `printQuote` function as declared function
 * calls getRandomQuote and diplays it in the #quote-box class tag  
***/
function printQuote() {
  let quote = getRandomQuote() ;
  let htmlStr = `<p class="quote"> ${quote["quote"]} </p> <p class="source"> ${quote["source"]}`;

  if (quote.citation.length > 0 ) {
   htmlStr += `<span class="citation">  ${quote["citation"]} </span>` ;
  }
  if (quote.year.length > 0 ) {
    htmlStr += `<span class="year"> ${quote["year"]} </span>` ;
   }
  if (quote.tag.length > 0 ) {
    htmlStr += `<span class="tag"> , ${quote["tag"]} </span>` ;
   }
  let rgb = getRandomColor() ;
  console.log(htmlStr) ;
  let box = document.getElementById('containerbox') ;
  box.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` ;
  document.querySelector("#quote-box").innerHTML = htmlStr + "</p>" ;
}

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false) ;
setInterval(printQuote,6000) ; // updates every 6 seconds if no click in between 
