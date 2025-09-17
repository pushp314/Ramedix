import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Clock, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What makes Groma Pharma products different from other pharmaceutical companies?",
      answer: "Groma Pharma products are manufactured in our state-of-the-art facility in Navi Mumbai with stringent quality controls. We follow WHO-GMP standards and hold ISO 9001:2015 certification. Our products undergo rigorous testing and quality assurance processes to ensure maximum efficacy and safety."
    },
    {
      question: "Are Groma Pharma medications available without prescription?",
      answer: "Most of our medications require a valid prescription from a licensed healthcare provider. This ensures proper medical supervision and patient safety. Some over-the-counter products may be available, but we always recommend consulting with a healthcare professional before starting any medication."
    },
    {
      question: "How can I verify the authenticity of Groma Pharma products?",
      answer: "All genuine Groma Pharma products come with unique batch numbers, manufacturing dates, and holographic security features. You can verify authenticity by checking our official website or calling our customer service at +91 22 2782 1234. Never purchase from unauthorized dealers."
    },
    {
      question: "What should I do if I experience side effects from Groma medications?",
      answer: "If you experience any adverse effects, discontinue use immediately and consult your healthcare provider. For severe reactions, seek emergency medical attention. You can also report side effects to our pharmacovigilance team at +91 22 2782 1234 or through our website."
    },
    {
      question: "How should I store Groma Pharma medications?",
      answer: "Store medications in a cool, dry place away from direct sunlight and moisture. Keep them in their original packaging and out of reach of children. Some medications may require refrigeration - always follow the storage instructions on the label."
    },
    {
      question: "Do you offer home delivery services?",
      answer: "Yes, we partner with authorized pharmacies and distributors across India to provide home delivery services. Contact our customer service team to find authorized dealers in your area who offer delivery services."
    },
    {
      question: "What certifications does Groma Pharma hold?",
      answer: "Groma Pharma holds multiple certifications including ISO 9001:2015 for quality management, WHO-GMP certification for manufacturing practices, and CDSCO approval for all our products. Our manufacturing license number is MH/25D/20/CC/2024."
    },
    {
      question: "How can healthcare professionals get more information about your products?",
      answer: "Healthcare professionals can access detailed product information, clinical data, and prescribing guidelines through our medical portal. Contact our medical affairs team at medical@gromapharma.com or call +91 22 2782 1234 for professional inquiries."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about Groma Pharma products, safety, and services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-600"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 dark:text-blue-400 transform transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-400 transform transition-transform duration-200" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 border-t border-gray-200 dark:border-gray-600 pt-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our medical experts and customer service team are available 24/7 to help with any questions about our products or services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+912227821234"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Call: +91 22 2782 1234
              </a>
              <a
                href="mailto:info@gromapharma.com"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center backdrop-blur-sm"
              >
                Email Support
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">WHO-GMP Certified</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">International quality standards</p>
          </div>
          <div className="text-center p-6 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
            <Clock className="w-12 h-12 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Round-the-clock assistance</p>
          </div>
          <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
            <HelpCircle className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Guidance</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Professional medical advice</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;