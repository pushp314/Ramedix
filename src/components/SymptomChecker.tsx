import React, { useState } from 'react';
import { Search, AlertCircle, CheckCircle, ArrowRight, Stethoscope, X } from 'lucide-react';

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const commonSymptoms = [
    'Headache', 'Fever', 'Cough', 'Sore throat', 'Fatigue', 'Nausea',
    'Chest pain', 'Shortness of breath', 'Dizziness', 'Back pain'
  ];

  const mockResults = [
    {
      condition: 'Upper Respiratory Infection',
      probability: 85,
      description: 'Common viral infection affecting nose, throat, and sinuses.',
      medications: ['RespiClear', 'Throat Soothers'],
      recommendations: ['Rest and stay hydrated', 'Use pain relievers', 'See doctor if symptoms worsen']
    }
  ];

  const filteredSymptoms = commonSymptoms.filter(symptom =>
    symptom.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSymptoms.includes(symptom)
  );

  const addSymptom = (symptom: string) => {
    setSelectedSymptoms([...selectedSymptoms, symptom]);
    setSearchTerm('');
  };

  const removeSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    if (selectedSymptoms.length <= 1) {
      setShowResults(false);
      setResults([]);
    }
  };

  const analyzeSymptoms = () => {
    if (selectedSymptoms.length > 0) {
      setResults(mockResults);
      setShowResults(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-8">
        <div className="text-center mb-8">
          <Stethoscope className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Symptom Checker</h2>
          <p className="text-gray-600">
            Describe symptoms to get information about possible conditions.
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search symptoms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg"
            />
          </div>

          {searchTerm && filteredSymptoms.length > 0 && (
            <div className="mt-2 bg-white border rounded-lg shadow max-h-48 overflow-y-auto">
              {filteredSymptoms.slice(0, 5).map((symptom) => (
                <button
                  key={symptom}
                  onClick={() => addSymptom(symptom)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  {symptom}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-4">Selected Symptoms</h3>
          {selectedSymptoms.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <AlertCircle size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No symptoms selected</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {selectedSymptoms.map((symptom) => (
                  <div key={symptom} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center">
                    <span className="mr-2">{symptom}</span>
                    <button onClick={() => removeSymptom(symptom)}>
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
              
              <button
                onClick={analyzeSymptoms}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center"
              >
                Analyze Symptoms
                <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          )}
        </div>

        {showResults && (
          <div className="space-y-6">
            <h3 className="font-semibold">Possible Conditions</h3>
            
            {results.map((result, index) => (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">{result.condition}</h4>
                    <p className="text-gray-600">{result.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{result.probability}%</div>
                    <div className="text-sm text-gray-500">Match</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Recommended Medications</h5>
                    <ul className="space-y-1">
                      {result.medications.map((med: string, i: number) => (
                        <li key={i} className="text-blue-600">• {med}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Recommendations</h5>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {result.recommendations.map((rec: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertCircle className="text-red-500 mr-3 mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-red-900 mb-2">Emergency Warning</h4>
              <p className="text-red-800 text-sm">
                Call 911 for chest pain, difficulty breathing, severe pain, stroke signs, or loss of consciousness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;