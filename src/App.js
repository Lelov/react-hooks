
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

function App(){

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/count">Count</Link>
          </li>
          <li>
            <Link to="/countWithClass">CountWithClass</Link>
          </li>
        </ul>
        
        <Route exact path="/" component={Home} />
        <Route path="/count" component={Count} />
        <Route path="/countWithClass" component={CountWithClass} />
        <Route path="/test" component={Test} />
      </div>
    </Router>
  )
}

function Test(props){
  console.log(props);
  return (
    <div>
      Test
      <button onClick={ () => window.history.go(-1) }>go back</button>
    </div>
  )
}

function Home(){
  return (
    <div>
      Home
    </div>
  )
}

class CountWithClass extends React.Component{

  componentWillUnmount(){
    alert('will unmounted');
  }

  state = {
    count: 0,
  }

  render(){

    const { count } = this.state;

    return (
      <div>
        <Link to="Test">go Test page</Link><br />
        <span>count</span>
        <span>{ count }　</span>
        <button onClick={ () => this.setState({count: count + 1  }) }> +</button>
        <button onClick={ () => this.setState({count: count - 1  }) }> - </button>
      </div>
    )
  }
}

function Count(){
  // 页面初始init
  useEffect(() => {
    console.log('page inited');
    return () =>{
      console.log('定时器');
    }
  },[]);

  // 计数A
  const [ countA, setCountA ] = useState(0);
  useEffect(() => {
    console.log('countA changed');
  },[countA]);

  // 计数B
  const [ countB, setCountB ] = useState(0);
  useEffect(() => {
    console.log('b changed');
    return () => {
      console.log(111);
    }
  },[countB]);

  return (
    <div className="App">

      {/* countA */}
      <div>
        <Link to="Test">go Test page</Link><br />
        <span>countA：</span>
        <span>{ countA }　</span>
        <button onClick={ () => setCountA(countA + 1) }> +</button>
        <button onClick={ () => setCountA(countA - 1) }> - </button>
      </div>
      {/* countB */}
      <div>
        <span>countB：</span>
        <span>{ countB }　</span>
        <button onClick={ () => setCountB(countB + 1) }> + </button>
        <button onClick={ () => setCountB(countB - 1) }> - </button>
      </div>
    </div>
  );
}

export default App;
