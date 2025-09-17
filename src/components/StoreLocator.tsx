import React, { useState } from 'react';
import { MapPin, Phone, Navigation, Search, X, Clock, Star, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  hours: string;
  distance?: string;
  verified: boolean;
  rating: number;
  reviews: number;
  services: string[];
}

interface StoreLocatorProps {
  isOpen: boolean;
  onClose: () => void;
}

const StoreLocator: React.FC<StoreLocatorProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(false);

  const allStores: Store[] = [
    {
      id: '1',
      name: 'CVS Pharmacy',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      phone: '+1 (555) 123-4567',
      hours: '8:00 AM - 10:00 PM',
      distance: '0.5 mi',
      verified: true,
      rating: 4.8,
      reviews: 245,
      services: ['24/7 Emergency', 'Home Delivery', 'Online Consultation']
    },
    {
      id: '2',
      name: 'Walgreens',
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      phone: '+1 (555) 234-5678',
      hours: '24 Hours',
      distance: '1.2 mi',
      verified: true,
      rating: 4.9,
      reviews: 189,
      services: ['24/7 Service', 'Prescription Delivery', 'Health Checkups']
    },
    {
      id: '3',
      name: 'Rite Aid',
      address: '789 Pine St',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      phone: '+1 (555) 345-6789',
      hours: '9:00 AM - 11:00 PM',
      distance: '2.1 mi',
      verified: true,
      rating: 4.7,
      reviews: 312,
      services: ['Insurance Accepted', 'Senior Discounts', 'Vaccination']
    },
    {
      id: '4',
      name: 'CVS Pharmacy',
      address: '321 Broadway',
      city: 'New York',
      state: 'NY',
      zipCode: '10012',
      phone: '+1 (555) 456-7890',
      hours: '7:00 AM - 11:00 PM',
      distance: '0.8 mi',
      verified: true,
      rating: 4.6,
      reviews: 156,
      services: ['Drive-Thru', 'Flu Shots', 'Photo Services']
    },
    {
      id: '5',
      name: 'Walgreens',
      address: '555 Sunset Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90028',
      phone: '+1 (555) 567-8901',
      hours: '6:00 AM - 12:00 AM',
      distance: '2.3 mi',
      verified: true,
      rating: 4.5,
      reviews: 203,
      services: ['24/7 Service', 'Beauty Products', 'Health Clinic']
    },
    {
      id: '6',
      name: 'Jewel-Osco Pharmacy',
      address: '777 Michigan Ave',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60611',
      phone: '+1 (555) 678-9012',
      hours: '8:00 AM - 9:00 PM',
      distance: '1.5 mi',
      verified: true,
      rating: 4.4,
      reviews: 89,
      services: ['Grocery Pickup', 'Immunizations', 'Medicare Accepted']
    },
    {
      id: '7',
      name: 'HEB Pharmacy',
      address: '999 Congress Ave',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      phone: '+1 (555) 789-0123',
      hours: '8:00 AM - 10:00 PM',
      distance: '0.3 mi',
      verified: true,
      rating: 4.9,
      reviews: 412,
      services: ['Curbside Pickup', 'Spanish Speaking', 'Pet Medications']
    },
    {
      id: '8',
      name: 'Publix Pharmacy',
      address: '111 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zipCode: '33139',
      phone: '+1 (555) 890-1234',
      hours: '9:00 AM - 9:00 PM',
      distance: '1.1 mi',
      verified: true,
      rating: 4.7,
      reviews: 267,
      services: ['Free Antibiotics', 'Diabetes Care', 'Travel Vaccines']
    }
  ];

  React.useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setTimeout(() => {
        let filtered = allStores;
        
        if (searchTerm.trim()) {
          const searchLower = searchTerm.toLowerCase().trim();
          filtered = allStores.filter(store => {
            // Search by city, state, zip code, or store name
            return store.city.toLowerCase().includes(searchLower) ||
                   store.state.toLowerCase().includes(searchLower) ||
                   store.zipCode.includes(searchLower) ||
                   store.name.toLowerCase().includes(searchLower) ||
                   `${store.city}, ${store.state}`.toLowerCase().includes(searchLower);
          });
        }
        
        // Sort by distance (closest first)
        filtered.sort((a, b) => {
          const distanceA = parseFloat(a.distance?.replace(' mi', '') || '999');
          const distanceB = parseFloat(b.distance?.replace(' mi', '') || '999');
          return distanceA - distanceB;
        });
        
        setFilteredStores(filtered);
        setLoading(false);
      }, 500);
    }
  }, [isOpen, searchTerm]);

  const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleDirections = (store: Store) => {
    const query = encodeURIComponent(`${store.address}, ${store.city}, ${store.state}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MapPin className="w-8 h-8 mr-3" />
              <div>
                <h2 className="text-2xl font-bold">Find Stores</h2>
                <p className="text-blue-100">Locate authorized retailers near you</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-6 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter city, state, pin code (e.g., 'Raipur, Chhattisgarh' or '492001')"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mt-2 text-sm text-gray-500">
            Try searching: "Raipur, Chhattisgarh", "Mumbai", "Delhi", "Bangalore", "Chennai"
          </div>
        </div>

        {/* Results */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {loading ? (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Searching stores...</p>
            </div>
          ) : filteredStores.length > 0 ? (
            <div className="space-y-4">
              {filteredStores.map((store) => (
                <div key={store.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center mb-1">
                        <h3 className="font-semibold text-lg">{store.name}</h3>
                        {store.verified && (
                          <div className="ml-2 flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </div>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span>{store.rating} ({store.reviews} reviews)</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-blue-600">{store.distance}</span>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-start text-gray-600 mb-1">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{store.address}, {store.city}, {store.state} {store.zipCode}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{store.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {store.services.slice(0, 3).map((service, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCall(store.phone)}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </button>
                    <button
                      onClick={() => handleDirections(store)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-sm"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Stores Found</h3>
              <p className="text-gray-600">
                {searchTerm 
                  ? `No stores found in "${searchTerm}". Try searching by city, state, or zip code.`
                  : 'Enter a location to find nearby stores'
                }
              </p>
              {searchTerm && (
                <div className="mt-4 text-sm text-gray-500">
                  <p>Available locations: New York NY, Los Angeles CA, Chicago IL, Austin TX, Miami FL</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-sm text-gray-600">
          All listed stores are authorized MediCore retailers • Need help? Call 1800-MEDICORE
        </div>
      </motion.div>
    </div>
  );
};

export default StoreLocator;