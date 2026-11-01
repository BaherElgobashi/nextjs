import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-zinc-900 border-b border-zinc-800 py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold text-white">
        My<span className="text-blue-500">App</span>
      </div>

      <div className="flex gap-6">
        <Link
          href="/"
          className="text-zinc-300 hover:text-blue-400 transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-zinc-300 hover:text-blue-400 transition-colors font-medium"
        >
          About Us
        </Link>
        <Link
          href="/privacy"
          className="text-zinc-300 hover:text-blue-400 transition-colors font-medium"
        >
          Privacy
        </Link>
      </div>
    </nav>
  );
}
