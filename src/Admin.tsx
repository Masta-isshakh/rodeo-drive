import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/data";
import { getCurrentUser } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import type { Schema } from "../amplify/data/resource";
import "./admin.css";   // <-- AJOUTER CECI

const client = generateClient<Schema>();

export default function AdminPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const u = await getCurrentUser().catch(() => null);

        if (!u) {
          nav("/login");
          return;
        }

        setUser(u);

        const list = await client.models.Todo.list();
        setMessages(list.data ?? []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const reply = async (id: string) => {
    const replyText = prompt("Write reply");
    if (!replyText) return;

    try {
      await client.models.Todo.update({ id, content: replyText });

      const list = await client.models.Todo.list();
      setMessages(list.data ?? []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin</h1>

      {!user ? (
        <p>Redirecting to login...</p>
      ) : (
        <div>
          {messages.map((m) => (
            <div key={m.id} className="admin-message">
              <div><strong>{m.content}</strong></div>
              <div className="admin-reply">Reply: {m.reply || "—"}</div>
              <button className="admin-btn" onClick={() => reply(m.id)}>Reply</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
