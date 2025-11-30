import { useState, useEffect } from 'react'

// IST offset: UTC+5:30
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000

function Countdown({ birthdayMonth, birthdayDay, onBirthday }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isBirthday, setIsBirthday] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      // Convert current time to IST
      const nowIST = new Date(now.getTime() + IST_OFFSET_MS)
      
      // Get current IST date components
      const currentYear = nowIST.getUTCFullYear()
      const currentMonth = nowIST.getUTCMonth()
      const currentDay = nowIST.getUTCDate()
      
      // Create target birthday date in IST (January 2nd, 00:00 IST)
      // January 2nd 00:00 IST = January 1st 18:30 UTC
      let targetYear = currentYear
      let targetDate = new Date(Date.UTC(targetYear, birthdayMonth, birthdayDay - 1, 18, 30, 0))
      
      // If birthday has passed this year, set to next year
      if (targetDate.getTime() < nowIST.getTime()) {
        targetYear = currentYear + 1
        targetDate = new Date(Date.UTC(targetYear, birthdayMonth, birthdayDay - 1, 18, 30, 0))
      }

      const difference = targetDate.getTime() - nowIST.getTime()

      if (difference <= 0) {
        setIsBirthday(true)
        onBirthday()
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [birthdayMonth, birthdayDay, onBirthday])

  if (isBirthday) {
    return (
      <section className="countdown-section">
        <div className="countdown-container birthday-message">
          <div className="birthday-text">🎉 Happy Birthday Urvashi!! 🎀💖</div>
          <div className="birthday-subtext">You're the cutest and most amazing person in the world!</div>
        </div>
        <div className="countdown-doodle doodle-arrow-1">👉</div>
        <div className="countdown-doodle doodle-arrow-2">👈</div>
      </section>
    )
  }

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <div className="countdown-label">Time until Urvashi's Birthday</div>
        <div className="countdown-timer">
          <div className="time-unit">
            <div className="time-value pulse">{timeLeft.days}</div>
            <div className="time-label">Days</div>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <div className="time-value pulse">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="time-label">Hours</div>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <div className="time-value pulse">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="time-label">Minutes</div>
          </div>
          <div className="time-separator">:</div>
          <div className="time-unit">
            <div className="time-value pulse">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="time-label">Seconds</div>
          </div>
        </div>
      </div>
      <div className="countdown-doodle doodle-arrow-1">👉 Look here! 👉</div>
      <div className="countdown-doodle doodle-arrow-2">👈 So exciting! 👈</div>
    </section>
  )
}

export default Countdown

