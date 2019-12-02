import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './containers/Routes/routes';
import AuthContextContainer from './containers/Context/AuthContext/AuthContextContainer';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
      <header className="App-header">
        <BrowserRouter>
          <ErrorBoundary>
            <AuthContextContainer>
              <Routes />
            </AuthContextContainer>
          </ErrorBoundary>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
