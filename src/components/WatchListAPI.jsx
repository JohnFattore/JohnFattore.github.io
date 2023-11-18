import React from 'react';
import '../Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios  from 'axios';

// Finnhub RESTful API base url, uses verison 1
const baseURLFinnhub = 'https://finnhub.io/api/v1/';

function WatchListAPI()
{
  // React's use state preserves data between page reloads
  const [strSymbol, setSymbol] = React.useState("SPY");
  const [quote, setQuote] = React.useState(0);

  // handles form submission
  const handleSubmit = event => {
    event.preventDefault();
    setSymbol(event.target.strSymbol.value);
  }

  // Building API Call
  var type = "quote/"
  var getRequest = baseURLFinnhub + type

  // Get request to Finnhub for stock quote
  React.useEffect(() => {
    axios.get(getRequest,  {
      params: {
        symbol: strSymbol,
        token: "ckivfdpr01qlj9q7a2rgckivfdpr01qlj9q7a2s0"
      }
    }).then((response) => {
      setQuote(response.data);
    });
  }, [strSymbol, getRequest]);

  if (!quote) return null;

  return (
      <div class="mb-3">
        <table class="table table-striped">
        <thead>
      <tr style={{background: 'Aquamarine'}}>
        <th scope="col">Ticker</th>
        <th scope="col">Current Price</th>
        <th scope="col">Daily Percent Change</th>
      </tr>
    </thead>
      <tr style={{background: 'salmon'}}>
        <td>{strSymbol}</td>
        <td>${quote.c}</td>
        <td>{quote.d}%</td>
      </tr>
  </table>
        <form onSubmit={handleSubmit}>
        <input type="text" class="form-control" name="strSymbol" id="strSymbol"/>
        <button type="submit">Submit</button> 
        </form>
      </div>
    );
  }

export default WatchListAPI;