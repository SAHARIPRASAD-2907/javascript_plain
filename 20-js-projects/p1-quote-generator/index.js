const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader")

let apiQuotes = [];

// show loading
const loading = ()=>{
    loader.hidden=false
    quoteContainer.hidden=true;
}

//Hide loading
const complete = ()=>{
    quoteContainer.hidden = false;
    loader.hidden=true;
}

//https://twitter.com/intent/tweet
// Show new Quote
const newQuotes = () => {
   loading(); 
  //Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)]
//   check if author field is blank and replace with unknown
  if(!quote.author){
    authorText.textContent = "Unknown";
  }else{
    authorText.textContent = quote.author;
  }
  //Check Quote length to determine styling
  if(quote.text.length >120){
      quoteText.classList.add('long-quote')
  }else{
    quoteText.classList.remove('long-quote')
  }
  //set Quote, Hide loader
  quoteText.textContent = quote.text;
  complete();
}

//Get Quotes from API
const getQuotes = async () => {
    loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
  } catch (error) {
    //Catch Error Here
  }
};
// To tweet a quote
const tweetQuote = ()=>{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank')
}

//Event listners
newQuoteBtn.addEventListener('click',newQuotes)
twitterBtn.addEventListener('click',tweetQuote)


//On Load
getQuotes()