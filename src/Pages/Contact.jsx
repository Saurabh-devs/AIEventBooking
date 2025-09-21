// import React from "react";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-[#faf3e0] to-[#c5a45a]
//  text-gray-900 flex flex-col">
//       {/* Hero Section */}
//       <div className="w-full py-8 text-center bg-gradient-to-r from-[#faf3e0] to-[#c5a45a]
// ">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 border-b-4 border-[#b9972c] inline-block pb-2 mb-4 font-serif 
// ">
//           Get In Touch
//         </h1>
//         <p className="text-lg md:text-xl text-gray-700 font-sans">
//           We’re here to help you plan smarter & celebrate better.
//         </p>
//       </div>

//       {/* Main Section */}
//       <div className="flex flex-col md:flex-row flex-grow px-6 md:px-20 py-12 gap-12 max-w-6xl mx-auto w-full">
//         {/* Contact Form */}
//         <div className="md:w-2/3 bg-gray-50 shadow-lg rounded-2xl p-8">
//           <form className="space-y-6">
//             <div>
//               <label className="block text-gray-800 font-medium mb-2">Name</label>
//               <input
//                 type="text"
//                 placeholder="Your full name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b9972c]"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b9972c]"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-800 font-medium mb-2">Message</label>
//               <textarea
//                 rows="5"
//                 placeholder="Write your message..."
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b9972c]"
//               ></textarea>
//             </div>

//             <button
//               type="button" // UI only, no backend
//               className="bg-[#d4af37] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#56c5d4] transition duration-200"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Quick Contact Info */}
//         <div className="md:w-1/3 flex flex-col justify-start bg-white p-8 rounded-2xl shadow-md md:text-xl">
//           <h2 className="text-xl font-semibold mb-4 font-sans text-gray-800">
//             Contact Info
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Have any questions about planning your next event?  
//             Our team is ready to assist you with ideas, scheduling, or any queries you may have.  
//           </p>
//           <p className="text-gray-700 text-lg">
//             Email us at:{" "}
//             <span className="font-medium text-[#b9972c]">
//               hello@eventmate.ai
//             </span>
//           </p>
//           <p className="mt-4 text-lg text-gray-600">
//             We usually respond within 24 hours.  
//             For urgent matters, please mention “Priority” in your subject line.
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="text-center text-sm text-gray-600 py-6 border-t">
//         © 2025 EventMate. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default Contact;



import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe] flex flex-col">
      {/* Hero Section */}
      <div className="w-full py-12 text-center bg-gradient-to-r from-teal-500 to-aqua-400 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Get In Touch
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          We're here to help you plan smarter & celebrate better.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row flex-grow px-6 md:px-20 py-16 gap-10 max-w-6xl mx-auto w-full">
        {/* Contact Form */}
        <div className="md:w-2/3 bg-white shadow-xl rounded-2xl p-8 border border-teal-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-teal-500">
            Send us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-gradient-to-r from-teal-500 to-aqua-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:from-teal-600 hover:to-aqua-500 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>

        {/* Quick Contact Info */}
        <div className="md:w-1/3 bg-white p-8 rounded-2xl shadow-md border border-teal-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-teal-500">
            Contact Info
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-full mt-1">
                <FaEnvelope className="text-teal-600 text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-teal-600">hello@eventmate.ai</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-full mt-1">
                <FaPhone className="text-teal-600 text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-teal-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-full mt-1">
                <FaMapMarkerAlt className="text-teal-600 text-lg" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-teal-600">123 Event Street, City, Country</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-100">
            <p className="text-gray-700">
              Have questions about planning your next event? Our team is ready to assist you with ideas, scheduling, or any queries you may have.
            </p>
            <p className="mt-3 text-sm text-gray-600">
              We usually respond within 24 hours. For urgent matters, please mention "Priority" in your subject line.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Why Choose EventMate?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-teal-50 rounded-lg border border-teal-100">
              <div className="text-teal-500 text-2xl mb-3">⏱️</div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Response</h3>
              <p className="text-gray-700">We respond to all inquiries within 24 hours</p>
            </div>
            <div className="p-6 bg-teal-50 rounded-lg border border-teal-100">
              <div className="text-teal-500 text-2xl mb-3">💡</div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Advice</h3>
              <p className="text-gray-700">Get professional guidance for your events</p>
            </div>
            <div className="p-6 bg-teal-50 rounded-lg border border-teal-100">
              <div className="text-teal-500 text-2xl mb-3">🤝</div>
              <h3 className="font-semibold text-gray-800 mb-2">Personal Support</h3>
              <p className="text-gray-700">Dedicated support for all your event needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 py-8 bg-gray-50">
        <p>© 2025 EventMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;