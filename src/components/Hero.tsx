import React from 'react';
import { ArrowRight, Play, Shield, Award, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-teal-600 to-blue-800 dark:from-gray-900 dark:via-teal-900 dark:to-blue-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 dark:bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 dark:bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 dark:bg-teal-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Advanced
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
                Medical
              </span>
              Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-blue-100 dark:text-blue-200 mb-8 leading-relaxed max-w-2xl"
            >
              Discover premium pharmaceutical products from Groma Pharma. 
              Professional healthcare solutions manufactured with precision and care in Navi Mumbai.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-gray-200 transition-all duration-300 flex items-center justify-center group hover:scale-105 shadow-lg">
                View Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white/30 dark:border-blue-300/30 text-white dark:text-blue-100 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 dark:hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm">
                <Play className="mr-2 w-5 h-5" />
                Learn More
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex items-center space-x-8"
            >
              <div className="flex items-center text-blue-200 dark:text-blue-300">
                <Shield className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">FDA Approved</span>
              </div>
              <div className="flex items-center text-blue-200 dark:text-blue-300">
                <Award className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center text-blue-200 dark:text-blue-300">
                <Users className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">Trusted Globally</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical professionals"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 dark:border-gray-700/50"
              >
                <div className="flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">99.8%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Success Rate</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 dark:border-gray-700/50"
              >
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-blue-500 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">50M+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Patients Served</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 dark:border-blue-300/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 dark:bg-blue-300/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;