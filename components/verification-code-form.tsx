import { useState } from "react";
import Form from "./form";
import Input from "./input";

interface VerificationCodeFormProps
{
  onSubmit: (e: string) => void;
}

export default function VerificationCodeForm(props: VerificationCodeFormProps)
{
  const [verificationCode, setVerificatiobCode] = useState("");

  return (
    <Form onSubmit={() => props.onSubmit(verificationCode)}>
      <Input
        label="Verification Code"
        name="verification-code"
        onChange={setVerificatiobCode}
      />
    </Form>
  );
}