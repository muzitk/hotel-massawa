import React from 'react';
import ReactDom from 'react-dom';

// import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div> 
<Home/>
<Rooms/>
<SingleRoom/>
<ErrorPage/>


    </div>


  );
}

export default App;
