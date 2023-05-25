import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

import Link from 'next/link';
export default function ErrorPage() {
    const router = useRouter();
    const handleInput = ()=>
    {
        router.push("/");
    }
    useEffect(() => {
        setTimeout(()=>{
            router.push("/");
        },3000)
    }, [])
    
  return (
    <>
        <div id = "notfound">
           <div className='notfound'>
              <div className="notfound-404">
                <h1>404</h1>
              </div>
              <h2> we are sorry, page not Found!</h2>
              <p>
                The page you are looking for might have been removed had its name changed temporarliy unavailabel.
              </p>
              {/* <Link href= "/">Back to Main page</Link> */}
              {/* <a href='/'>Go to Main page</a> */}
              {/* <a onClick={()=> router.push("/")}>Back to Home Page</a> */}
                {/* <a onClick={handleInput} >Back to main page</a> */}

           </div>

        </div>
    </>
  );
};
