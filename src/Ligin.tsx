import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <Authenticator>
        {({ signOut, user }) => (
          <main style={{ textAlign: "center" }}>
            <h2>Welcome, {user?.username}</h2>
            <button onClick={() => { signOut?.(); navigate("/"); }}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}
