import Badges from '@/components/Badges';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HightlighItem from '@/components/HightlighItem';
import Nav from '@/components/Nav';
import React from 'react';

export default function page() {
  return (
    <>
    {/* <img src="/bg.png" alt="background image" className='w-screen h-auto max-h-screen object-cover'/>
    <h1>This is a simple test</h1> */}
    <Nav />
      <Hero/>
      <Featured/>
      <Featured/>
      <Badges/>
      <Footer/>
    </>
  );
}