import Bowl from './Bowl.jsx'

export default function Hero({ onSearch }) {
  return (
    <div className="hero-in">
      <div>
        <h1>Hungry? Dinner is 30 minutes away.</h1>
        <p className="lead">Biryani, dosa, momos and more from kitchens you trust, delivered hot.</p>
        <div className="search">
          <input aria-label="Delivery address" placeholder="Enter your delivery address" />
          <input aria-label="Search food" placeholder="Search for a dish" />
          <button onClick={onSearch}>Find food</button>
        </div>
      </div>
      <Bowl />
    </div>
  )
}
