"use client"

import Profile from "./Profile"
import Blog from "../blog/Blog"

export default function Home() {

  return (
    <div className="pt-20 bg-vaporwave-gradient">
      <div id="container" className="flex pt-5 flex-col w-full max-w-4xl mx-auto">
        <Profile />
      </div>
    </div>
  );
}

