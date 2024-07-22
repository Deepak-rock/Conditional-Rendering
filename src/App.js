import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" name="Rahul" />
        {isLoggedIn && <button type="button">Logout</button>}

        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App

/* 
Using an If...Else Statement :

  renderAuthButton = () =>{
    const {isLoggedIn} = this.state
    if (isLoggedIn === true){
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

Using Element Variables :
  render() {
    const { isLoggedIn } = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }

Using Ternary Operators :
  <div className="container">
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
  </div>

Using Logical && Operator :
    {isLoggedIn && <button type="button">Logout</button>}
    {!isLoggedIn && <button type="button">Login</button>}
 */
