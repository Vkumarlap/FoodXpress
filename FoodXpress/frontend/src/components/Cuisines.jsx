import { CUISINES } from '../data.js'

export default function Cuisines({ onPick }) {
  return (
    <section className="s">
      <h2>What's on your mind?</h2>
      <div className="cuis">
        {CUISINES.map(([emoji, name]) => (
          <button className="cu" key={name} onClick={onPick}>
            <span>{emoji}</span>
            {name}
          </button>
        ))}
      </div>
    </section>
  )
}
