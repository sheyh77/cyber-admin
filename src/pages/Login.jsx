import React, { useState } from "react";
import { Input, Button, message, Card } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      message.warning("Iltimos, login va parolni to‘ldiring");
      return;
    }

    // Oddiy frontend tekshiruvi
    if (username === "admin" && password === "1234") {
      message.success("Kirish muvaffaqiyatli!");
      navigate("/main"); // MainLayout sahifasiga o'tkazadi
    } else {
      message.error("Login yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <Card title="Login" style={{ width: 300 }}>
        <Input
          placeholder="Login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <Input.Password
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 10 }}
        />
        <Button type="primary" block onClick={handleLogin}>
          Kirish
        </Button>
      </Card>
    </div>
  );
};

export default Login;
