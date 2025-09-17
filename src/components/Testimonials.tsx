import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Patient',
      condition: 'Hypertension',
      rating: 5,
      text: 'Cardiomax Pro has completely changed my life. My blood pressure is now well-controlled, and I feel more energetic than I have in years. The side effects were minimal, and my doctor is very pleased with my progress.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      medication: 'Cardiomax Pro',
      duration: '6 months'
    },
    {
      id: 2,
      name: 'Dr. Robert Chen',
      role: 'Cardiologist',
      condition: 'Healthcare Provider',
      rating: 5,
      text: 'I\'ve been prescribing MediCore medications for over 10 years. The consistency in quality and the excellent patient outcomes make them my go-to choice for cardiovascular treatments. The clinical support is outstanding.',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      medication: 'Multiple Products',
      duration: '10+ years'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Patient',
      condition: 'Type 2 Diabetes',
      rating: 5,
      text: 'GlucoBalance has helped me achieve the best blood sugar control I\'ve ever had. The once-daily dosing fits perfectly into my busy schedule, and I\'ve had no significant side effects. Highly recommended!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      medication: 'GlucoBalance',
      duration: '1 year'
    },
    {
      id: 4,
      name: 'James Thompson',
      role: 'Patient',
      condition: 'Chronic Pain',
      rating: 4,
      text: 'After trying multiple pain medications, PainFree Max finally gave me the relief I needed. I can now enjoy activities with my family again. The extended-release formula means I don\'t have to worry about frequent dosing.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      medication: 'PainFree Max',
      duration: '8 months'
    },
    {
      id: 5,
      name: 'Dr. Lisa Park',
      role: 'Pharmacist',
      condition: 'Healthcare Provider',
      rating: 5,
      text: 'MediCore\'s commitment to quality is evident in every product. Their medications consistently meet the highest standards, and their patient education materials are comprehensive and easy to understand.',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      medication: 'Various Products',
      duration: '7 years'
    },
    {
      id: 6,
      name: 'Michael Johnson',
      role: 'Patient',
      condition: 'Respiratory Issues',
      rating: 5,
      text: 'RespiClear has been a game-changer for my asthma management. The fast-acting relief and long-lasting effects have significantly improved my quality of life. I can exercise again without worry.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      medication: 'RespiClear',
      duration: '2 years'
    }
  ];

  const patientTestimonials = testimonials.filter(t => t.role === 'Patient');
  const providerTestimonials = testimonials.filter(t => t.role !== 'Patient');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Patients & Providers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients and healthcare professionals who trust MediCore medications for their treatment needs.
          </p>
        </div>

        {/* Patient testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Patient Experiences</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patientTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.condition}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
                </div>

                <Quote className="text-gray-300 mb-2" size={24} />
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>

                <div className="border-t pt-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Medication:</span>
                    <span className="font-medium">{testimonial.medication}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Duration:</span>
                    <span className="font-medium">{testimonial.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Provider testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Healthcare Provider Reviews</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {providerTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <Quote className="text-gray-300 mb-3" size={32} />
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{testimonial.text}</p>

                <div className="border-t pt-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Experience with MediCore:</span>
                    <span className="font-medium">{testimonial.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Join Thousands of Satisfied Patients</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the difference that quality pharmaceuticals can make in your health journey. 
              Consult with your healthcare provider about MediCore medications today.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Find Your Medication
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;