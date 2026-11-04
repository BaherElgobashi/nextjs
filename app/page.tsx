"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-zinc-950 text-white">
        <p className="text-lg animate-pulse text-zinc-400">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-zinc-950 px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {posts.slice(0, 9).map((post) => (
          <div
            key={post.id}
            className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl text-white flex flex-col justify-between shadow-lg"
          >
            <div>
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
                Post #{post.id}
              </span>
              <h2 className="text-xl font-bold line-clamp-1 mt-1">
                {post.title}
              </h2>
              <p className="text-zinc-400 mt-2 text-sm line-clamp-3">
                {post.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
