import { useState } from "react"
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom"
import "./Style/App.css"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Store from "./Forum"

function App() {
  const [token, settoken] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <div className="header" style={{ display: "flex", justifyContent: "space-around", background: "yellow",}}>
          <NavLink exact activeClassName="active"to="/" style={{ color: "blue",}}>Home Page</NavLink>
          <NavLink activeClassName="active"to="/login" style={{ color: "blue" }}>Login</NavLink>
          <NavLink activeClassName="active"to= "/register" style={{ color: "blue" }}>Register</NavLink>
          <NavLink activeClassName="active"to="/forum" style={{ color: "blue" }}>Forum</NavLink>
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={() => <Login settoken={settoken} />} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forum" component={() => <Store token={token} />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
