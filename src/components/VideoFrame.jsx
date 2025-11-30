import { useState, useRef } from 'react'
import videoSrc from '../assets/video.mp4'

function VideoFrame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showMessage, setShowMessage] = useState(true)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      setShowMessage(false)
      // Small delay to allow message to fade out
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play()
          setIsPlaying(true)
        }
      }, 300)
    }
  }

  const handlePause = () => {
    setIsPlaying(false)
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

        {/* Video element - hidden until message is clicked */}
        <video
          ref={videoRef}
          src={videoSrc}
          className={`birthday-video ${showMessage ? 'video-hidden' : 'video-visible'}`}
          playsInline
          onPause={handlePause}
          onEnded={handlePause}
          controls={isPlaying}
          preload="none"
        />

        {/* Message overlay - shown before video plays */}
        {showMessage && (
          <div className="video-message-overlay">
            <div className="video-message-content">
              <div className="video-message-heart">💝</div>
              <div className="video-message-text">
                A special message for you, my cutie! 💕
              </div>
              <button 
                className="video-play-button"
                onClick={handlePlay}
                aria-label="Play video"
              >
                <span className="play-icon">▶</span>
                <span className="play-text">Watch Message</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default VideoFrame

