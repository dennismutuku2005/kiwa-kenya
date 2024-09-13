import React from 'react';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-800 h-screen text-white text-center py-12 bg-cover bg-center flex flex-col justify-center items-center" style={{ backgroundImage: 'url(https://techpoint.africa/wp-content/uploads/2023/03/TECHPOINT-FINTECH-140.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Welcome to Kiwa
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Your ultimate destination for the latest in technology, tools, and trends. Stay informed and ahead of the curve.
        </p>
        <a href="#explore" className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300">
          Explore Now
        </a>
      </div>
    </section>

      {/* Featured Articles Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Article Title 1</h3>
            <p className="text-gray-700">A brief summary of the article content goes here.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Article Title 2</h3>
            <p className="text-gray-700">A brief summary of the article content goes here.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Article Title 3</h3>
            <p className="text-gray-700">A brief summary of the article content goes here.</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Popular Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tool Name 1</h3>
              <p className="text-gray-700">Brief description of the tool and its features.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tool Name 2</h3>
              <p className="text-gray-700">Brief description of the tool and its features.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tool Name 3</h3>
              <p className="text-gray-700">Brief description of the tool and its features.</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-gray-800 text-white text-center py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6">Stay updated with the latest news and updates.</p>
          <form className="flex justify-center">
            <input type="email" placeholder="Your email address" className="p-3 rounded-l-lg border border-gray-300" />
            <button type="submit" className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}


