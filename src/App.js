import React,{useState} from 'react';
import './App.css';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import Footer from './components/Footer';
import ContactForm from './components/Contactcard';


function App(){

   const [contacts, setContacts] = useState([]);
  const addContact = (newContact) =>  {
  setContacts((prevContacts) => [...prevContacts, newContact]);
};
return (
  <div className="app">
<header>
  <h1>SpotOn Car Dealership</h1>
</header>
<main>
  <CarForm/>
  <CarList/>
  <ContactForm addContact={addContact}/>
</main>


<Footer/>
  </div>
);

}
export default App;