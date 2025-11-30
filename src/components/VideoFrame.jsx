import { useState, useRef } from 'react'
import videoSrc from '../assets/video.mp4'

function VideoFrame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      setShowPlayButton(false)
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
    setShowPlayButton(true)
  }

  return (
    <section className="video-section">
      <div className="video-wrapper">
        {/* Doodle frame elements */}
        <div className="video-frame-tape tape-1"></div>
        <div className="video-frame-tape tape-2"></div>
        <div className="video-frame-tape tape-3"></div>
        <div className="video-frame-tape tape-4"></div>
        <div className="video-frame-decoration"></div>
        
        {/* Floating hearts */}
        <div className="floating-heart heart-1">💖</div>
        <div className="floating-heart heart-2">💕</div>
        <div className="floating-heart heart-3">💗</div>
        <div className="floating-heart heart-4">💝</div>
        <div className="floating-heart heart-5">💞</div>
        <div className="floating-heart heart-6">💓</div>

        {/* Video element */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="birthday-video"
          playsInline
          onPause={handlePause}
          onEnded={handlePause}
          controls={isPlaying}
        />

        {/* Custom play button overlay */}
        {showPlayButton && (
          <button 
            className="video-play-button"
            onClick={handlePlay}
            aria-label="Play video"
          >
            <span className="play-icon">▶</span>
            <span className="play-text">Watch</span>
          </button>
        )}
      </div>
    </section>
  )
}

export default VideoFrame

