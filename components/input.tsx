import { ChangeEvent, useState } from "react";

interface InputProps
{
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange: (v: string) => void;
}

export default function Input(props: InputProps)
{
  const [value, setValue] = useState(props.value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    props.onChange(value);
  };

  return (
    <label>
      {props.label}
      <input 
        type={props.type || "text"}
        name={props.name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}