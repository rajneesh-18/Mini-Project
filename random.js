const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote-button');

async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        quoteText.textContent = `"${data.content}"`;
        quoteAuthor.textContent = `— ${data.author}`;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

newQuoteButton.addEventListener('click', getQuote);

// Initial quote
getQuote();
