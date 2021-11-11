//Get Quote From API
async function getQuote() {
    // if you get CORS error use this
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com'
    const apiURL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('whoops, no quote', error);
    }
}