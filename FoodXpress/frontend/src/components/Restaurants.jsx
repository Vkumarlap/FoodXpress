import { RESTAURANTS } from '../data.js'

export default function Restaurants({ onPick }) {
  return (
    <section className="s">
      <h2>Top restaurants near you</h2>
      <div className="grid">
        {RESTAURANTS.map(([name, cuisines, rating, time, color, emoji, offer]) => (
          <button className="rest" key={name} onClick={onPick}>
            <div className="pic" style={{ background: `linear-gradient(135deg, ${color}, ${color}aa)` }}>
              {emoji}
              <span className="off">{offer}</span>
            </div>
            <h3>{name}</h3>
            <div className="m"><b>★ {rating}</b> · {time}</div>
            <div className="m">{cuisines}</div>
          </button>
        ))}
      </div>
    </section>
  )
}
