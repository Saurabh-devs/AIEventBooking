// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleExplore = () => {
//     navigate("/about"); 
//   };

//   return (
//     <div
//       className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center relative"
//       style={{ backgroundImage: "url('/images/homebackground.jpeg')" }}
//     >
      
//       {/* Content */}
//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-5xl md:text-6xl font-bold text-gray-800 drop-shadow-md mb-4">
//           Welcome to EventMate
//         </h1>
//         <p className="text-3xl md:text-xl font-bold text-gray-700 drop-shadow-md mb-8">
//           Your event Amplified, Your planning Simplified.
//         </p>
//         <button
//           onClick={handleExplore}
//           className="px-8 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
//         >
//           Explore Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaGlassCheers, FaBriefcase, FaBirthdayCake, FaMusic, 
  FaFacebookF, FaTwitter, FaInstagram, FaSearch 
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/about"); 
  };

  // Categories data
  const categories = [
    { name: "Weddings", icon: <FaGlassCheers className="text-4xl text-teal-500" /> },
    { name: "Corporate", icon: <FaBriefcase className="text-4xl text-teal-500" /> },
    { name: "Birthdays", icon: <FaBirthdayCake className="text-4xl text-teal-500" /> },
    { name: "Concerts", icon: <FaMusic className="text-4xl text-teal-500" /> },
  ];

  // Venues data
  const venues = [
    { id: 1, name: "Palace Mayfair", rating: 4.8, img: "https://images.unsplash.com/photo-1596591603951-c823ff2a1590?w=500&q=80" },
    { id: 2, name: "Festsaal Königspalast", rating: 4.9, img: "https://images.unsplash.com/photo-1542037104857-e93b0fe58476?w=500&q=80" },
    { id: 3, name: "Asse Tap Room", rating: 4.7, img: "https://images.unsplash.com/photo-1555837579-5e58535b4425?w=500&q=80" },
    { id: 4, name: "Penton Park", rating: 4.8, img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80" },
    { id: 5, name: "Titanic Town Hall", rating: 4.9, img: "https://images.unsplash.com/photo-1604924151324-2c6b45398547?w=500&q=80" },
  ];

  // Recommendations data
  const recommendations = [
    { id: 1, text: "Timeless elegance and pure sophistication.", img: "https://images.unsplash.com/photo-1522202222243-7b7f2b05c5a2?w=500&q=80" },
    { id: 2, text: "A grand setting for unforgettable moments.", img: "https://images.unsplash.com/photo-1549294473-8203f2b5d436?w=500&q=80" },
    { id: 3, text: "Modern style meets classic charm.", img: "https://images.unsplash.com/photo-1616594216346-b6d35c5c8e6a?w=500&q=80" },
    { id: 4, text: "Where every detail is perfectly planned.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=80" },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* ===== Hero Section ===== */}
      <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')" }}>
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
        
        {/* Header */}
        {/* <header className="sticky top-0 bg-gradient-to-r from-[#67d7e8] to-[#4bb5c7] shadow-md z-50 w-full py-4">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-white">EventMate AI</div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#home" className="text-white font-medium hover:text-gray-100 transition-colors">Home</a>
              <a href="#about" className="text-white font-medium hover:text-gray-100 transition-colors">About</a>
              <a href="#services" className="text-white font-medium hover:text-gray-100 transition-colors">Services</a>
              <a href="#contact" className="text-white font-medium hover:text-gray-100 transition-colors">Contact</a>
            </nav>
          </div>
        </header> */}

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black drop-shadow-md mb-4">
            Welcome to EventMate
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray drop-shadow-md mb-8">
            Your event Amplified, Your planning Simplified.
          </p>
          
          {/* Search Box */}
          <div className="flex flex-col md:flex-row max-w-2xl mx-auto bg-white rounded-lg border-1 overflow-hidden shadow-lg mb-8">
            <input
              type="text"
              placeholder="Search for venues (e.g., weddings, parties)..."
              className="flex-grow px-4 md:px-6 py-3 text-gray-700 focus:outline-none"
            />
            <button className="bg-teal-500 text-white px-4 md:px-6 py-3 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <FaSearch />
            </button>
          </div>
          
          <button
            onClick={handleExplore}
            className="px-8 py-3 bg-gradient-to-r border-1 from-pink-400 to-purple-400 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* ===== Categories Section ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="category-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-3 flex justify-center">{cat.icon}</div>
                <p className="text-lg font-medium">{cat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Trending Venues Section ===== */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">Trending Venues</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {venues.map((venue) => (
              <div key={venue.id} className="venue-card bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden">
                <img src={venue.img} alt={venue.name} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{venue.name}</h3>
                  <p className="text-sm text-gray-500">⭐ {venue.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Recommendations Section ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800">AI-Powered Personalized Recommendations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommendations.map((rec) => (
              <div key={rec.id} className="recommendation-card bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden">
                <img src={rec.img} alt={rec.text} className="h-40 w-full object-cover" />
                <div className="p-4 text-gray-700 text-sm">{rec.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">EventMate AI</h4>
            <p className="text-sm">Your intelligent partner in crafting unforgettable events. We use AI to simplify planning and booking.</p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500 transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Subscribe</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-teal-500 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-teal-500 px-4 py-2 rounded hover:bg-teal-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-800 text-sm">
          © 2025 EventMate AI, All rights reserved.
        </div>
      </footer>

      {/* ===== AI Assistant Button ===== */}
      <button className="fixed bottom-6 right-6 bg-teal-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-teal-600 transition-colors z-40">
        <span className="font-bold">AI</span>
        <span>Assistant</span>
      </button>
    </div>
  );
};

export default Home;