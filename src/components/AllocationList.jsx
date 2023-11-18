import React from 'react';
import '../Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// variable to hold URL with Django Users API
const baseURL = 'http://localhost:8000/portfolio/assets/';

function AllocationList()
{
  const [assets, setAssets] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL,  {
      params: {
        user: 3
      }
    }).then((response) => {
      setAssets(response.data);
    });
  }, []);

  if (!assets) return null;

  // TODO: create dictonary containing tickers and share amounts
  var dictAllocation = {};
  for (let i = 0; i < assets.length; i++)
  {
    if (assets[i].ticker_text in dictAllocation)
    {
      dictAllocation[assets[i].ticker_text] = dictAllocation[assets[i].ticker_text] + parseInt(assets[i].shares_integer)
    }
    else
    {
      dictAllocation[assets[i].ticker_text] = parseInt(assets[i].shares_integer)
    }
  }

  const keys = Object.keys(dictAllocation);
  const values = Object.values(dictAllocation);
  const display = []
  for (let i = 0; i < keys.length; i++)
  {
    display.push(keys[i] + ": " + values[i])
  }


  return (
    <div>
      {display.map((display) => (
        <p>{display}</p>
      ))}
    </div>);
 }


export default AllocationList;
