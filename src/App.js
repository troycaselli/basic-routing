import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Home Component</h1>
}
function About(props) {
  return <h1>About Component</h1>
}
function Contact(props) {
  return <h1>Contact Component</h1>
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Routes>
            <Route path='/' element={Home()} />
            <Route path='/about' element={About()} />
            <Route path='/contact' element={Contact()} />
          </Routes>
      </header>
    </div>
  );
}

export default App;
