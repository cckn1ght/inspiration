import { DateTime } from 'luxon';
import './App.css';
import { useState } from 'react';
import { randomQuote } from './quotes/index';

function App() {
  const [state, setState] = useState({
    time: DateTime.local(),
    quote: randomQuote(),
  });
  function getBGStyle(category = 'HK') {
    return {
      backgroundImage: `url(https://source.unsplash.com/random/2560x1600)`,
      backgroundSize: 'cover',
      height: '100vh'
    }
  }
  function onQuoteClick() {
    setState({...state, quote: randomQuote()})
  }

  return (
    <div style={getBGStyle()}>
      <div className="bg-wrapper">
        <div className="centered">
          <p className="quote-text" onClick={onQuoteClick}>
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
