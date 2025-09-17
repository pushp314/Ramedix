import React, { useState } from 'react';
import { Video, Calendar, Clock, User, FileText, CreditCard, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const VirtualConsultation = () => {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('general');
  const [step, setStep] = useState(1);

  const providers = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      rating: 4.9,
      experience: '15 years',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      nextAvailable: 'Today 2:00 PM',
      consultationFee: '$120'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      specialty: 'Endocrinology',
      rating: 4.8,
      experience: '12 years',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      nextAvailable: 'Tomorrow 10:00 AM',
      consultationFee: '$140'
    },
    {
      id: '3',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Internal Medicine',
      rating: 4.7,
      experience: '18 years',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300',
      nextAvailable: 'Today 4:30 PM',
      consultationFee: '$100'
    }
  ];

  const consultationTypes = [
    { id: 'general', name: 'General Consultation', duration: '30 min', description: 'General health concerns and questions' },
    { id: 'prescription', name: 'Prescription Review', duration: '15 min', description: 'Review current medications and dosages' },
    { id: 'followup', name: 'Follow-up Visit', duration: '20 min', description: 'Follow-up on previous treatment' },
    { id: 'urgent', name: 'Urgent Care', duration: '45 min', description: 'Non-emergency urgent medical concerns' }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const handleBooking = () => {
    setStep(4);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Consultation Type</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {consultationTypes.map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    consultationType === type.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setConsultationType(type.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{type.name}</h4>
                    <span className="text-sm text-gray-500">{type.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Provider</h3>
            <div className="space-y-4">
              {providers.map((provider) => (
                <motion.div
                  key={provider.id}
                  whileHover={{ scale: 1.01 }}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedProvider === provider.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedProvider(provider.id)}
                >
                  <div className="flex items-center">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{provider.name}</h4>
                      <p className="text-gray-600">{provider.specialty}</p>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span className="mr-4">⭐ {provider.rating}</span>
                        <span className="mr-4">{provider.experience} experience</span>
                        <span className="text-green-600 font-medium">{provider.nextAvailable}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{provider.consultationFee}</div>
                      <div className="text-sm text-gray-500">per consultation</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={!selectedProvider}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Times</label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                        selectedTime === time
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setStep(2)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Book Consultation
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultation Booked Successfully!</h3>
            <p className="text-gray-600 mb-6">
              Your virtual consultation has been scheduled. You'll receive a confirmation email with the video link.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 mb-4">Appointment Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Provider:</span>
                  <span className="font-medium">{providers.find(p => p.id === selectedProvider)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Date:</span>
                  <span className="font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time:</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-medium">{consultationTypes.find(t => t.id === consultationType)?.name}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setStep(1);
                setSelectedProvider(null);
                setSelectedDate('');
                setSelectedTime('');
              }}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Another Consultation
            </button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <Video className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Virtual Consultation</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with licensed healthcare providers from the comfort of your home. 
              Get professional medical advice, prescription reviews, and treatment recommendations.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > stepNumber ? <CheckCircle size={16} /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-1 mx-2 ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {renderStep()}
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">HIPAA Compliant</h4>
            <p className="text-gray-600 text-sm">Secure, encrypted video consultations protecting your privacy</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Same-Day Availability</h4>
            <p className="text-gray-600 text-sm">Get medical care when you need it, often within hours</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Digital Prescriptions</h4>
            <p className="text-gray-600 text-sm">Prescriptions sent directly to your preferred pharmacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualConsultation;