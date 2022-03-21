import { Credentials } from "./Credentials";

export interface User extends Credentials
{
  phoneNumber: string;
}