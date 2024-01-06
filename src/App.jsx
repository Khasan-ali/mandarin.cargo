import React from 'react';
import './App.css';
import Authenticated from './Auth/Authenticated';
import Unauthenticated from './Auth/Unauthenticated';
import useToken from './Hooks/useToken';

function App() {
  const [token] = useToken();

  if(token) {
    return <Authenticated />
  }else {
    return <Unauthenticated />
  }
}

export default App;
