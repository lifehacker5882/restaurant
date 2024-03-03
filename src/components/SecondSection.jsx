import contentimage from "../assets/images/table_restaurant.jpg";

export function SecondSection() {
  return (
    <div className='second-section b-cover bg-center h-full flex items-center justify-center bg-slate-200'>
      <div className='w-full m-10 mx-4 2xl:w-1/2 bg-white rounded-xl'>
        <div className='flex flex-col md:flex-row'>
          <img
            src={contentimage}
            className='md:w-1/2 h-32 md:h-auto w-full rounded-tl-xl md:rounded-l-xl'
            alt="Restaurant's interior"
          />
          <div className='md:w-1/2 p-4'>
            <h1 className='text-black text-xl sm:text-2xl md:text-3xl mb-2'>
              Our Restaurant
            </h1>
            <p className='text-left mb-2'>
              Welcome to Savory Delight! Embark on and enjoy an exceptional
              culinary journey through our flavorful and diverse Western menu.
            </p>
            <p className='text-left mb-2'>
              With roots deeply anchored in traditions and inspiration from
              around the globe, we bring you a unique experience of authentic
              and modern dishes, prepared with passion and quality in every
              bite.
            </p>
            <p className='text-left mb-2'>
              From succulent steaks grilled to perfection and delicate pasta
              dishes, to the freshest salads and decadent desserts, our menu is
              curated with care to satisfy every palate and occasion. Our
              passion for great food and hospitality is reflected in every meal
              we serve, and we take pride in being your destination for
              unforgettable dining experiences and memorable moments. We invite
              you to sit back, explore our culinary offerings, and indulge in
              the many flavors awaiting you.
            </p>
            <p className='text-left mb-2'>
              Whether you're seeking a casual lunch, a romantic dinner for two,
              or a festive gathering with friends and family, Savory Delight
              will be your ultimate destination for an unforgettable Western
              dining experience.
            </p>
            <p className='text-left'>
              Welcome to our table, where every plate is a celebration of
              passion, flavor, and hospitality. We look forward to welcoming you
              and hosting you at Savory Delight!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
