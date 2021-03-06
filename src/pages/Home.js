import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRoooms'




function Home () {
  return (
    <>
    <Hero>
      <Banner title="Hotel Massawa" subtitle ="starting only at $299">
        <Link to = "/rooms" className="btn-primary">Our Rooms</Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms/>
    </>
  );
}

export default Home;