
import React from 'react';
import logo from './logo.svg';
import './App.css';
import AdsPage from './components/ads/AdsPage/AdsPage';
import LoginForm from './components/auth/LoginPage/LoginForm';
import LoginPage from './components/auth/LoginPage/LoginPage';
import { AuthContextProvider } from './components/context/AppLoginContext';
function App() {
  const isInitiallyLogged = false;
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  console.log(isLogged)
  return (

    <div className="App">
      <AuthContextProvider value={authValue}>
        {/*<AdsPage />*/}
        <LoginPage></LoginPage>
        {isLogged ? <AdsPage /> : <div>hola</div>

        }
      </AuthContextProvider>
    </div>
  );
}

export default App;
