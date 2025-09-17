import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Shield, Award, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-teal-600 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ramedix Pharmaceutical</h3>
                <p className="text-white/80 text-sm">Medical Solutions</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed">
              Leading pharmaceutical company based in Navi Mumbai, dedicated to providing high-quality medical solutions with precision manufacturing and stringent quality standards.
            </p>
            <div className="mb-6 space-y-2">
              <div className="flex items-center text-sm text-white/80">
                <span className="font-semibold mr-2">Manufacturing License:</span>
                <span>MH/25D/20/CC/2024</span>
              </div>
              <div className="flex items-center text-sm text-white/80">
                <span className="font-semibold mr-2">Certifications:</span>
                <span>ISO 9001:2015, WHO-GMP, CDSCO</span>
              </div>
            </div>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/search' },
                { name: 'Medical Blog', href: '/blog' },
                { name: 'Virtual Consultation', href: '/consultation' },
                { name: 'Drug Interactions', href: '/drug-interactions' },
                { name: 'Symptom Checker', href: '/symptom-checker' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+912227821234" className="text-white/90 hover:text-white transition-colors block">
                    +91 22 2782 1234
                  </a>
                  <span className="text-white/70 text-sm">24/7 Emergency</span>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-white/80 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@medicore.com" className="text-white/90 hover:text-white transition-colors block">
                    info@medicore.com
                  </a>
                  <span className="text-white/70 text-sm">General Inquiries</span>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-white/80 mt-1 flex-shrink-0" />
                <div className="text-white/90 leading-relaxed">
                  <span className="block">C/212 Groma House, Sector 19</span>
                  <span className="block">Plot No. 14C, Vashi</span>
                  <span className="block">Navi Mumbai 400703</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-white/80 text-sm">
                © 2024 Groma Pharma. All rights reserved.
              </p>
              <p className="text-white/70 text-xs mt-1">
                Manufacturing License: MH/25D/20/CC/2024 | ISO 9001:2015 Certified
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {[
                'Privacy Policy',
                'Terms of Service', 
                'FDA Compliance',
                'Pharmacovigilance',
                'Cookie Policy'
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="flex justify-center items-center space-x-8 mt-8 pt-6 border-t border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-white/80">FDA Approved</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Award className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-white/80">ISO Certified</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs text-white/80">Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;