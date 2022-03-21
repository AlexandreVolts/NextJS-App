import { useState } from "react";
import { signIn } from "next-auth/client"
import Layout from "../components/layout";
import { User } from "../types/User";

export default function Login()
{
  const [hasStartedVerification, setHasStartedVerification] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const startVerification = async (user: User) => {
    await fetch("/api/start-verification", {
      method: "POST", 
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    setCredentials({ username: user.username, password: user.password });
    setHasStartedVerification(true);
  };
  const checkVerification = async ({ verificationCode }) => {
    await signIn("credentials", { ...credentials, verificationCode })
  };

  return (
    <Layout>
      
    </Layout>
  );
}