import { Link } from "react-router-dom";

export function NavbarList() {
  return (
    <ul className='flex flex-row space-x-5 md:space-x-10 sm:text-xl md:text-2xl font-sans mx-auto'>
      <Link to='/Reservation'>Reservation</Link>
      <Link to='/Menu'>Menu</Link>
      <Link to='/Login'>Login</Link>
    </ul>
  );
}
