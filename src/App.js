import logo from './logo.svg';
import './App.css';

function Header() {
  return (
  <header className='Navbar'>
      <nav>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
    </header>
    )
  }


function Logo() {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  )
}

function MainContent() {
  return (
    <div>

    <h1>Fun facts about React</h1>
    <ul>
     <li>Was first released in 2013</li>
     <li>Was originally created by Jordan Walke</li>
     <li>Has well over  100K stars on Github</li>
     <li>Is mantained by Facebbok</li>
     <li>Was first released in 2013</li>
    </ul>

    <h1>Reasons to learn React</h1>
<ul>
 <li>More likely to get a job as a developer </li>
 <li>Fast, interesting and versatile </li>
 <li>Single Page Apps </li>

 </ul>
 </div>
  )
}

function Footer() {
  return(
    <footer className="Footer">&copy; 2023 Amanda Barata Development.   All rights reserved</footer>
  )
}

function App() {
  return (

   
    <div className="App">

    <Header/>

    <Logo/>

   <MainContent/>
       
  <Footer/>

    </div>
 

  
  );
}


export default App;

