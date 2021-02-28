
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  const [addedCountries, setAddedCountries] = useState([])

  const handleAddCountry = (country) => {
    console.log(country.name);
    console.log('added')

    const newAddedCountry = [...addedCountries, country];
    setAddedCountries(newAddedCountry);

  }

  return (
    <div>
      <h4>Hello World</h4>
      <h3>{countries.length}</h3>
      <Cart cart={addedCountries} ></Cart>

      {
        countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
      }

    </div>

  );
}

export default App;
