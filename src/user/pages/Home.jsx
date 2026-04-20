import React from 'react'
import Header from "../components/Header";
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
      <Header />
      {/* Hero section */}
      <div style={{ height: '500px' }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white'>
        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.5)' }} className='flex flex-col justify-center items-center w-full  text-white'>
          <h1 className='text-6xl font-bold'>Wonderful Gifts</h1>
          <p>Gift your family and friends a book</p>
          <div className="mt-9 flex items-center">
            <input placeholder='Search a Book' type="text" className="bg-white p-2 rounded-3xl w-100 text-black" />
            <FaSearch className='text-gray-500 cursor-pointer' style={{ marginLeft: '-40px' }} />
          </div>
        </div>
      </div>
      {/* NEW ARRIVALS */}
      < section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>NEW ARRIVALS</h1>
        <h1 className='text-4xl my-2'>Explore our Latest Collection</h1>
        <div className='md:grid grid-cols-4 w-full my-10'>
          {/* duplicate according to book */}
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img width={'100%'} height={'300px'} src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855713.jpg" alt="book" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-blue-700 font-bold text-xl">Author</h2>
              <h3 className="text-lg">Title</h3>
              <p className="font-bold text-red-500">Price</p>
            </div>
          </div>
        </div>
        <Link to={'/books'} className='bg-black p-3 text-white font-black' >Explore More...</Link>
        </section>
        {/* authors */}
        <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
          <div className="text-center">
            <h2 className="text-xl font-bold">FEATURED AUTHORS</h2>
            <p className="my-5 text-justify">Captivates with every word
              Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
            <p className='text-justify'>Our Author Features include:</p>

            <p className='text-justify my-3'><span className='font-black'>✨ Author Profiles </span>: Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>

            <p className='text-justify my-3' ><span className='font-black'>📖 Published Works :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>

            <p className='text-justify my-3'><span className='font-black' >🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
          </div>
          <div className='p-5 flex justify-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4n-uR5Uwr8b6icv0HsoSkZZWVAqdmw2Cqg&s" alt="man" />
          </div>
        </section>
        {/* testimonial */}
        
      < section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
        <h1 className='text-xl my-2'>See what others Saying</h1>
        <div className='"my-5 flex flex-col justify-center items-center'>
          <img width={'200px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="man2" />
          <h3 className="my-3">Jerom Cullen</h3>
          <p className="text-justify">This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>

        </div>
        
        </section>

      
      <Footer />
    </>
  )
}

export default Home