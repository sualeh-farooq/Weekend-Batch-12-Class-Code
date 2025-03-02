import logo from './logo.svg';
import './App.css';
import PrimaryBtn from './components/button/primaryBtn';
import { useState } from 'react';

function App() {
  const cities = ['khi' , 'ism']

  return (
    <>
    <h1>First Class of React</h1>
    <PrimaryBtn btnTitle="First Button" icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1z0LC70CF3lPE1Xe-Uka4Y5sSlLzrAVHCQg&s" />
    <PrimaryBtn btnTitle="Second Button" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" />
    </>
  );
}

export default App;
