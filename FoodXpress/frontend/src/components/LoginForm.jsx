import { useState } from 'react'
import axios from 'axios'
import Field from './Field.jsx'

export default function LoginForm({ go, onDone }) {
  const [f, setF] = useState({ email: '', pw: '' })
  const [e, setE] = useState({})

  const submit = async (ev) => {
    ev.preventDefault()

    const x = {}

    if (!/^\S+@\S+\.\S+$/.test(f.email))
      x.email = 'Enter a valid email, like you@example.com.'

    if (f.pw.length < 8)
      x.pw = 'Password must be at least 8 characters.'

    setE(x)

    if (!Object.keys(x).length) {
      try {
        const response = await axios.post(
          'http://localhost:8080/user/login',
          {
            username: f.email,
            password: f.pw
          }
        )

        console.log(response.data)

        onDone(f.email.split('@')[0], 'login')

      } catch (error) {
        console.error(error)
        setE({ pw: 'Invalid username or password.' })
      }
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <p className="sub">
        or <button onClick={() => go('register')}>create an account</button>
      </p>

      <form onSubmit={submit} noValidate>

        <Field
          id="l-email"
          label="Email"
          type="email"
          value={f.email}
          error={e.email}
          auto="email"
          placeholder="you@example.com"
          onChange={(v) => setF({ ...f, email: v })}
        />

        <Field
          id="l-pw"
          label="Password"
          type="password"
          value={f.pw}
          error={e.pw}
          auto="current-password"
          placeholder="Your password"
          onChange={(v) => setF({ ...f, pw: v })}
        />

        <button type="submit" className="go">
          Login
        </button>

        <p className="fine">
          By logging in, you agree to our Terms &amp; Conditions and Privacy Policy.
        </p>

      </form>
    </div>
  )
}