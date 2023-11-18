import React from 'react';
import '../Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// variable to hold URL with Django Users API
const baseURL = 'http://localhost:8000/portfolio/assets/';

function AssetList()
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

  return (  
  <table class="table table-striped">
        <thead>
      <tr style={{background: 'Aquamarine'}}>
        <th scope="col">Ticker</th>
        <th scope="col">Shares</th>
        <th scope="col">Cost Basis</th>
        <th scope="col">Buy Date</th>
        <th scope="col">Account</th>
        <th scope="col">User</th>
      </tr>
    </thead>
      {assets.map(asset => (
      <tr key={asset.user} style={{background: 'salmon'}}>
        <td>{asset.ticker_text}</td>
        <td>{asset.shares_integer}</td>
        <td>${asset.costbasis_price}</td>
        <td>{asset.buy_date}</td>
        <td>{asset.account}</td>
        <td>{asset.user}</td>
      </tr>
      ))}
  </table>
    );
 }


export default AssetList;
