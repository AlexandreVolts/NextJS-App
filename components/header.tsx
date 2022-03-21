import Image from "next/image";
import Link from "next/link";
import { name } from "./layout";

export default function Header()
{
  return (
    <header>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/profile.jpg"
            height={108}
            width={108}
            alt={name}
          />
        </a>
      </Link>
      <h2>
        <Link href="/">
          <a>{name}</a>
        </Link>
      </h2>
    </header>
  );
}