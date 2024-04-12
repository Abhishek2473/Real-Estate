import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <div className='bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-4xl font-bold mb-6 text-gray-800'>Welcome to UrbanNest</h1>
        <p className='text-lg text-gray-700 mb-6'>Discover the difference with Make Estate - where your real estate dreams become reality.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200 rounded-lg'>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Our Mission</h2>
              <p className='text-lg text-gray-700'>
                At UrbanNest, our mission is clear: to empower you in achieving your real estate goals. Whether you're buying, selling, or renting, we're committed to providing expert advice, tailored services, and deep market insights to ensure your success.
              </p>
              <p className='text-lg text-gray-700 mt-4'>
                We strive to build lasting relationships with our clients by delivering exceptional service and exceeding expectations at every step of the journey.
              </p>
            </div>
          </div>
          <div className='hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-200 rounded-lg'>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Why Choose Us?</h2>
              <p className='text-lg text-gray-700'>
                With a team of seasoned agents and a wealth of industry experience, we offer unparalleled service and dedication to our clients. We believe that every real estate transaction should be exciting and fulfilling, and we're here to make it happen for you.
              </p>
              <p className='text-lg text-gray-700 mt-4'>
                Our commitment to transparency, integrity, and personalized attention sets us apart in the industry, ensuring that you receive the highest level of support and guidance throughout your real estate journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
