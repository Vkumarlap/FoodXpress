const DOTS = [
  [200, 150, 22, '#C8321E'], [260, 130, 18, '#F6B41A'], [310, 160, 24, '#7FB069'], [170, 190, 16, '#F6B41A'],
  [350, 205, 18, '#C8321E'], [240, 185, 26, '#FFF4CC'], [290, 215, 16, '#12392A'], [215, 225, 14, '#7FB069'],
]

export default function Bowl() {
  return (
    <svg className="bowl" viewBox="0 0 520 420" aria-hidden="true">
      <ellipse cx="260" cy="392" rx="210" ry="18" fill="rgba(43,27,0,.18)" />
      <path d="M40 190 Q260 130 480 190 Q470 340 260 380 Q50 340 40 190Z" fill="#12392A" />
      <ellipse cx="260" cy="185" rx="220" ry="62" fill="#0C2A1E" />
      <ellipse cx="260" cy="180" rx="200" ry="52" fill="#E88A1A" />
      {DOTS.map(([cx, cy, r, fill], i) => (
        <circle key={i} cx={cx} cy={cy + 40} r={r} fill={fill} />
      ))}
      <path
        d="M230 110 q-14-24 0-44 M270 100 q-14-24 0-44 M310 110 q-14-24 0-44"
        stroke="rgba(43,27,0,.35)" strokeWidth="5" fill="none" strokeLinecap="round"
      />
    </svg>
  )
}
