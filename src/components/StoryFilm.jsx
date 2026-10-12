import { useEffect, useRef, useState } from 'react'

const SCENES = [
  {
    title: 'Book in the app',
    text: 'Choose hospital, doctor, or diagnostic assistance.',
  },
  {
    title: 'A Care Assistant arrives',
    text: 'They meet your loved one at the facility.',
  },
  {
    title: 'You stay connected',
    text: 'Someone is there when you cannot be.',
  },
]

const SCENE_MS = 4600

export default function StoryFilm() {
  const [scene, setScene] = useState(0)
  const [playing, setPlaying] = useState(true)
  const barRef = useRef(null)
  const sceneRef = useRef(0)
  const elapsedRef = useRef(0)
  const startedRef = useRef(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) {
      setPlaying(false)
    }
  }, [])

  useEffect(() => {
    if (!playing) {
      return undefined
    }

    startedRef.current = performance.now()

    const tick = () => {
      const elapsed = elapsedRef.current + (performance.now() - startedRef.current)
      const index = Math.floor(elapsed / SCENE_MS) % SCENES.length
      const progress = (elapsed % SCENE_MS) / SCENE_MS
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
      if (index !== sceneRef.current) {
        sceneRef.current = index
        setScene(index)
      }
    }

    const timer = window.setInterval(tick, 80)
    tick()
    return () => window.clearInterval(timer)
  }, [playing])

  const toggle = () => {
    if (playing) {
      elapsedRef.current += performance.now() - startedRef.current
    }
    setPlaying((current) => !current)
  }

  const current = SCENES[scene]

  return (
    <figure className={`film scene-${scene}`}>
      <div className="film-stage">
        <svg viewBox="0 0 560 320" role="img" aria-labelledby="film-title film-text">
          <rect width="560" height="320" fill="#f7f1e8" />
          <circle className="sun" cx="486" cy="52" r="18" />
          <path className="ground" d="M28 262h504" />

          <g className="hospital">
            <rect x="404" y="86" width="112" height="176" rx="12" />
            <rect className="window" x="438" y="108" width="44" height="30" rx="4" />
            <path className="cross" d="M456 114h8v6h6v8h-6v6h-8v-6h-6v-8h6z" />
            <rect className="door" x="436" y="206" width="48" height="56" rx="8" />
          </g>

          <g className="loved">
            <circle cx="348" cy="164" r="16" />
            <rect x="330" y="184" width="36" height="78" rx="16" />
          </g>

          <g className="walker">
            <circle cx="0" cy="0" r="16" />
            <rect x="-18" y="20" width="36" height="58" rx="14" />
            <path className="leg leg-a" d="M-8 76 v22" />
            <path className="leg leg-b" d="M8 76 v22" />
          </g>

          <g className="phone">
            <rect x="48" y="78" width="108" height="176" rx="18" />
            <rect className="screen" x="58" y="96" width="88" height="128" rx="10" />
            <text x="102" y="128">Carefinger</text>
            <rect className="chip" x="70" y="146" width="64" height="14" rx="7" />
            <rect className="chip chip-short" x="70" y="168" width="46" height="14" rx="7" />
            <rect className="book" x="70" y="194" width="64" height="18" rx="9" />
          </g>

          <path className="signal" d="M150 150 C 230 70, 300 70, 348 160" />
        </svg>
        <figcaption>
          <strong id="film-title">{current.title}</strong>
          <span id="film-text">{current.text}</span>
        </figcaption>
      </div>
      <div className="film-controls">
        <button type="button" onClick={toggle} aria-pressed={playing}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <div className="film-track" aria-hidden="true">
          <span ref={barRef} />
        </div>
        <span className="film-count">
          {scene + 1} / {SCENES.length}
        </span>
      </div>
    </figure>
  )
}
