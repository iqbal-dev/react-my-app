import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const personDetails = [
    {name: "Md Iqbal Hossain", job: "Developer",address: 'kuril, chowrasta,dhaka'},
    {name: "Jannatul Ferdous", job: "Entrepreneur" ,address: 'azimpur, dhaka'},
    { name: "Md Arman Kazi", job: "Graphics Designer", address: "badda,Dhaka" },
    {name:"Md Rashedul Karim", job: "Athletic",address:"Bodagacha,nobinagar,brahmanbaria"}
  ]
  const products = [
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF reader',price:'$30.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>

        {
          personDetails.map(detail => <Person detail = {detail}></Person>)
        }
        {
          products.map(product => <Product product = {product}></Product>)
        }
      </header>
    </div>
  );
}
function Users() {
  const [Users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    
  }, [])
  return (
    <div>
      <h1>User:{Users.length}</h1>
      {
        Users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
function Counter() {
  const button = {
    padding: '10px',
    border:'2px solid cyan',
    borderRadius:'3px',
    background: 'cyan',
    color: 'blue',
    margin: '5px',
    outline: 'none',
    cursor: 'pointer'
  }
  const [count, setState] = useState(10);
  return (
    <div>
      <h1>count:{count}</h1>
      <button style = {button} onClick={() => setState(count + 1)}>Increase</button>
      <button style = {button} onClick={() => setState(count - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  const style = {
    height: '250px',
    width: '250px',
    margin: '10px',
    border: '2px solid gray',
    backgroundColor: 'lightGray',
    float: 'left'
  }
  const {name,price} = props.product
  return (
    <div style = {style}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
function Person(props) {
  const personStyle = {
    border: "2px solid yellow",
    width: "1000px",
    margin: "10px",
    background: "cyan",
    color: "red"
  }
  const { name, job, address } = props.detail;
  return (
    <div style = {{background:"tomato"}}>
      <div style = {personStyle}>
        <h1>Name: {name}</h1>
        <h3>Profession: {job}</h3>
        <h3><address>{address}</address></h3>
      </div>
    </div>
  )
}

export default App;
