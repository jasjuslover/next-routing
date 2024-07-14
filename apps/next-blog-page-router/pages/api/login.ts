import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  // Simulasi validasi login
  if (username === "user" && password === "pass") {
    const token = "dummy-token"; // Dalam aplikasi nyata, gunakan JWT atau token aman lainnya

    res.setHeader(
      "Set-Cookie",
      serialize("token", token, { path: "/", httpOnly: true })
    );
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
