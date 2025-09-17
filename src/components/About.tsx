import React from 'react';
import { Shield, Award, Users, Globe, Heart, Microscope, Clock, CheckCircle, MapPin, Phone, Mail, Building, Factory, Beaker } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { icon: Users, value: '10M+', label: 'Patients Served', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Globe, value: '15+', label: 'States Covered', color: 'text-green-600 dark:text-green-400' },
    { icon: Award, value: '15+', label: 'Years Experience', color: 'text-purple-600 dark:text-purple-400' },
    { icon: Microscope, value: '50+', label: 'Research Studies', color: 'text-orange-600 dark:text-orange-400' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every medication undergoes rigorous testing and quality control to ensure patient safety.',
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
    },
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'We prioritize patient outcomes and work closely with healthcare providers across India.',
      color: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
    },
    {
      icon: Microscope,
      title: 'Innovation',
      description: 'Continuous research and development to bring breakthrough treatments to Indian market.',
      color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified manufacturing with WHO-GMP compliance standards.',
      color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
    }
  ];

  const milestones = [
    { year: '2009', title: 'Company Founded', description: 'Started with a vision to improve healthcare in India' },
    { year: '2012', title: 'CDSCO Approval', description: 'First medication received CDSCO approval' },
    { year: '2016', title: 'Pan-India Expansion', description: 'Expanded operations to 15 Indian states' },
    { year: '2019', title: 'WHO-GMP Certification', description: 'Achieved international manufacturing standards' },
    { year: '2024', title: 'Digital Innovation', description: 'Launched comprehensive digital health platform' }
  ];

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Executive Officer',
      education: 'MD, AIIMS Delhi',
      experience: '20+ years in pharmaceutical leadership',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading Groma Pharma with a vision to make quality healthcare accessible across India.'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Scientific Officer',
      education: 'PhD in Pharmacology, IIT Bombay',
      experience: '18+ years in drug development',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Pioneering breakthrough treatments through innovative research and development.'
    },
    {
      name: 'Dr. Arjun Patel',
      role: 'Head of Quality Assurance',
      education: 'PharmD, Jamia Hamdard University',
      experience: '15+ years in pharmaceutical quality',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Ensuring every medication meets the highest safety and quality standards.'
    },
    {
      name: 'Meera Krishnan',
      role: 'Chief Technology Officer',
      education: 'MS Computer Science, IIT Delhi',
      experience: '12+ years in healthcare technology',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Transforming healthcare through cutting-edge digital solutions and AI.'
    }
  ];

  const facilities = [
    {
      name: 'Corporate Headquarters',
      location: 'Navi Mumbai, Maharashtra',
      type: 'Corporate Office',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Our main headquarters housing executive leadership and strategic operations.'
    },
    {
      name: 'Research & Development Center',
      location: 'Bangalore, Karnataka',
      type: 'R&D Facility',
      image: 'https://images.pexels.com/photos/3825371/pexels-photo-3825371.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'State-of-the-art research facility where our scientists develop breakthrough treatments.'
    },
    {
      name: 'Manufacturing Plant',
      location: 'Hyderabad, Telangana',
      type: 'Production Facility',
      image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'CDSCO and WHO-GMP approved manufacturing facility producing medications for Indian distribution.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Groma Pharma</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Groma Pharmaceuticals has been at the forefront of medical innovation in India, 
            developing life-changing medications that improve patient outcomes nationwide.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              At Groma Pharmaceuticals, we believe that everyone deserves access to safe, effective, 
              and affordable medications. Our commitment to excellence drives us to develop innovative 
              treatments that address the most pressing health challenges in India.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Through rigorous research, state-of-the-art manufacturing, and unwavering dedication to 
              quality, we've earned the trust of healthcare providers and patients across 15 Indian states.
            </p>
            
            <div className="space-y-4">
              {[
                'CDSCO-approved manufacturing facilities',
                'ISO 9001:2015 quality certification',
                '24/7 pharmacovigilance monitoring',
                'Pan-India distribution network'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Research facility"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            
            {/* Floating certification badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center">
                <Award className="w-8 h-8 text-yellow-500 mr-3" />
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">WHO-GMP Certified</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Quality Assured</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100 dark:border-blue-900"
                  />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{member.education}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{member.experience}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{facility.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{facility.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">{facility.location}</p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-600 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of healthcare providers who trust Groma Pharma for quality medications and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+912227821234"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 22 2782 1234
              </a>
              <a
                href="mailto:info@gromapharma.com"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;