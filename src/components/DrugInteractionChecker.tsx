import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, X, Plus, Pill } from 'lucide-react';

const DrugInteractionChecker = () => {
  const [selectedDrugs, setSelectedDrugs] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [interactions, setInteractions] = useState<any[]>([]);

  const availableDrugs = [
    'Cardiomax Pro', 'RespiClear', 'GlucoBalance', 'PainFree Max', 'BacteriaShield', 
    'Aspirin', 'Warfarin', 'Metformin', 'Lisinopril', 'Atorvastatin'
  ];

  const mockInteractions = [
    {
      drug1: 'Cardiomax Pro',
      drug2: 'Warfarin',
      severity: 'moderate',
      description: 'May increase bleeding risk.',
      recommendation: 'Monitor INR levels closely.'
    }
  ];

  const filteredDrugs = availableDrugs.filter(drug =>
    drug.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedDrugs.includes(drug)
  );

  const addDrug = (drug: string) => {
    const newDrugs = [...selectedDrugs, drug];
    setSelectedDrugs(newDrugs);
    setSearchTerm('');
    
    if (newDrugs.length >= 2) {
      const found = mockInteractions.filter(i =>
        newDrugs.includes(i.drug1) && newDrugs.includes(i.drug2)
      );
      setInteractions(found);
    }
  };

  const removeDrug = (drug: string) => {
    const newDrugs = selectedDrugs.filter(d => d !== drug);
    setSelectedDrugs(newDrugs);
    if (newDrugs.length < 2) setInteractions([]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Drug Interaction Checker</h2>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search medications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg"
            />
          </div>

          {searchTerm && filteredDrugs.length > 0 && (
            <div className="mt-2 bg-white border rounded-lg shadow max-h-48 overflow-y-auto">
              {filteredDrugs.slice(0, 5).map((drug) => (
                <button
                  key={drug}
                  onClick={() => addDrug(drug)}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center"
                >
                  <Plus size={16} className="mr-2" />
                  {drug}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-4">Selected Medications</h3>
          {selectedDrugs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Pill size={48} className="mx-auto mb-4 text-gray-300" />
              <p>No medications selected</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedDrugs.map((drug) => (
                <div key={drug} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center">
                  <span className="mr-2">{drug}</span>
                  <button onClick={() => removeDrug(drug)}>
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedDrugs.length >= 2 && (
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Interaction Results</h3>
            {interactions.length === 0 ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <div>
                    <h4 className="font-semibold text-green-900">No Known Interactions</h4>
                    <p className="text-green-800">No significant interactions found.</p>
                  </div>
                </div>
              </div>
            ) : (
              interactions.map((interaction, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="text-orange-500 mr-3 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold mb-2">
                        {interaction.drug1} + {interaction.drug2}
                      </h4>
                      <p className="text-gray-700 mb-3">{interaction.description}</p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 text-sm">{interaction.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start">
            <AlertTriangle className="text-red-500 mr-3 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-red-900 mb-2">Medical Disclaimer</h4>
              <p className="text-red-800 text-sm">
                This tool is for informational purposes only. Always consult healthcare providers before changing medications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugInteractionChecker;