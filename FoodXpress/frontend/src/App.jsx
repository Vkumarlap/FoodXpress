import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cuisines from './components/Cuisines.jsx'
import Restaurants from './components/Restaurants.jsx'
import AuthDrawer from './components/AuthDrawer.jsx'

export default function App() {
  const [page, setPage] = useState(null)       // null | 'login' | 'register'
  const [user, setUser] = useState(null)       // first name once signed in
  const [kind, setKind] = useState('login')    // how the user signed in

  const needLogin = () => { if (!user) setPage('login') }
  const onDone = (name, k) => { setUser(name); setKind(k) }

  return (
    <div>
      <header className="hero">
        <div className="wrap">
          <Navbar user={user} onOpen={setPage} onLogout={() => setUser(null)} />
          <Hero onSearch={needLogin} />
        </div>
      </header>

      <main className="wrap">
        <Cuisines onPick={needLogin} />
        <Restaurants onPick={needLogin} />
      </main>

      <footer>
        <div className="wrap">© 2026 Masala Lane. Order food online.</div>
      </footer>

      {page && (
        <AuthDrawer
          page={page}
          user={user}
          kind={kind}
          go={setPage}
          close={() => setPage(null)}
          onDone={onDone}
        />
      )}
    </div>
  )
}
