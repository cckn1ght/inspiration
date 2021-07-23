import { DateTime } from 'luxon';
import './App.css';
import { useState } from 'react';
import { randomQuote } from './quotes/index';

function App() {
  const [state, setState] = useState({
    time: DateTime.local(),
    quote: randomQuote(),
  });
  function getBGStyle() {
    return {
      backgroundSize: 'cover',
      height: '100vh'
    }
  }
  function onQuoteClick() {
    setState({...state, quote: randomQuote()})
  }
  function quoteClassName() {
    let cn = "quote-text"
    const lineCount = state.quote.text.split("\n").length;
    if (state.quote.text.length >= 500 || lineCount >= 8) {
      cn = `${cn} quote-text-xs`
    } else if (state.quote.text.length >= 200 || lineCount >= 4) {
      cn = `${cn} quote-text-small`
    }
    return cn
  }

  return (
    <div id="cover" style={getBGStyle()}>
      <div className="bg-wrapper">
        <div className="centered">
          <p className={quoteClassName()} onClick={onQuoteClick}>
            {state.quote.text}
          </p>
          <p className="quote-author">by {state.quote.author}</p>
        </div>
        <div className="bottom-right">
        <div className="time-text">
            <span id="time">{state.time.toFormat("h':'mm")}</span>
            <span id="ampm">{state.time.toFormat('a')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
