import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1736773357/carbhigh_ud0l8k.png"
            alt="Alpha Intelligence Logo"
            width={70}
            height={30}
            className="text-white"
          />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="/features"
          className="text-white hover:text-primary transition-colors"
        >
          Features
        </Link>
        <Link
          href="/agents"
          className="text-white hover:text-primary transition-colors"
        >
          Agents
        </Link>
        <Link
          href="/docs"
          className="text-white hover:text-primary transition-colors"
        >
          Docs
        </Link>
      </nav>
    </header>
  );
};
