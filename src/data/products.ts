import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Ramedix-Card Plus',
    description: 'Premium cardiovascular support medication for comprehensive heart health management.',
    detailedDescription: 'Ramedix-Card Plus is our flagship cardiovascular medication, meticulously formulated to provide superior blood pressure control and comprehensive heart protection. Manufactured in our state-of-the-art facility in Navi Mumbai with stringent quality controls.',
    price: 3799,
    category: 'Cardiovascular',
    image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800',
    inStock: true,
    prescription: true,
    rating: 4.8,
    reviews: 1247,
    activeIngredient: 'Lisinopril 10mg',
    dosage: '10-40mg daily',
    manufacturer: 'Ramedix Pharmaceutical',
    ndc: '12345-678-90',
    fdaApproved: '2019-03-15',
    indications: [
      'Hypertension (high blood pressure)',
      'Heart failure',
      'Post-myocardial infarction',
      'Diabetic nephropathy'
    ],
    contraindications: [
      'Pregnancy',
      'Angioedema history',
      'Bilateral renal artery stenosis',
      'Hyperkalemia'
    ],
    sideEffects: [
      { effect: 'Dry cough', severity: 'common' },
      { effect: 'Dizziness', severity: 'common' },
      { effect: 'Hyperkalemia', severity: 'uncommon' },
      { effect: 'Angioedema', severity: 'rare' }
    ],
    clinicalData: {
      efficacy: '85%',
      adverseEvents: '12%'
    }
  },
  {
    id: 2,
    name: 'Ramedix-Respir',
    description: 'Advanced respiratory relief solution for asthma and COPD management.',
    detailedDescription: 'Ramedix-Respir delivers rapid bronchodilation and sustained respiratory relief. Our precision-engineered delivery system ensures optimal drug deposition in the lungs, manufactured under strict pharmaceutical guidelines.',
    price: 2699,
    category: 'Respiratory',
    image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
    inStock: true,
    prescription: true,
    rating: 4.6,
    reviews: 892,
    activeIngredient: 'Albuterol Sulfate 90mcg',
    dosage: '2 puffs every 4-6 hours',
    manufacturer: 'Ramedix Pharmaceutical',
    ndc: '12345-679-01',
    fdaApproved: '2020-07-22',
    indications: [
      'Asthma',
      'COPD',
      'Exercise-induced bronchospasm',
      'Reversible airway obstruction'
    ],
    contraindications: [
      'Hypersensitivity to albuterol',
      'Cardiac arrhythmias',
      'Severe cardiovascular disease'
    ],
    sideEffects: [
      { effect: 'Tremor', severity: 'common' },
      { effect: 'Nervousness', severity: 'common' },
      { effect: 'Headache', severity: 'common' },
      { effect: 'Palpitations', severity: 'uncommon' }
    ],
    clinicalData: {
      efficacy: '92%',
      adverseEvents: '8%'
    }
  },
  {
    id: 3,
    name: 'Ramedix-Gluco',
    description: 'Premium diabetes management solution with advanced glucose control technology.',
    detailedDescription: 'Ramedix-Gluco provides superior glycemic control for type 2 diabetes patients. Our advanced formulation helps maintain stable blood sugar levels while supporting overall metabolic health.',
    price: 5599,
    category: 'Diabetes',
    image: 'https://images.pexels.com/photos/3825371/pexels-photo-3825371.jpeg?auto=compress&cs=tinysrgb&w=800',
    inStock: true,
    prescription: true,
    rating: 4.7,
    reviews: 1156,
    activeIngredient: 'Metformin HCl 1000mg',
    dosage: '500-2000mg daily',
    manufacturer: 'Ramedix Pharmaceutical',
    ndc: '12345-680-12',
    fdaApproved: '2018-11-08',
    indications: [
      'Type 2 diabetes mellitus',
      'Prediabetes',
      'Polycystic ovary syndrome',
      'Insulin resistance'
    ],
    contraindications: [
      'Severe renal impairment',
      'Metabolic acidosis',
      'Diabetic ketoacidosis',
      'Severe hepatic impairment'
    ],
    sideEffects: [
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Diarrhea', severity: 'common' },
      { effect: 'Metallic taste', severity: 'common' },
      { effect: 'Lactic acidosis', severity: 'rare' }
    ],
    clinicalData: {
      efficacy: '78%',
      adverseEvents: '15%'
    }
  },
  {
    id: 4,
    name: 'Ramedix-Pain Relief',
    description: 'Advanced extended-release pain management for chronic conditions.',
    detailedDescription: 'Ramedix-Pain Relief provides sustained 12-hour pain relief for moderate to severe chronic pain conditions. Our extended-release technology ensures consistent pain control with optimal patient compliance.',
    price: 7499,
    category: 'Pain Management',
    image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800',
    inStock: false,
    prescription: true,
    rating: 4.5,
    reviews: 743,
    activeIngredient: 'Oxycodone HCl 20mg',
    dosage: '10-80mg every 12 hours',
    manufacturer: 'Ramedix Pharmaceutical',
    ndc: '12345-681-23',
    fdaApproved: '2017-05-30',
    indications: [
      'Chronic pain',
      'Cancer pain',
      'Post-operative pain',
      'Severe arthritis pain'
    ],
    contraindications: [
      'Respiratory depression',
      'Acute or severe bronchial asthma',
      'Paralytic ileus',
      'Hypersensitivity to opioids'
    ],
    sideEffects: [
      { effect: 'Constipation', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Drowsiness', severity: 'common' },
      { effect: 'Respiratory depression', severity: 'uncommon' }
    ],
    clinicalData: {
      efficacy: '88%',
      adverseEvents: '22%'
    }
  },
  {
    id: 5,
    name: 'Ramedix-Antibiotic',
    description: 'Premium broad-spectrum antibiotic for comprehensive bacterial infection treatment.',
    detailedDescription: 'Ramedix-Antibiotic is our advanced broad-spectrum antibiotic, effective against a wide range of bacterial infections. Formulated with precision for excellent tissue penetration and sustained antimicrobial activity.',
    price: 2399,
    category: 'Antibiotics',
    image: 'https://images.pexels.com/photos/3825371/pexels-photo-3825371.jpeg?auto=compress&cs=tinysrgb&w=800',
    inStock: true,
    prescription: true,
    rating: 4.4,
    reviews: 567,
    activeIngredient: 'Amoxicillin 875mg',
    dosage: '875mg twice daily',
    manufacturer: 'Ramedix Pharmaceutical',
    ndc: '12345-682-34',
    fdaApproved: '2021-01-12',
    indications: [
      'Respiratory tract infections',
      'Urinary tract infections',
      'Skin and soft tissue infections',
      'Dental infections'
    ],
    contraindications: [
      'Penicillin allergy',
      'Severe renal impairment',
      'Mononucleosis',
      'Previous allergic reaction'
    ],
    sideEffects: [
      { effect: 'Diarrhea', severity: 'common' },
      { effect: 'Nausea', severity: 'common' },
      { effect: 'Skin rash', severity: 'uncommon' },
      { effect: 'Severe allergic reaction', severity: 'rare' }
    ],
    clinicalData: {
      efficacy: '91%',
      adverseEvents: '18%'
    }
  },
  {
    id: 6,
    name: 'Ramedix-Heart Shield',
    description: 'Advanced preventive cardiac medication for comprehensive heart protection.',
    detailedDescription: 'Ramedix-Heart Shield is engineered for primary and secondary prevention of cardiovascular events in high-risk patients. Our advanced formulation provides comprehensive cardiac protection through multiple therapeutic mechanisms.',
    price: 4599,
    category: 'Cardiovascular',
    image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800',
    inStock: true,
    prescription: true,
    rating: 4.9,
    reviews: 1834,
    activeIngredient: 'Atorvastatin 40mg',
    dosage: '20-80mg daily',
    manufacturer: 'Ramedix Pharmaceutical',
    ndc: '12345-683-45',
    fdaApproved: '2016-09-18',
    indications: [
      'Hypercholesterolemia',
      'Cardiovascular disease prevention',
      'Familial hypercholesterolemia',
      'Mixed dyslipidemia'
    ],
    contraindications: [
      'Active liver disease',
      'Pregnancy',
      'Breastfeeding',
      'Hypersensitivity to statins'
    ],
    sideEffects: [
      { effect: 'Muscle pain', severity: 'common' },
      { effect: 'Headache', severity: 'common' },
      { effect: 'Elevated liver enzymes', severity: 'uncommon' },
      { effect: 'Rhabdomyolysis', severity: 'rare' }
    ],
    clinicalData: {
      efficacy: '89%',
      adverseEvents: '11%'
    }
  }
];