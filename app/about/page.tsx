import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center p-50 bg-zinc-950">
      <h1 className="text-5xl font-extrabold text-blue-500 tracking-wider">
        Baher
      </h1>
      <div className="p-50 m-20">
        <Link href="/privacy">
          <button className="text-4xl text-red-500">About Page</button>
        </Link>
      </div>
    </main>
  );
}
