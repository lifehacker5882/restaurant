import logo from "../assets/images/salad-vegetable-icon.webp";
import { NavbarList } from "./NavbarList";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4 fixed top-0 left-0 w-full z-10 bg-white opacity-70'>
      <Link to='/' className='flex flex-row items-center space-x-4 mx-auto'>
        {/* 'flex flex-row items-center space-x-4 mx-auto px-8' */}
        <h1 className='text-black sm:text-xl md:text-2xl font-sans font-semibold'>
          Savory Delight
        </h1>
        <img src={logo} alt='Logo' className='w-10'></img>
      </Link>
      <NavbarList />
    </nav>
  );
}
