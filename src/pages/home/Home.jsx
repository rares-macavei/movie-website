import React from 'react';
import "./style.scss";
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
import Upcoming from './upcoming/Upcoming';
import OnAir from './onAir/OnAir';


const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <Upcoming />
      <OnAir />
      <div style={{ height: 1000 }}></div>
    </div>
  )
}

export default Home