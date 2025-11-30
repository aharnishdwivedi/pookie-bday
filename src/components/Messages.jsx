// EDITABLE MESSAGES: Replace the messages array below with your own sweet notes for Urvashi
const MESSAGES = [
  {
    id: 1,
    text: "tu hasdi ae te duniya hor soni lagdi ae, mera dil tenu hi chahunda aa  💕",
    rotation: -2,
    color: 'pink'
  },
  {
    id: 2,
    text: "rab di meher lage jado tu mere naal boldi ae 💞",
    rotation: 3,
    color: 'purple'
  },
  {
    id: 3,
    text: "tu meri good morning v, tu hi meri goodnight v 💕",
    rotation: -1.5,
    color: 'pink'
  },
  {
    id: 4,
    text: "teri smile mere dil da personal charger aa 💞⚡",
    rotation: 2.5,
    color: 'purple'
  }
]

function Messages() {
  return (
    <section className="messages-section">
      <h2 className="messages-title">Sweet Messages for You 💝</h2>
      <div className="messages-grid">
        {MESSAGES.map((message) => (
          <div
            key={message.id}
            className={`message-card message-${message.color}`}
            style={{ transform: `rotate(${message.rotation}deg)` }}
          >
            <div className="message-content">{message.text}</div>
            <div className="message-tape tape-top-left"></div>
            <div className="message-tape tape-top-right"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Messages

