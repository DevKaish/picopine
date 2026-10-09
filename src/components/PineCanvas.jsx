import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../data.js'

// Digital-pine hero: a branching structure grows from particles,
// then light pulses travel along the branches.
// `contentRef` is the text block; on mobile the tree is drawn above it.
const SPEED = 1.6 // overall animation speed, tune to taste

function buildTree() {
  const sg = []
  const br = (x1, y1, a, l, d, t0, p) => {
    sg.push({ x1, y1, x2: x1 + Math.sin(a) * l, y2: y1 - Math.cos(a) * l, d, t0, p })
    return sg.length - 1
  }
  let tp = -1
  for (let i = 0; i < 10; i++) {
    const y = i * 0.085
    const id = br(0, -y, 0, 0.085, 0, i * 0.28, tp)
    tp = id
    if (i > 0) {
      ;[-1, 1].forEach((s) => {
        const a = s * (1.15 - i * 0.07), L = (1 - i / 11) * 0.36
        const b = br(0, -y, a, L, 1, i * 0.28 + 0.3, id)
        for (let k = 1; k <= 3; k++)
          [-1, 1].forEach((z) =>
            br(sg[b].x1 + ((sg[b].x2 - sg[b].x1) * k) / 3, sg[b].y1 + ((sg[b].y2 - sg[b].y1) * k) / 3,
              a + z * 0.75, L * 0.32, 2, i * 0.28 + 0.6 + k * 0.1, b)
          )
      })
    }
  }
  return sg
}

export default function PineCanvas({ contentRef }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const c = canvasRef.current
    const x = c.getContext('2d')
    const RM = prefersReducedMotion()
    const sg = buildTree()
    const leaves = sg.map((_, i) => i).filter((i) => sg[i].d === 2)
    let W, H, dpr, dust = [], pulses = []
    let vis = true, alive = true, raf = 0
    let mx = 0, my = 0, T = 0, last = 0

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = c.clientWidth; H = c.clientHeight
      c.width = W * dpr; c.height = H * dpr
      const n = W < 700 ? 50 : 110
      dust = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3, v: Math.random() * 0.15 + 0.03, z: Math.random(),
      }))
      if (RM) draw(0)
    }
    const onMove = (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5 }
    const pos = (s, k) => [s.x1 + (s.x2 - s.x1) * k, s.y1 + (s.y2 - s.y1) * k]

    function draw(t) {
      const dt = Math.min((t - last) / 1000, 0.05) * SPEED
      last = t
      T += RM ? 99 : dt
      x.setTransform(dpr, 0, 0, dpr, 0, 0)
      x.clearRect(0, 0, W, H)

      dust.forEach((p) => {
        p.y -= p.v
        if (p.y < 0) p.y = H
        const o = Math.min(T / 1.2, 1) * (0.25 + p.z * 0.5)
        x.fillStyle = p.z > 0.65 ? `rgba(167,139,250,${o * 0.85})` : `rgba(45,226,196,${o * 0.7})`
        x.beginPath(); x.arc(p.x + mx * 30 * p.z, p.y + my * 20 * p.z, p.r, 0, 6.3); x.fill()
      })

      const mob = W < 860
      const tb = (contentRef.current ? contentRef.current.offsetTop : H * 0.6) - 14
      const S = mob ? Math.max(Math.min(W * 1.05, (tb - 80) / 0.9), 120) : Math.min(H * 0.78, W * 0.62)
      const ox = (mob ? W * 0.5 : W * 0.72) + mx * -24
      const oy = mob ? tb : H * 0.93 + my * -12
      const P = (px, py) => [ox + px * S, oy + py * S]

      const g = x.createRadialGradient(ox, oy - S * 0.45, 10, ox, oy - S * 0.45, S * 0.7)
      g.addColorStop(0, 'rgba(45,226,196,.13)'); g.addColorStop(1, 'rgba(45,226,196,0)')
      x.fillStyle = g; x.fillRect(0, 0, W, H)

      x.lineCap = 'round'
      const tt = Math.max(T - 0.7, 0)
      sg.forEach((s) => {
        const k = Math.min(Math.max((tt - s.t0) / 0.7, 0), 1)
        if (!k) return
        const [a, b] = P(s.x1, s.y1), [c2, d2] = P(...pos(s, k))
        x.strokeStyle = s.d === 1 ? 'rgba(167,139,250,.8)' : `rgba(45,226,196,${0.9 - s.d * 0.22})`
        x.lineWidth = 2.6 - s.d * 0.9
        x.beginPath(); x.moveTo(a, b); x.lineTo(c2, d2); x.stroke()
        if (k === 1 && s.d > 0) {
          const [e, f] = P(s.x2, s.y2)
          x.fillStyle = s.d === 2 ? '#2DE2C4' : '#7C4DFF'
          x.globalAlpha = 0.6 + 0.4 * Math.sin(T * 2 + s.x2 * 9)
          x.beginPath(); x.arc(e, f, s.d === 2 ? 2.4 : 3.2, 0, 6.3); x.fill()
          x.globalAlpha = 1
        }
      })

      // glowing core with a P monogram
      const [cx, cy] = P(0, -0.02)
      const cr = S * 0.06, pu = 1 + 0.06 * Math.sin(T * 2)
      x.strokeStyle = '#2DE2C4'; x.fillStyle = 'rgba(15,74,58,.9)'
      x.shadowColor = '#2DE2C4'; x.shadowBlur = 24; x.lineWidth = 2
      x.beginPath(); x.arc(cx, cy, cr * pu, 0, 6.3); x.fill(); x.stroke(); x.shadowBlur = 0
      x.strokeStyle = '#F2F1EC'; x.lineWidth = 2.4
      x.beginPath(); x.moveTo(cx - cr * 0.28, cy + cr * 0.5); x.lineTo(cx - cr * 0.28, cy - cr * 0.5)
      x.arc(cx + cr * 0.02, cy - cr * 0.2, cr * 0.3, -Math.PI / 2, Math.PI / 2)
      x.lineTo(cx - cr * 0.28, cy + cr * 0.1); x.stroke()

      // light pulses travelling root -> leaf
      if (!RM && T > 4 && pulses.length < 9 && Math.random() < 0.06) {
        const chain = []
        let i = leaves[(Math.random() * leaves.length) | 0]
        while (i >= 0) { chain.unshift(i); i = sg[i].p }
        pulses.push({ chain, k: 0, v: 1.6 + Math.random() })
      }
      pulses = pulses.filter((p) => {
        p.k += dt * p.v
        if (p.k >= p.chain.length) return false
        const s = sg[p.chain[p.k | 0]], [a, b] = P(...pos(s, p.k % 1))
        x.fillStyle = '#F2F1EC'; x.shadowColor = '#A78BFA'; x.shadowBlur = 14
        x.beginPath(); x.arc(a, b, 2.4, 0, 6.3); x.fill(); x.shadowBlur = 0
        return true
      })
    }

    const loop = (t) => {
      raf = 0
      if (!vis || !alive) return
      draw(t)
      if (!RM) raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (raf || !alive) return
      last = performance.now()
      raf = requestAnimationFrame(loop)
    }

    // only animate while the hero is on screen
    const io = new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis) start() })
    io.observe(c)
    resize(); start()
    window.addEventListener('resize', resize)
    window.addEventListener('load', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      alive = false
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('load', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [contentRef])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
