import logo from './logo.svg';
import './App.css';
// import { PrimaryButton , SecondaryButton } from './components/button';
import  {PrimaryButton , SecondaryButton}  from './components/button';
import { List } from './components/lists';
import MyCustomCard from './components/cards';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { Container } from 'react-bootstrap';
import { DashboardCard } from './components/dashboard';
import { useState } from 'react';

function App() {

  const [webHeading , setWebHeading] = useState('Saylani Mass IT Training')


  function greetTheUser(){
    alert('Hello User')
  }

  // const arr = ['Karachi' , 'Islamabad' , 'Quetta']

  // const fruit = ['Apple' , 'Orange']

  const customerData = [
    {
      name:'Ali',
      id: 1
    },
    {
      name: 'Anas',
      id:2 
    }
  ]


  const watches = [
      {
        name: "G-Shock Casio 08",
        price: "$600",
        caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
        fullName:
          "Casio Analog-Digital Black Dial Women’s Watch-BA-110RG-1ADR (BX157)",
        category: "Women's Watch",
        color: [, "golden", "silver"],
        Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
        img: "https://iwc.com.pk/wp-content/uploads/2020/12/BA-110RG-1ADR-1.jpg",
      },
       {
        name: "G-shock Casio 09 ",
        price: "$600",
        caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
        fullName: "G-shock Casio 09 Champagne Index - 126231-62801",
        category: "Men's Watch",
        color: [, "golden", "silver"],
        Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
        img: "https://iwc.com.pk/wp-content/uploads/2022/01/GM-S2100-3ADR-1.jpg",
      },
      {
        name: "G-shock Casio 10 ",
        price: "$600",
        fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
        category: "Men's Watch",
        color: [, "golden", "silver"],
        Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
        img:"https://iwc.com.pk/wp-content/uploads/2023/03/GMA-S2100-1ADR.jpg"
      },
      {
        name: "G-shock Casio 11 ",
        price: "$600",
        caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
        fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
        category: "Men's Watch",
        color: [, "golden", "silver"],
        Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
        img:"https://iwc.com.pk/wp-content/uploads/2023/03/GA-2000S-1ADR.jpg"
      },
      {
        name: "G-shock Casio 12 ",
        price: "$600",
        caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
        fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
        category: "Men's Watch",
        color: [, "golden", "silver"],
        Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
        img:"https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100-1A3DR.jpg"
      },
     {
        name: "G-shock Casio 13 ",
        price: "$600",
        caption:"The Oyster Perpetual Explorer in Oystersteel features a distinctive black dial with characteristic 3, 6, and 9 numerals with a Chromalight display. Its highly legible hour markers, extremely resistant Oystersteel and waterproofness have made it a tool watch for exploration.",
  
        fullName: "G-shock Casio 10 Champagne Index - 126231-62801",
        category: "Men's Watch",
        color: [, "golden", "silver"],
        Tags: "126231-62801, Automatic, certified pre-owned, Datejust 36, Datejust 36 Men, Rolex, watch",
        img:"https://iwc.com.pk/wp-content/uploads/2023/03/GA-2100FR-5ADR.jpg"
      },
  ]
  

  // let webHeading = 'Saylani MASS IT Training'

  // function changeTheHeading(){
  //   webHeading = 'Hello World'
  // }


  function changeTheHeading(){
      setWebHeading('Hello World !')
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    {/* <PrimaryButton btnFunc={greetTheUser} btnTitle="My First Button" />
    <PrimaryButton btnTitle="My Second Button" />
    <SecondaryButton /> */}


    <List  data={customerData} />

    {/* <MyCustomCard /> */}

      {/* <Row>
      
        {
          watches.map((value , index)=>{
            return (
              <Col key={index}  xs={12} sm={12} md={6} lg={4} >
                <MyCustomCard productName={value.name} productImg={value.img} price={value.price} />
              </Col>
            )
          })
        }
      </Row> */}

      <DashboardCard name="Sualeh" email="sualeh@gmail.com" />


{/** This was Vanilla JS */}
      {/* <h1>{webHeading}</h1> */}
      {/* <button onClick={changeTheHeading}>Change Text</button> */}
   
   
{/** This is React State Example */}

<h2>
  {webHeading}
</h2>

{/* <button onClick={changeTheHeading} >Change The Text </button> */}
<button onClick={()=>setWebHeading('Hello From Callback')} >Change The Text </button>
    
   
    </>
  );
}

export default App;
