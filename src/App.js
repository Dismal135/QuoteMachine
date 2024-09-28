import './App.css';
import CitySkyline from "./components/CitySkyline/CitySkyline";
import Clock from "./components/Clock/Clock";
import RandomQuote from "./components/RandomQuote/RandomQuote";
import {useEffect, useState} from "react";

const App = () => {
    const [isDay, setIsDay] = useState(false);
    const [time, setTime] = useState('');
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState({quote: '', author: ''});
    const [loading, setLoading] = useState(true);
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';


    useEffect(() => {
        const getQuotes = async () => {
            setLoading(true);
            try{const response = await fetch(url);
            const data = await response.json();
            setQuotes(data.quotes);
            if (data.quotes.length > 0) {
                setQuote(data.quotes[Math.floor(Math.random() * data.quotes.length)]);
            }} finally {
                setLoading(false)
            }
        }
        getQuotes();
    }, []);

    const randomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }

    useEffect(() => {
        const updateDateTime = () => {
            const date = new Date();
            setTime(date.toLocaleTimeString());

            const hour = date.getHours();
            setIsDay(hour >= 6 && hour < 18); // Day: 6 AM to 6 PM
        };

        updateDateTime(); // Set initial time and theme
        const intervalId = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return <>
        <CitySkyline isDay={isDay}/>
        <Clock time={time}/>
        {
            loading ? <p>Loading Quote</p> : 
            <RandomQuote quote={quote} randomQuote={randomQuote} isDay={isDay}/>
        }
    </>
}

export default App;