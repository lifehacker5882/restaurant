import logo from "../assets/images/salad-vegetable-icon.webp";
import backgroundimage from "../assets/images/background-v2.jpg";

export function FirstSection() {
  return (
    <>
      <div
        className='first-section bg-cover bg-center h-screen flex flex-col items-center justify-center'
        style={{ backgroundImage: `url(${backgroundimage})` }}
        alt='Background'
      >
        <div className='flex flex-col md:flex-row items-center justify-center text-black text-3xl md:text-6xl font-thin bg-white bg-opacity-70 p-6 rounded-lg shadow-lg'>
          <h1>Savory Delight</h1>
          <img src={logo} alt='Logo' className='ml-4 w-14' />
        </div>
      </div>
    </>
  );
}
