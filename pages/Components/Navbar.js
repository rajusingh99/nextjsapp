
// import Link from "next/link";

// const Navbar= ()=>
// {
//     return (
        
// <nav className="navbar navbar-default">
// <div className="container-fluid">
//   <div className="navbar-header">
//     <button
//       type="button"
//       className="navbar-toggle collapsed"
//       data-toggle="collapse"
//       data-target="#bs-example-navbar-collapse-1"
//       aria-expanded="false"
//     >
//       <span className="sr-only">Toggle navigation</span>
//       <span className="icon-bar"></span>
//       <span className="icon-bar"></span>
//       <span className="icon-bar"></span>
//     </button>
  
//     <Link href = "/Home"  className="navbar-brand">
//       <div>Home</div>
//     </Link>
//   </div>
 
   
//     <Link href = "/blog"  className="navbar-brand">
//       <div>Blog</div>
//     </Link>

//     <Link href = "/About"  className="navbar-brand">
//       <div>About</div>
//     </Link>
//   </div>

// </nav>

//     );
// }
// export default Navbar;




import Link from "next/link";


const Navbar = () => {
  return (
   
      <nav className="navbar navbar-default">
      <div className="container-fluid" style={{textAlign: 'center'}} >
        <div className="navbar-header" >
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <Link href="/" className="navbar-brand">
            <div>Main</div>
          </Link>

          <Link href="/Home" className="navbar-brand">
            <div>Home</div>
          </Link>
      
        <Link href="/blog" className="navbar-brand" >
          <div>Blog</div>
        </Link>

        <Link href="/About" className="navbar-brand">
          <div>About</div>
        </Link>
      </div>
    </div>

    </nav>
  
  );
};

export default Navbar;
