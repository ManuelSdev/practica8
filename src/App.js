import logo from './logo.svg';
import './App.css';
import AdsPage from './components/ads/AdsPage/AdsPage';
import LoginForm from './components/auth/LoginPage/LoginForm';
import LoginPage from './components/auth/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
      {/**
       *       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */
      }

      {/*<AdsPage />*/}
      <LoginPage></LoginPage>


    </div>
  );
}

export default App;
