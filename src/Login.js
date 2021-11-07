import React, { useState } from "react"

const Login = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  async function handlelogin() {
    const result = await fetch("http://localhost:8080/user/login", {
      method: "Post",
      headers: {
        username: username,
        password: password,
      },
    })
    const token = await result.text()
    props.settoken(token)
  }

  return (
    <div>
      <h1>Login</h1> <br />
      <br />
      <div className="col-sm-6 offset-sm-3">
        <div>
          <input className="form-control" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div>
          <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <br />
        <input className="btn btn-primary" type="button" value={loading ? "Loading...." : "Login"} disabled={loading} onClick={handlelogin}/>
      </div>
    </div>
  )
}

export default Login
