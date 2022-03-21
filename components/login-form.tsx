import { useState } from "react";
import { Credentials } from "../types/Credentials";
import Form from "./form";
import Input from "./input";

interface LoginFormProps
{
  onSubmit: (e: Credentials) => void;
}

export default function LoginForm(props: LoginFormProps)
{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form onSubmit={() => props.onSubmit({username, password})}>
      <Input label="Username" name="username" onChange={setUsername} />
      <Input label="Password" name="password" type="password" onChange={setPassword} />
    </Form>
  );
}