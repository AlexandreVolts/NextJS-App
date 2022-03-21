import { User } from "../types/User";

export async function getUser(username: string, password: string): Promise<User|undefined>
{
  // This function should be replaced with some back-end logic
  // And should stay as it is.
  if (username === "admin" && password === "password123") {
    return {
      username: "John Doe",
      phoneNumber: process.env.PHONE_NUMBER,
    }
  }
  return undefined;
}