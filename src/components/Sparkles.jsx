import { useEffect, useState } from 'react'

function Sparkles() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Create sparkle particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      size: 4 + Math.random() * 6,
      type: Math.random() > 0.5 ? 'heart' : 'star'
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="sparkles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`sparkle-particle sparkle-${particle.type}`}
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        >
          {particle.type === 'heart' ? '💖' : '✨'}
        </div>
      ))}
    </div>
  )
}

export default Sparkles

