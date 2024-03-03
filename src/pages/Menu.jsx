import { MenuItems } from "../components/MenuItems";

export function Menu() {
  return (
    <>
      <div className='second-section b-cover bg-center h-full bg-slate-200 mt-20'>
        <div className='flex flex-col justify-center items-center pb-10 mx-4 rounded-xl'>
          <h1 className='text-6xl font-thin text-left p-12'>À la carte</h1>
          <MenuItems />
        </div>
      </div>
    </>
  );
}
