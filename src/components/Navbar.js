import React, { useState } from 'react'
import Button from './Botton';

const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Service",link:"/services"},
      {name:"About",link:"/about"},
      {name:"Blog",link:"/blog"},
      {name:"Contact",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7 mb-3'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
          text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          </span>
          Mo'Adunni Empire
        </div>
        
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4    cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'} className="pb-40"></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <a type='button' href='#gallery'>
            <Button>
              Shop Now
            </Button>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Nav







// function Navbar() {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <header className='container row'>
//       <a href='#' className='logo'> 
//         <img src='./images/logo.png' alt='logo' />
//       </a>
//       {/* <div className='search-box'>
//         <form action="">
//           <input type='text' name='search' id='srch' placeholder='Search'/>
//           <button type='submit'><i className='fa fa-search'></i></button>
//         </form>
//       </div> */}
//       <div className={`toggleMenu ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>
//       <nav className={`navigation row ${isActive ? 'active' : ''}`}>
//         <ul className="primary-list row">
//           <li className="navbarLink">
//             <a href="/">Home</a>
//           </li>
//           <li className="navbarLink">
//             <a href="/products">Products</a>
//           </li>
//           <li className="navbarLink">
//             <a href="/blog">Blog</a>
//           </li>
//         </ul>
//         <ul className='secondary-list row'>
//           <li className="navbarIcon">
//             <a href="/cart">
//               <i className="fa fa-shopping-cart"></i>
//             </a>
//           </li>
//           <li className='hero-social'>
//             <a href='#'><i className='fab fa-facebook'></i></a>
//             <a href='#'><i className='fab fa-twitter'></i></a>
//             <a href='#'><i className='fab fa-instagram'></i></a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;
