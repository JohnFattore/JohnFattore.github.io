import React, {useState} from 'react';
import '../Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { all } from 'axios';

// variable to hold URL with Django Asset API
const baseURL = 'http://localhost:8000/portfolio/accounts/login/';

function Login()
{
    const [count, setCount] = useState(0);

    React.useEffect(() => {
        axios.post(baseURL, {
            username: "user@example.com",
            password: "secure_password",
            //csrfmiddlewaretoken: "your_csrf_token_here"
        });
    }, [count]);

    return (
        <div>
            <p>Hello World</p>
        </div>
      );
 }


export default Login;
