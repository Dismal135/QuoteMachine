import "./RandomQuote.css";

const RandomQuote = ({quote, randomQuote, isDay}) => {


    return (<div className={"wrapper"} style={{color: isDay ? "#003366" : "#fff"}}>
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