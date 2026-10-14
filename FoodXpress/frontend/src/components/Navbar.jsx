export default function Navbar({ user, onOpen, onLogout }) {
  return (
    <nav>
      <div className="brand">
        <i>
          <svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 7h10a5 5 0 0 1-10 0Z" fill="#F6B41A" /></svg>
        </i>
        Masala Lane
      </div>
      <div className="nav-r">
        <button className="nl hide-sm">Offers</button>
        <button className="nl hide-sm">Help</button>
        {user ? (
          <>
            <span style={{ fontWeight: 700, padding: '0 8px' }}>Hi, {user}</span>
            <button className="nb" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="nl" onClick={() => onOpen('login')}>Login</button>
            <button className="nb" onClick={() => onOpen('register')}>Register</button>
          </>
        )}
      </div>
    </nav>
  )
}
