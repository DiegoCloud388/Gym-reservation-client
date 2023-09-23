import logo from './logo.svg';
import './Home.css';
import MySnackbar from '../components/MySnackbar'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <MySnackbar color="success" message="Hello world"></MySnackbar>
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