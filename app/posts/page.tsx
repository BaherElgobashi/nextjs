"use client";

import { useState, useEffect } from "react";

export default function posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Baher's Posts Dashboard
          </h1>
          <p className="mt-4 text-zinc-400 text-lg">
            إجمالي عدد البوستات المعروضة:{" "}
            <span className="text-indigo-400 font-bold">{posts.length}</span>
          </p>
        </div>

        {/* Grid Container (Responsive & Animated Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-zinc-900/80 border border-zinc-800/80 p-6 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
            >
              {/* Decorative gradient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Post #{post.id}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors duration-200 line-clamp-1 mb-3">
                  {post.title}
                </h2>

                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                  {post.body}
                </p>
              </div>

              {/* Card Footer Action Link */}
              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  Client-side Rendered
                </span>
                <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform duration-200 flex items-center gap-1">
                  قراءة المزيد &larr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
