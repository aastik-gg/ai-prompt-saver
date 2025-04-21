import React from 'react';
import { motion } from 'framer-motion'; // I use this for animations.
import { Link } from 'react-router-dom'; // I use this for navigation.

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-indigo-900 to-black text-white px-4 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
        >
          Boost Your Creativity with AI Prompts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 drop-shadow-md"
        >
          Discover or create high-quality prompts to spark ideas, increase productivity, and improve learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link to="/all-prompts">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-lg transition">
              Explore Prompts
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* I add animated decorative shapes in the background */}
      <div className="absolute inset-0 z-0">
        <div className="animate-revolve absolute top-10 left-10 w-24 h-24 border-4 border-purple-500 rounded-full"></div>
        <div className="animate-revolve absolute top-1/4 left-1/3 w-32 h-32 border-4 border-indigo-400 rounded-md"></div>
        <div className="animate-revolve absolute bottom-20 right-20 w-20 h-20 border-4 border-pink-500 rounded-lg"></div>
        <div className="animate-revolve absolute top-1/3 right-1/4 w-40 h-40 border-4 border-blue-500 rounded-sm"></div>
        <div className="animate-revolve absolute bottom-10 left-1/4 w-28 h-28 border-4 border-yellow-500 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Home;
