import { useState } from 'react'
import Field from './Field.jsx'

export default function RegisterForm({ go, onDone }) {
  const [f, setF] = useState({ name: '', phone: '', email: '', pw: '' })
  const [e, setE] = useState({})
  const set = (k) => (v) => setF({ ...f, [k]: v })

  
const submit = async (ev) => {
  ev.preventDefault();

  const x = {};

  if (f.name.trim().length < 2) {
    x.name = 'Enter your full name.';
  }

  if (!/^\d{10}$/.test(f.phone.replace(/\D/g, ''))) {
    x.phone = 'Enter a 10-digit mobile number.';
  }

  if (!/^\S+@\S+\.\S+$/.test(f.email)) {
    x.email = 'Enter a valid email, like you@example.com.';
  }

  if (f.pw.length < 8) {
    x.pw = 'Password must be at least 8 characters.';
  }

  setE(x);

  if (Object.keys(x).length === 0) {
    try {
      const response = await fetch(
        'http://localhost:8080/user/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: f.email.trim(),
            password: f.pw,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Registration failed. Please try again.');
      }

      alert('Registration successful!');
      onDone(f.name.trim().split(' ')[0], 'register');
    } catch (error) {
      alert(error.message);
    }
  }
};


  return (
    <div>
      <h2>Sign up</h2>
      <p className="sub">or <button onClick={() => go('login')}>login to your account</button></p>
      <form onSubmit={submit} noValidate>
        <Field id="r-name" label="Full name" value={f.name} error={e.name} auto="name"
          placeholder="Asha Rao" onChange={set('name')} />
        <Field id="r-phone" label="Mobile number" type="tel" value={f.phone} error={e.phone} auto="tel"
          placeholder="98765 43210" onChange={set('phone')} />
        <Field id="r-email" label="Email" type="email" value={f.email} error={e.email} auto="email"
          placeholder="you@example.com" onChange={set('email')} />
        <Field id="r-pw" label="Password" type="password" value={f.pw} error={e.pw} auto="new-password"
          placeholder="At least 8 characters" onChange={set('pw')} />
        <button type="submit" className="go">Create account</button>
        <p className="fine">By creating an account, you agree to our Terms &amp; Conditions and Privacy Policy.</p>
      </form>
    </div>
  )
}


