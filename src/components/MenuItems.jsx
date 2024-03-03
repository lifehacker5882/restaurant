import hamburgers from "../assets/images/hamburgers.jpg";
import onionRings from "../assets/images/onion_rings.jpg";
import pasta from "../assets/images/pasta.jpg";
import wings from "../assets/images/wings.jpg";

export function MenuItems() {
  return (
    <div className='flex flex-col space-y-4 md:w-2/5'>
      <div className='img-text relative'>
        <img
          src={hamburgers}
          alt='hamburgers'
          className='h-64 md:h-96 w-full rounded-md'
        />
        <div className='text-image absolute right-0 top-1/2 transform -translate-y-1/2 w-2/3 p-4 space-y-2 bg-white opacity-70 overflow'>
          <h3 className='underline'>Hamburger</h3>
          <p className='text-xs md:text-base'>
            Indulge in the juicy perfection of our handcrafted burgers, expertly
            seasoned and made with locally sourced ingredients. Each bite is a
            flavorful journey, balancing quality and taste for a satisfying
            experience. Treat yourself to our diverse menu selection and
            discover a culinary adventure that's simply unforgettable!
          </p>
          <p>$16.99</p>
        </div>
      </div>

      <div className='img-text relative'>
        <img
          src={onionRings}
          alt='onion rings'
          className='h-64 md:h-96 w-full rounded-md'
        />
        <div className='text-image absolute right-0 top-1/2 transform -translate-y-1/2 w-2/3 p-4 space-y-2 bg-white opacity-70 overflow'>
          <h3 className='underline'>Onion Rings</h3>
          <p className='text-xs md:text-base'>
            Savor the crispy perfection of our homemade onion rings, crafted
            with care and seasoned to perfection. Each bite offers a delightful
            crunch and burst of flavor, making for a truly satisfying snack.
            Treat yourself to our irresistible onion rings, a crispy indulgence
            you won't be able to resist
          </p>
          <p>$8.99</p>
        </div>
      </div>

      <div className='img-text relative'>
        <img
          src={pasta}
          alt='pasta'
          className='h-64 md:h-96 w-full rounded-md'
        />
        <div className='text-image absolute right-0 top-1/2 transform -translate-y-1/2 w-2/3 p-4 space-y-2 bg-white opacity-70 overflow'>
          <h3 className='underline'>Pasta</h3>
          <p className='text-xs md:text-base'>
            Delight in the savory perfection of our pasta dishes, carefully
            prepared with the finest ingredients and flavorful sauces. Each
            forkful is a culinary journey, marrying quality ingredients with
            delicious taste. Treat yourself to our selection of pasta dishes, a
            satisfying and memorable dining experience that will leave you
            craving more!
          </p>
          <p>$12.99</p>
        </div>
      </div>

      <div className='img-text relative'>
        <img
          src={wings}
          alt='chicken wings'
          className='h-64 md:h-96 w-full rounded-md'
        />
        <div className='text-image absolute right-0 top-1/2 transform -translate-y-1/2 w-2/3 p-4 space-y-2 bg-white opacity-70 overflow'>
          <h3 className='underline'>Chicken Wings</h3>
          <p className='text-xs md:text-base'>
            Indulge in the mouthwatering perfection of our chicken wings,
            expertly seasoned and cooked to crispy, flavorful perfection. Each
            bite is a tantalizing explosion of taste, delivering the ultimate
            satisfaction with every wing. Treat yourself to our selection of
            chicken wings, a delicious and addictive treat you won't be able to
            resist!
          </p>
          <p>$10.99</p>
        </div>
      </div>
    </div>
  );
}
