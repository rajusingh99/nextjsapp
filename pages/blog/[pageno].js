import {useRouter} from "next/router";
import Navbar from "../Components/Navbar";

export const  getStaticPaths = async() =>{

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curEle)=>{
        return{
            params : {
                pageno : curEle.id.toString(),
            },
        }
    });
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async(context) =>{
    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
  
    return {
      props : {
        data,
      },
    }
  }

const pageno =({data}) =>
{
    const router = useRouter();
    const pageNumber = router.query.pageno;
    return (
        <> 
            <Navbar/>
            <div key={data.id} style= {{marginLeft: "400px"}} className="ssr-styles ssr-styles-inside" >
               <h3 style={{color: "red"}}>{data.id}</h3>
              
                    <h2 style={{color: "blue"}}>{data.title}</h2>
                
               <h4 style={{color: "black"}}>{data.body}</h4> <br></br>
            </div>
           {/* <h2> my {pageNumber} content </h2> */}
     </>
    );
};
export default pageno;