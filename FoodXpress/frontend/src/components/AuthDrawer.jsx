import { useEffect, useRef } from 'react'
import LoginForm from './LoginForm.jsx'
import RegisterForm from './RegisterForm.jsx'

export default function AuthDrawer({ page, go, close, onDone, user, kind }) {
  const closeBtn = useRef()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    closeBtn.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="ov" onClick={close} />
      <aside className="dr" role="dialog" aria-modal="true" aria-label={page === 'login' ? 'Login' : 'Sign up'}>
        <button className="x" ref={closeBtn} onClick={close} aria-label="Close">×</button>

        {user ? (
          <div className="done">
            <div className="tick">✓</div>
            <h2>{kind === 'register' ? 'Account created' : `Welcome back, ${user}`}</h2>
            <p className="sub">
              {kind === 'register'
                ? `Hi ${user}, you can now order from kitchens near you.`
                : 'Your saved addresses and orders are ready.'}
            </p>
            <button className="go" onClick={close}>Start ordering</button>
          </div>
        ) : page === 'login' ? (
          <LoginForm go={go} onDone={onDone} />
        ) : (
          <RegisterForm go={go} onDone={onDone} />
        )}
      </aside>
    </>
  )
}
