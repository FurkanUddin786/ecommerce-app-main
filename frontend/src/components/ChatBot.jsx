import { useState } from "react";

const responses = {
  "return policy": "You can return products within 7 days of delivery.",
  "delivery time": "Delivery usually takes 3-5 business days.",
  cod: "Yes, Cash on Delivery is available.",
  "track order": "You can track your order from your profile section.",
};

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input) return;

    const userMessage = { text: input, sender: "user" };

    const botReply = Object.keys(responses).find((key) =>
      input.toLowerCase().includes(key),
    );

    const botMessage = {
      text: botReply ? responses[botReply] : "Sorry, I didn't understand that.",
      sender: "bot",
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
