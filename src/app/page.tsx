// profile.tsx
import React from 'react';
import Profile from '../components/profile/Profile'

const Home = () => {
  return (
    <div className="flex flex-col mix-blend-overlay" style={{backgroundImage: "url('/city-background.jpg')"}}>
        <Profile/>
    </div>
  );
};



export default Home;
