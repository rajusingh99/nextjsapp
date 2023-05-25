

import React from 'react'
import Image from 'next/image';

import Link from 'next/link';
import Navbar from '../Components/Navbar';

export default function About(){
  return (
    <>
 
    <div style={{textAlign:"center"}}>
       <Navbar/>
      <h1>About Us</h1>
      <Image src="/about.jpg" width ="500" height="300" alt= "aboutImage">
      </Image>
    </div>

    {/* <nav>
        <ul>
        <Link href="/">
            <div> Go to Main page </div>       
          </Link> 
        </ul>
    </nav> */}

    </>
  );
}

 