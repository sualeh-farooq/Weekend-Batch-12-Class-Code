import logo from './logo.svg';
import './App.css';
import MyTodoList from './Components/list';
import { Fragment } from 'react';
import PrimaryButton from './Components/button';

 function App() {


  function greetTheUser() {
    alert('Hello User ')
  }

  function contact() {
    alert('Contact Info ')
  }

  return (
    <Fragment>

      <div className="App">
      Hello World
    </div>


    <MyTodoList />


    <PrimaryButton btnFunc={greetTheUser} title="Greet The User"  img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png" alt="JS-LOGO"  />
    <PrimaryButton btnFunc={contact} title="Second Button"  img="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png" alt="JS-LOGO"  />
    {/* <PrimaryButton title="Second Button" /> */}
    {/* <PrimaryButton title="Third Button" /> */}
    {/* <PrimaryButton title="Fourth Button" /> */}

    </Fragment>

  );
}

export default App