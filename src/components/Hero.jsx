import { useEffect, useRef } from 'react'
import her1 from '../assets/her1.png'
import her2 from '../assets/her2.png'
import her3 from '../assets/her3.png'

function Hero({ isBirthday }) {
  const mainImageRef = useRef(null)

  useEffect(() => {
    if (isBirthday && mainImageRef.current) {
      // Add extra celebration animation on birthday
      mainImageRef.current.classList.add('celebrate')
    }
  }, [isBirthday])

  return (
    <section className="hero">
      <div className="hero-background"></div>
      
      {/* Crayon doodles */}
      <div className="doodle doodle-heart-1">💖</div>
      <div className="doodle doodle-heart-2">💕</div>
      <div className="doodle doodle-star-1">⭐</div>
      <div className="doodle doodle-star-2">✨</div>
      <div className="doodle doodle-swirl-1"></div>
      <div className="doodle doodle-swirl-2"></div>

      {/* Handwritten title */}
      <h1 className="hero-title">For My Beautiful & Cute Urvashi 💝</h1>

      {/* Main collage */}
      <div className="hero-collage">
        <div className="collage-image-wrapper main-image" ref={mainImageRef}>
          <img src={her1} alt="Urvashi" className="collage-img main-img" />
          <div className="image-shadow"></div>
        </div>
        
        <div className="collage-image-wrapper support-image-1">
          <img src={her2} alt="Urvashi" className="collage-img support-img" />
          <div className="image-shadow"></div>
        </div>
        
        <div className="collage-image-wrapper support-image-2">
          <img src={her3} alt="Urvashi" className="collage-img support-img" />
          <div className="image-shadow"></div>
        </div>
      </div>

      {/* Handwritten caption */}
      <p className="hero-caption">You're the cutest and you light up my world every single day ✨</p>
    </section>
  )
}

export default Hero

