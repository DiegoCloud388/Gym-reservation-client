import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './Home.css';
import { useEffect } from 'react';

function Home() {

  const now = new Date();
  const dateTimeNow = now.toISOString();

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiration = localStorage.getItem('expiration');
    if(token==='' || token ===null || expiration <= dateTimeNow ) {
      navigate('/sign-in');
    }
  })

  return (
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
  );
}

export default Home;