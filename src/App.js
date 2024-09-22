import './App.css';
import './styles/variables.css'
import CitySkyline from "./components/CitySkyline/CitySkyline";
import Clock from "./components/Clock/Clock";
import RandomQuote from "./components/RandomQuote/RandomQuote";
import {useEffect, useState} from "react";

const App = () => {
    const [isDay, setIsDay] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const date = new Date();
            setTime(date.toLocaleTimeString());

            const hour = date.getHours();
            setIsDay(hour >= 6 && hour < 24); // Day: 6 AM to 6 PM
        };

        updateDateTime(); // Set initial time and theme
        const intervalId = setInterval(updateDateTime, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return <>
        <CitySkyline isDay={isDay}/>
        <Clock time={time}/>
        <RandomQuote />
    </>
}

export default App;