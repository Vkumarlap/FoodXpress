import { useState } from 'react'

export default function Field({ id, label, type = 'text', value, onChange, error, auto, placeholder }) {
  const [show, setShow] = useState(false)
  const isPw = type === 'password'

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className={isPw ? 'pw' : ''}>
        <input
          className="f"
          id={id}
          type={isPw && show ? 'text' : type}
          value={value}
          autoComplete={auto}
          placeholder={placeholder}
          aria-invalid={!!error}
          onChange={(e) => onChange(e.target.value)}
        />
        {isPw && (
          <button type="button" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        )}
      </div>
      {error && <p className="err">{error}</p>}
    </div>
  )
}
