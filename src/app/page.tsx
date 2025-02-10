// profile.tsx
import React from 'react';
import Profile from '../components/Profile'

const Home = () => {
  return (
    <div className="flex flex-col items-center p-4 space-y-6">
        <Profile/>
        <ResumeLink/>
    </div>
  );
};

const ResumeLink = () => {
  return (
    <>
      <a
        href="/resume" className="inline-block px-6 py-3 mt-4 text-white bg-blue-600 rounded-full text-lg font-semibold transform transition duration-300 ease-in-out hover:bg-cyan-500 hover:scale-105 hover:text-white"
      >
        View Resume
      </a>
    </>
  )
}

export default Home;
