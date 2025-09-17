import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Shield, CheckCircle, AlertTriangle, Clock, Users } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product image and basic info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Quick stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Clinical Overview</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{product.clinicalData.efficacy}</div>
                  <div className="text-sm text-gray-600">Efficacy Rate</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{product.clinicalData.adverseEvents}</div>
                  <div className="text-sm text-gray-600">Adverse Events</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                  <p className="text-lg text-gray-600">{product.category}</p>
                </div>
                {product.prescription && (
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Rx Only
                  </span>
                )}
              </div>

              <div className="flex items-center mb-6">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  {product.inStock ? (
                    <>
                      <CheckCircle className="text-green-500 mr-2" size={20} />
                      <span className="text-green-600 font-medium">In Stock</span>
                    </>
                  ) : (
                    <>
                      <Clock className="text-orange-500 mr-2" size={20} />
                      <span className="text-orange-600 font-medium">Out of Stock</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{product.detailedDescription}</p>

              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">NDC Number:</span>
                    <span className="text-2xl font-bold text-blue-600 ml-2">₹{product.price.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">FDA Approved:</span>
                    <span className="text-gray-600 ml-2">{product.fdaApproved}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Dosage Range:</span>
                    <span className="text-gray-600 ml-2">{product.dosage}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Manufacturer:</span>
                    <span className="text-gray-600 ml-2">{product.manufacturer}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Indications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={24} />
                Indications
              </h3>
              <ul className="space-y-2">
                {product.indications.map((indication, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {indication}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contraindications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="text-red-500 mr-2" size={24} />
                Contraindications
              </h3>
              <ul className="space-y-2">
                {product.contraindications.map((contraindication, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {contraindication}
                  </li>
                ))}
              </ul>
            </div>

            {/* Side Effects */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="text-orange-500 mr-2" size={24} />
                Side Effects
              </h3>
              <div className="space-y-3">
                {product.sideEffects.map((sideEffect, index) => (
                  <div key={index} className="flex items-start">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mr-3 mt-0.5 ${
                      sideEffect.severity === 'common' ? 'bg-yellow-100 text-yellow-800' :
                      sideEffect.severity === 'uncommon' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {sideEffect.severity}
                    </span>
                    <span className="text-gray-700">{sideEffect.effect}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Important notice */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertTriangle className="text-red-500 mr-3 mt-1" size={24} />
            <div>
              <h4 className="text-lg font-semibold text-red-900 mb-2">Important Medical Information</h4>
              <p className="text-red-800 leading-relaxed">
                This medication requires a valid prescription from a licensed healthcare provider. 
                Please consult with your doctor before starting any new medication. Do not stop taking 
                this medication without consulting your healthcare provider. For medical emergencies, 
                call 911 or contact our 24/7 medical hotline at 1-800-MED-HELP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;