import './App.css';
import {useEffect, useState} from "react";

const App = () => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState({quote: '', author: ''});
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    useEffect(() => {
        const getQuotes = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setQuotes(data.quotes);
            if (data.quotes.length > 0) {
                setQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
            }
        }
        getQuotes();
    }, []);

    const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }

    return (<main>
        <div id='quote-box'>
            <h1 id='text'>{quote.quote}</h1>
            <p id='author'>{quote.author}</p>
            <div id={"buttons"}>
                <button id='new-quote' onClick={randomQuote}>Change</button>
                <div id={"tweeter"}>
                    <i className="fa-brands fa-twitter"></i>
                    <a href={"twitter.com/intent/tweet"} id={'tweet-quote'}>Tweet</a>
                </div>
            </div>
        </div>
    </main>)
}

export default App;