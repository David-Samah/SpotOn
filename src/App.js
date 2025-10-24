import React from 'react';
import './App.css';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import Footer from './components/Footer';



function App(){
return (
  <div className="app">
<header>
  <h1>SpotOn Car Dealership</h1>
</header>
<main>
  <CarForm/>
  <CarList/>
</main>

<Footer/>
  </div>
);

}
export default App;