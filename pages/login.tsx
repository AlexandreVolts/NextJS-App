import { useState } from "react";
import { signIn } from "next-auth/client"
import Layout from "../components/layout";
import LoginForm from "../components/login-form";
import { Credentials } from "../types/Credentials";
import VerificationCodeForm from "../components/verification-code-form";

export default function Login()
{
  const [hasStartedVerification, setHasStartedVerification] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const startVerification = async (credentials: Credentials) => {
    await fetch("/api/start-verification", {
      method: "POST", 
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" },
    });
    setCredentials(credentials);
    setHasStartedVerification(true);
  };
  const checkVerification = async (verificationCode: string) => {
    await signIn("credentials", { ...credentials, verificationCode })
  };
  const DisplayedForm = () => {
    if (!hasStartedVerification) {
      return (<LoginForm onSubmit={startVerification} />);
    }
    return (<VerificationCodeForm onSubmit={checkVerification}/>);
  };

  return (
    <Layout>
      <DisplayedForm />
    </Layout>
  );
}