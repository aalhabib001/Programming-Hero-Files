import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'LightRoom', price: '$50.99' },
    { name: 'PDF Viewer', price: '$20.99' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World</p>
        <VisitingCards></VisitingCards>

        {/* <Counter></Counter>
        <Users></Users> */}

        {/* {
          products.map(product => <Product product={product}></Product>)
        } */}

        {/* <Product product={products[0]}></Product> */}
        {/* <Person name="Rubel"></Person>
        <Person name="Jashim"></Person> */}
      </header>
    </div>
  );
}

function VisitingCards() {
  const [visitingCards, setCards] = useState([])

  useEffect(()=>{
    fetch('http://api.openweathermap.org/data/2.5/weather?q=sakhipur&appid=f4afbc06ae27bd8298ad4078745d8020')
    .then(res =>  res.json())
    .then(data => setCards(data))
  }, [])

  console.log(visitingCards.main.humidity);

  return (
    <div>
      <h3>{visitingCards.name}</h3>
      <h3>{visitingCards.main.humidity}</h3>
    </div>
  )
}


function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  return (
    <div>
      {/* <h3>Dynamic Users: {users[0].name}</h3> */}
      {
        users.map( user => <li>{user.name}</li>)
      }
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
  const handleDecrease = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleIncrease}>Increase</button>
      <button onMouseOut={handleDecrease}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px'
  }
  console.log(props);

  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: '2px solid blue',
    margin: '10px'
  }

  // console.log(props)

  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <p>Best in BD</p>
    </div>
  );
}


export default App;
