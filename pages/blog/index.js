import React from 'react'
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import style from "../../styles/blog.module.css"
import Image from 'next/image';



export const getStaticProps = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props : {
      data,
    },
  }
}


const index = ({data}) => {
  return (
    <>
       <Navbar/>
       {data.slice(0,100).map((curEle)=>{
          return (
            <div key={curEle.id} style= {{marginLeft: "400px"}} >
               <h3 style={{color: "red"}}>{curEle.id}</h3>
                <Link href= {`/blog/${curEle.id}`}>
                    <h2 style={{color: "blue"}}>{curEle.title}</h2>
                 </Link>
            </div>
          )
       }
       )}

      {/* <div style={{textAlign:"center"}}>
          <Navbar />
          <h2 className={`${style.blog}`}>This is blog page</h2>
          <h4 className="blog"> Global css used</h4>
      </div> */}
    

    </>
  );
}

 export default index;