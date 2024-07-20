import * as React from 'react';
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Blog",
    "Write",
  ];

  // const [userInfo, setuserInfo] = React.useState();
  const [userInfo, setuserInfo] = React.useState({});


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    try {
      const storedInfo = window.localStorage.getItem("loginInfo");
      const userInfoData = storedInfo ? JSON.parse(storedInfo) : {};
      setuserInfo(userInfoData);
    } catch (error) {
      console.error("Error accessing localStorage", error);
    }
  }, []);
 const edditorClikc = ()=>{
if(userInfo?.data){

  router.push('/edditor');

}else{
  router.push('/signin');

}


 }
 
  const Logout = ()=>{

    window.localStorage.clear("userInfo")
    window.location.reload()
  }
  console.log(userInfo?.data);
  
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>VividVerses</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {/* <Link href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      Product

                    </Link>
                    <Link href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">


                      Blog

                    </Link> */}
                    <Link href="/" className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                      Write <ModeOutlinedIcon/>
                    </Link>


                   
                    {/* <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
                        Get Started
                    </Link> */}
                    {/* <Link href="/edditor" className="w-full text-center px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                      New Post
                    </Link> */}
                    {/* <Link href="/signup" className=" w-full text-center mt-3 px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                      SignUp
                    </Link> */}
                    {userInfo?.data ? 
                    <Link href={""} onClick={Logout} className=" w-full text-center mt-3 px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                      Logout
                    </Link>
                    :  <Link href="/signin" className=" w-full text-center mt-3 px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
                    Signin
                  </Link>}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            
              <li className="mr-3 nav__item">
                {/* <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  Product
                </Link>
                 <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  Blog
                </Link> */}
                 <Link href="" onClick={edditorClikc} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  Write<ModeOutlinedIcon/>
                </Link>
              </li>
           
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {/* <Link  className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            New Post
          </Link> */}
          {/* <Link href="/signup" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            SignUp
          </Link> */}
          {/* working */}

 {userInfo?.data ?
          <Link href={""} onClick={Logout} className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
          Logout
        </Link>
          : 
        <Link href="/signin" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            Signin
          </Link>
          }

{userInfo?.data ?
          <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Info
      </Button>:""
}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
   
          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
