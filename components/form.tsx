import { FormEvent } from "react";

interface FormProps
{
  children: React.ReactNode;
  title?: string;
  validateLabel?: string;
  onSubmit?: () => void;
}

export default function Form(props: FormProps)
{
  const onSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    props.onSubmit();
  };
  
  return (
    <form onSubmit={onSubmit}>
      {props.children}
      <input type="submit" value={props.validateLabel} />
    </form>
  );
}