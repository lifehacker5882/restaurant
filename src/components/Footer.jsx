import logo from "../assets/images/salad-vegetable-icon.webp";

export function Footer() {
  return (
    <>
      <footer
        className='flex items-center justify-between p-4 fixed-bottom 
      w-full z-10 bg-gray-500 text-white pt-20 pb-20'
      >
        <div className='flex flex-col items-start md:mx-auto'>
          <div className='space-y-2'>
            <h1>Opening Hours</h1>
            <p>Monday - Closed</p>
            <p>Tuesday - Friday: 14.00 - 22.00</p>
            <p>Saturday - Sunday: 10.00 - 02.00</p>
          </div>
          <div className='space-y-2 mt-8'>
            <h1>Address</h1>
            <p>1234 Main Street</p>
            <p>City, State 12345</p>
          </div>
        </div>

        <div className='hidden md:flex flex-row justify-center items-center space-x-4 mx-auto'>
          <h1 className='text-2xl sm:text-4xl md:text-7xl'>Savory Delight</h1>
          <img src={logo} alt='logo' className='h-12 sm:h-24 md:h-32 invert' />
        </div>
      </footer>
    </>
  );
}
