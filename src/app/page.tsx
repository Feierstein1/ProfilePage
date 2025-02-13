// profile.tsx
import React from 'react';
import Profile from '../components/Profile'
import DictionarySearch from '../components/DictionarySearch'

const Home = () => {
  return (
    <div className="flex flex-col items-center p-4 space-y-6">
        <Profile/>
        <DictionarySearch />
    </div>
  );
};



export default Home;
