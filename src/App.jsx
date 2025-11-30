import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Messages from './components/Messages'
import FunSection from './components/FunSection'
import VideoFrame from './components/VideoFrame'
import Sparkles from './components/Sparkles'

// CONFIGURATION: Birthday date - January 2nd, IST
// To represent January 2nd 00:00 IST, we use January 1st 18:30 UTC (IST is UTC+5:30)
// Format: Year, Month (0-indexed, so 0 = January), Day, Hour, Minute
const BIRTHDAY_MONTH = 0 // January (0-indexed)
const BIRTHDAY_DAY = 2
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000 // IST is UTC+5:30 in milliseconds

function App() {
  const [isBirthday, setIsBirthday] = useState(false)

  useEffect(() => {
    const checkBirthday = () => {
      const now = new Date()
      // Convert current time to IST
      const nowIST = new Date(now.getTime() + IST_OFFSET_MS)
      
      // Get IST date components
      const currentYear = nowIST.getUTCFullYear()
      const currentMonth = nowIST.getUTCMonth()
      const currentDay = nowIST.getUTCDate()
      
      // Check if it's the birthday (January 2nd in IST)
      const isToday = currentMonth === BIRTHDAY_MONTH && currentDay === BIRTHDAY_DAY
      
      setIsBirthday(isToday)
    }

    checkBirthday()
    const interval = setInterval(checkBirthday, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      {isBirthday && <Sparkles />}
      <Hero isBirthday={isBirthday} />
      <Countdown 
        birthdayMonth={BIRTHDAY_MONTH}
        birthdayDay={BIRTHDAY_DAY}
        onBirthday={() => setIsBirthday(true)}
      />
      <Messages />
      <FunSection />
      <VideoFrame />
    </div>
  )
}

export default App

