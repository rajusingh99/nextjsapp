import React from 'react'
import Link from 'next/link';
import Navbar from '../Components/Navbar';

export default function Home() {
  return (
    <>
    
      <div style={{textAlign:"center"}}>
       <Navbar/>
       
        <h1 className='Home'>This is Home Page</h1>
        <p style={{color:"blue"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ex deleniti maiores pariatur commodi eveniet veritatis odio cum illum nulla.</p>
        <h3> This is styled jsx </h3>
        <style jsx>
          {
            `
            h3{
              color : pink;
            }`
          }
        </style>
      </div>

    
    </>
  );
}
