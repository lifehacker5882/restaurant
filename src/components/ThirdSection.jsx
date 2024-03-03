import contentImage from "../assets/images/chef.jpg";

export function ThirdSection() {
  return (
    <>
      <div className='third-section b-cover bg-center h-full flex items-center justify-center bg-slate-200'>
        <div className='w-full m-10 mx-4 2xl:w-1/2 bg-white rounded-xl'>
          <div className='flex flex-col md:flex-row'>
            <img
              src={contentImage}
              className='md:hidden md:w-1/2 h-32 md:h-auto w-full rounded-tl-xl rounded-tr-xl md:rounded-l-xl object-cover'
            />
            <div className='md:w-1/2 p-4'>
              <h1 className='text-black text-xl sm:text-2xl md:text-3xl mb-2'>
                Our Chef
              </h1>
              <p className='text-left mb-2'>
                Chef Erik is a virtuoso of Western cuisine, his culinary journey
                marked by an unwavering commitment to excellence. Drawing upon
                decades of experience, Chef Erik has honed his skills to a fine
                edge, possessing an intuitive understanding of flavors and
                textures. His passion for gastronomy knows no bounds, as he
                tirelessly explores the intricacies of ingredients and
                techniques, pushing the boundaries of culinary innovation.
              </p>
              <p className='text-left mb-2'>
                At our establishment, Chef Erik serves as the guiding force
                behind a team of dedicated chefs, each sharing his fervor for
                the culinary arts. Together, they embark on a culinary
                adventure, weaving together the tapestry of flavors from around
                the world to create memorable dining experiences. Whether
                experimenting with avant-garde techniques or paying homage to
                time-honored traditions, Chef Erik's culinary creations are a
                testament to his boundless creativity and unwavering pursuit of
                perfection.
              </p>
              <p className='text-left'>
                As the head chef of our kitchen, Chef Erik's influence extends
                far beyond the confines of our restaurant. His culinary prowess
                has garnered acclaim from patrons near and far, drawn to the
                tantalizing aromas and exquisite flavors that emanate from his
                kitchen. With every dish he presents, Chef Erik invites diners
                on a gastronomic journey, where each bite tells a story of
                passion, dedication, and culinary mastery.
              </p>
              <p className='text-left'>
                We invite you to indulge in the culinary delights crafted by
                Chef Erik, where every meal is an expression of his artistry and
                devotion to the craft. Join us and experience the magic of Chef
                Erik's cuisine today!
              </p>
            </div>
            <img
              src={contentImage}
              className='hidden md:block md:w-1/2 h-32 lg:max-h-[40rem] md:h-auto w-full rounded-br-xl rounded-tr-xl object-cover'
              alt="Chef Erik's portrait"
            />
          </div>
        </div>
      </div>
    </>
  );
}
