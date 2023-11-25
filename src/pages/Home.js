import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './Home.css';
import { useEffect, useState } from 'react';
import Layout from './Layout';

export default function Home() {
  const now = new Date();
  const dateTimeNow = now.toISOString();
  const navigate = useNavigate();
  const [isLoggedIn, showLayout] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiration = new Date(localStorage.getItem('expiration'));

    if(!token || expiration <= dateTimeNow ) {
      navigate('/');
      showLayout(true);      
    }
    else {
      showLayout(false);
      localStorage.clear();
    }    
  },[dateTimeNow, isLoggedIn, navigate]);

  return (
    <div className="header">
      {isLoggedIn && <Layout/>}
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>   
    </div>   
  ); 
}