import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      alert("Login failed");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl font-semibold">Login Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-black text-white rounded py-1">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
