import {useEffect, useState} from "react";
import "./RandomQuote.css";

const RandomQuote = () => {
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

    return (<div className={"wrapper"}>
        <div className='quote-box'>
            <h1 className='quote'>"{quote.quote}"</h1>
            <p className='author'>-{quote.author}</p>
            <div className={"buttons"}>
                <button className='new-quote' onClick={randomQuote}>New quote</button>
                <a href={"https://x.com/?lang=en"} className={'tweet-quote'}><i className="fa-brands fa-twitter"></i>Tweet</a>
            </div>
        </div>
    </div>)
}

export default RandomQuote;