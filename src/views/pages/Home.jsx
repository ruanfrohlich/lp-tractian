import React from 'react';
import MainHero from 'Sections/MainHero';
import OurClients from 'Sections/OurClients';
import Solutions from 'Sections/Solutions';
import Contact from 'Sections/Contact';

export default class Home extends React.Component {
  render() {
    return (
      <main className="site-main page-home">
        <MainHero/>
        <Solutions/>        
        <Contact/>
        <OurClients/>
      </main>
    );
  }
}