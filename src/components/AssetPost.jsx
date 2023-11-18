import React, {useState} from 'react';
import '../Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// Django RESTFUL API asset base url
const baseURLDjango = 'http://localhost:8000/portfolio/assets/';
// Finnhub RESTful API base url, uses verison 1
const baseURLFinnhub = 'https://finnhub.io/api/v1/';

function AllocationList()
{
    // React's use state preserves data between page reloads
    const [count, setCount] = useState(0);
    const [strTicker, setTicker] = useState('C')
    const [intShares, setShares] = useState(2)
    const [curPrice, setPrice] = useState(100)
    const [dtmBuyDate, setBuyDate] = useState('2023-11-11')
    const [strAccount, setAccount] = useState('roth_ira')
    const [intUser, setUser] = useState(1)
    const [symbol, setSymbol] = React.useState("SPY");
    const [assets, setAssets] = React.useState([]);

    // Handles form submission
    const handleSubmit = event => {
        event.preventDefault();
        setSymbol(event.target.symbol.value);
      }

    // Building API Call
    var type = "quote/"
    var getRequest = baseURLFinnhub + type

    // Get request to Finnhub for stock quote
    React.useEffect(() => {
        axios.get(getRequest,  {
          params: {
            symbol: symbol,
            token: "ckivfdpr01qlj9q7a2rgckivfdpr01qlj9q7a2s0"
          }
        }).then((response) => {
          setAssets(response.data);
        });
      }, [symbol, getRequest]);

    // Post request to Django backend for submitting stock purchases
    React.useEffect(() => {
        axios.post(baseURLDjango, {
            ticker_text: strTicker,
            shares_integer: intShares,
            costbasis_price: curPrice,
            buy_date: dtmBuyDate,
            account: strAccount,
            user: intUser
        });
    }, [count]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" class="form-control" name="symbol" id="symbol"/>
            <button type="submit">Submit</button> 
            </form>
        </div>
      );
 }


export default AllocationList;
