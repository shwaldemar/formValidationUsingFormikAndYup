import React from 'react';
import './App.css';
import rocketImg from "../src/images/rocket-man.png"
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100"src={rocketImg} alt="man riding rocket"/>
        </div>
      </div>
    </div>
  );
}

export default App;
