import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import "./contact.css";

const client = generateClient();

export default function ContactPage() {
  const [msg, setMsg] = useState("");
  type Message = { id: string; content: string };
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const result = await (client as any).models.Todo.list();
        setMessages(result.data);
      } catch (err) {
        console.error("Error loading messages:", err);
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  const handleSend = async () => {
    if (!msg.trim()) return;

    try {
      const newMessage = await (client as any).models.Todo.create({
        content: msg,
      });

      setMessages((prev) => [...prev, newMessage.data]);
      setMsg("");
    } catch (err) {
      console.error("Error creating message:", err);
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>Send us a message or reach us directly via WhatsApp or call.</p>

      <div className="contact-form">
        <textarea
          placeholder="Write your message here..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>

        <button onClick={handleSend}>Send</button>
      </div>

      <div className="contact-options">
        <a
          href="https://wa.me/97455708226"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          WhatsApp
        </a>

        <a href="tel:+974XXXXXXXX" className="call-btn">
          Call Us
        </a>
      </div>

      <div className="chat-box">
        <h3>Messages</h3>

        {loading && <p>Loading messages...</p>}

        {!loading && messages.length === 0 && <p>No messages yet.</p>}

        {messages.map((m) => (
          <div key={m.id} className="chat-message">
            {m.content}
          </div>
        ))}
      </div>
    </div>
  );
}
