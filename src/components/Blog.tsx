import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, Search, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const blogPosts = [
    {
      id: '1',
      title: 'Understanding Cardiovascular Health: Latest Advances in Treatment',
      excerpt: 'Explore the latest developments in cardiovascular medicine and how modern treatments are improving patient outcomes across India.',
      content: `Cardiovascular disease remains the leading cause of death in India, but advances in pharmaceutical treatments have dramatically improved patient outcomes. In this comprehensive guide, we explore the latest developments in cardiovascular medicine.

## The Current Scenario in India

India faces a significant burden of cardiovascular diseases, with over 54 million people affected. The rising prevalence is attributed to lifestyle changes, urbanization, and genetic predisposition.

## Modern Treatment Approaches

### 1. Advanced Medications
- ACE inhibitors for blood pressure control
- Statins for cholesterol management
- Beta-blockers for heart rhythm regulation
- Antiplatelet therapy for clot prevention

### 2. Personalized Medicine
Modern cardiovascular treatment now focuses on personalized approaches based on genetic markers and individual risk factors.

## Prevention Strategies

### Lifestyle Modifications
- Regular exercise (150 minutes per week)
- Heart-healthy diet rich in fruits and vegetables
- Stress management techniques
- Smoking cessation programs

### Regular Monitoring
- Blood pressure checks
- Cholesterol level monitoring
- Diabetes screening
- Regular cardiac evaluations

## The Role of Groma Pharma

At Groma Pharma, we're committed to developing innovative cardiovascular medications that address the specific needs of Indian patients. Our research focuses on:

- Affordable treatment options
- Culturally appropriate formulations
- Improved patient compliance
- Reduced side effects

## Future Outlook

The future of cardiovascular medicine in India looks promising with:
- Telemedicine integration
- AI-powered diagnostics
- Precision medicine approaches
- Community health programs

Remember to always consult with your healthcare provider before making any changes to your medication regimen.`,
      author: 'Dr. Rajesh Kumar',
      publishDate: '2024-12-15',
      category: 'Cardiovascular Health',
      tags: ['heart health', 'prevention', 'medication', 'lifestyle'],
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 8,
      views: 2547,
      likes: 189
    },
    {
      id: '2',
      title: 'Diabetes Management in India: A Comprehensive Guide',
      excerpt: 'Learn about effective diabetes management strategies tailored for Indian patients, including dietary recommendations and medication options.',
      content: `Diabetes has reached epidemic proportions in India, with over 77 million people affected. This comprehensive guide covers modern management strategies specifically designed for Indian patients.

## Understanding Diabetes in India

India is often called the "Diabetes Capital of the World" due to the high prevalence of both Type 1 and Type 2 diabetes. Genetic predisposition, lifestyle factors, and dietary habits contribute to this epidemic.

## Types of Diabetes

### Type 1 Diabetes
- Autoimmune condition
- Requires insulin therapy
- Usually diagnosed in childhood
- Affects about 10% of diabetic patients

### Type 2 Diabetes
- Most common form (90% of cases)
- Related to lifestyle and genetics
- Can often be managed with medication and lifestyle changes
- Increasing in younger populations

## Modern Treatment Approaches

### Medication Options
1. **Metformin**: First-line treatment for Type 2 diabetes
2. **Insulin**: Essential for Type 1 and advanced Type 2
3. **GLP-1 Agonists**: Newer medications with weight loss benefits
4. **SGLT2 Inhibitors**: Provide cardiovascular protection

### Lifestyle Management
- **Diet**: Focus on complex carbohydrates, fiber-rich foods
- **Exercise**: Regular physical activity for glucose control
- **Monitoring**: Regular blood sugar testing
- **Weight Management**: Maintaining healthy BMI

## Indian Dietary Considerations

### Traditional Foods and Diabetes
- Whole grains like brown rice and millets
- Legumes and pulses for protein
- Vegetables and fruits in moderation
- Spices with anti-diabetic properties (turmeric, fenugreek)

### Foods to Limit
- Refined sugars and sweets
- White rice and refined flour
- Fried foods and trans fats
- Sugary beverages

## Groma Pharma's Contribution

Our diabetes medications are specifically formulated considering:
- Indian dietary patterns
- Genetic factors affecting drug metabolism
- Affordability and accessibility
- Cultural preferences in medication forms

## Prevention Strategies

### Primary Prevention
- Healthy lifestyle from childhood
- Regular health screenings
- Weight management
- Physical activity promotion

### Secondary Prevention
- Early detection and treatment
- Complication prevention
- Regular monitoring
- Patient education

## Managing Complications

### Common Complications
- Diabetic neuropathy
- Retinopathy
- Nephropathy
- Cardiovascular disease

### Prevention Measures
- Regular medical check-ups
- Blood pressure control
- Cholesterol management
- Foot care

## Technology in Diabetes Care

### Modern Tools
- Continuous glucose monitors
- Insulin pumps
- Mobile health apps
- Telemedicine consultations

## Conclusion

Effective diabetes management requires a comprehensive approach combining medication, lifestyle changes, and regular monitoring. With proper care, people with diabetes can lead healthy, productive lives.

Always consult with your healthcare provider for personalized diabetes management plans.`,
      author: 'Dr. Priya Sharma',
      publishDate: '2024-12-10',
      category: 'Diabetes Care',
      tags: ['diabetes', 'blood sugar', 'diet', 'medication'],
      image: 'https://images.pexels.com/photos/3825371/pexels-photo-3825371.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 10,
      views: 3421,
      likes: 267
    },
    {
      id: '3',
      title: 'Respiratory Health: Managing Asthma and COPD in Indian Climate',
      excerpt: 'Discover effective strategies for managing respiratory conditions in India\'s diverse climate and pollution challenges.',
      content: `Respiratory diseases are a major health concern in India, exacerbated by air pollution, climate variations, and lifestyle factors. This guide provides comprehensive information on managing asthma and COPD.

## Respiratory Health Challenges in India

India faces unique respiratory health challenges due to:
- High levels of air pollution
- Seasonal variations
- Indoor air pollution from cooking fuels
- Occupational exposures
- Genetic predisposition

## Understanding Asthma

### What is Asthma?
Asthma is a chronic respiratory condition characterized by:
- Airway inflammation
- Bronchial hyperresponsiveness
- Variable airflow obstruction
- Recurring symptoms

### Common Triggers in India
- Air pollution (PM2.5, PM10)
- Dust mites
- Pollen from local plants
- Weather changes
- Respiratory infections
- Smoke from cooking and vehicles

## COPD: A Growing Concern

### Understanding COPD
Chronic Obstructive Pulmonary Disease includes:
- Chronic bronchitis
- Emphysema
- Progressive airflow limitation
- Persistent respiratory symptoms

### Risk Factors
- Smoking (active and passive)
- Biomass fuel exposure
- Occupational dust exposure
- Air pollution
- Genetic factors

## Treatment Strategies

### Asthma Management
1. **Controller Medications**
   - Inhaled corticosteroids
   - Long-acting beta-agonists
   - Leukotriene modifiers

2. **Rescue Medications**
   - Short-acting beta-agonists
   - Quick-relief bronchodilators

### COPD Treatment
1. **Bronchodilators**
   - Short and long-acting
   - Beta-agonists and anticholinergics

2. **Anti-inflammatory Medications**
   - Inhaled corticosteroids
   - Oral medications for severe cases

## Environmental Management

### Indoor Air Quality
- Use of air purifiers
- Proper ventilation
- Avoiding indoor smoking
- Regular cleaning to reduce dust mites

### Outdoor Precautions
- Monitor air quality index
- Limit outdoor activities during high pollution
- Use masks when necessary
- Plan activities during cleaner air periods

## Groma Pharma's Respiratory Solutions

Our respiratory medications are designed for:
- Indian environmental conditions
- Easy-to-use delivery systems
- Affordable pricing
- Effective symptom control

### Our Product Range
- Bronchodilator inhalers
- Combination therapies
- Nebulizer solutions
- Oral medications

## Lifestyle Modifications

### Exercise and Respiratory Health
- Regular physical activity
- Breathing exercises
- Yoga and pranayama
- Gradual activity increase

### Dietary Considerations
- Anti-inflammatory foods
- Adequate hydration
- Avoiding trigger foods
- Maintaining healthy weight

## Seasonal Considerations

### Monsoon Season
- Increased humidity and mold
- Respiratory infections
- Medication storage concerns

### Winter Months
- Cold air triggers
- Increased pollution levels
- Heating-related exposures

### Summer Challenges
- Heat and humidity
- Dust storms
- Dehydration risks

## Emergency Management

### Recognizing Severe Symptoms
- Severe breathlessness
- Inability to speak in sentences
- Blue lips or fingernails
- Extreme fatigue

### Action Plan
- Use rescue medications
- Seek immediate medical help
- Have emergency contacts ready
- Know nearest healthcare facility

## Prevention Strategies

### Primary Prevention
- Avoid smoking
- Reduce exposure to pollutants
- Maintain good hygiene
- Get vaccinated against respiratory infections

### Secondary Prevention
- Regular medical check-ups
- Proper medication adherence
- Environmental control measures
- Early treatment of symptoms

## Technology in Respiratory Care

### Modern Devices
- Smart inhalers
- Peak flow meters
- Pulse oximeters
- Air quality monitors

### Digital Health
- Symptom tracking apps
- Medication reminders
- Telemedicine consultations
- Educational resources

## Conclusion

Managing respiratory conditions in India requires a comprehensive approach that considers environmental factors, lifestyle modifications, and appropriate medical treatment. With proper management, patients can maintain good quality of life.

Always work with your healthcare provider to develop a personalized treatment plan for your respiratory condition.`,
      author: 'Dr. Arjun Patel',
      publishDate: '2024-12-05',
      category: 'Respiratory Health',
      tags: ['asthma', 'COPD', 'air pollution', 'breathing'],
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 12,
      views: 1876,
      likes: 143
    },
    {
      id: '4',
      title: 'Pain Management: Modern Approaches to Chronic Pain in India',
      excerpt: 'Explore comprehensive pain management strategies that combine traditional and modern approaches for effective relief.',
      content: `Chronic pain affects millions of Indians, significantly impacting quality of life. This comprehensive guide explores modern pain management approaches that combine evidence-based medicine with traditional practices.

## Understanding Chronic Pain in India

Chronic pain is a complex condition affecting over 19% of the Indian population. Common causes include:
- Arthritis and joint disorders
- Back and neck pain
- Neuropathic pain
- Cancer-related pain
- Post-surgical pain

## Types of Chronic Pain

### Nociceptive Pain
- Caused by tissue damage
- Responds well to conventional painkillers
- Examples: arthritis, injury-related pain

### Neuropathic Pain
- Caused by nerve damage
- Requires specialized treatment
- Examples: diabetic neuropathy, post-herpetic neuralgia

### Mixed Pain
- Combination of nociceptive and neuropathic
- Requires multimodal treatment approach

## Modern Pain Management Strategies

### Pharmacological Approaches
1. **Non-opioid Analgesics**
   - NSAIDs for inflammation
   - Acetaminophen for mild to moderate pain
   - Topical preparations

2. **Adjuvant Medications**
   - Anticonvulsants for neuropathic pain
   - Antidepressants for chronic pain
   - Muscle relaxants

3. **Opioid Medications**
   - Reserved for severe pain
   - Careful monitoring required
   - Risk-benefit assessment

### Non-Pharmacological Approaches
1. **Physical Therapy**
   - Exercise programs
   - Manual therapy
   - Modalities (heat, cold, TENS)

2. **Psychological Support**
   - Cognitive behavioral therapy
   - Stress management
   - Relaxation techniques

## Traditional Indian Approaches

### Ayurvedic Medicine
- Herbal formulations
- Panchakarma treatments
- Lifestyle modifications
- Dietary recommendations

### Yoga and Meditation
- Asanas for pain relief
- Pranayama for stress reduction
- Meditation for pain perception
- Mindfulness practices

### Other Traditional Methods
- Acupuncture
- Massage therapy
- Naturopathy
- Homeopathy

## Integrative Pain Management

### Combining Approaches
- Modern medicine + traditional practices
- Evidence-based integration
- Personalized treatment plans
- Holistic patient care

### Benefits of Integration
- Reduced medication dependence
- Improved quality of life
- Cultural acceptance
- Cost-effective solutions

## Groma Pharma's Pain Management Solutions

Our pain management portfolio includes:
- Extended-release formulations
- Combination therapies
- Topical preparations
- Patient-friendly dosing

### Innovation Focus
- Abuse-deterrent formulations
- Improved bioavailability
- Reduced side effects
- Better patient compliance

## Lifestyle Modifications

### Exercise and Movement
- Low-impact activities
- Strength training
- Flexibility exercises
- Gradual progression

### Sleep Hygiene
- Regular sleep schedule
- Comfortable sleep environment
- Avoiding stimulants
- Relaxation before bed

### Stress Management
- Identification of stressors
- Coping strategies
- Social support
- Professional counseling

### Nutrition
- Anti-inflammatory diet
- Adequate hydration
- Weight management
- Avoiding trigger foods

## Special Considerations in India

### Cultural Factors
- Family involvement in care
- Religious and spiritual beliefs
- Traditional healing preferences
- Social stigma around pain

### Healthcare Access
- Rural vs urban disparities
- Specialist availability
- Cost considerations
- Insurance coverage

### Environmental Factors
- Climate effects on pain
- Pollution and inflammation
- Occupational hazards
- Lifestyle factors

## Pain Assessment and Monitoring

### Assessment Tools
- Visual analog scales
- Numerical rating scales
- Functional assessment
- Quality of life measures

### Regular Monitoring
- Pain intensity tracking
- Functional improvement
- Side effect monitoring
- Treatment adherence

## Preventing Chronic Pain

### Primary Prevention
- Injury prevention
- Ergonomic practices
- Regular exercise
- Healthy lifestyle

### Secondary Prevention
- Early intervention
- Proper acute pain management
- Risk factor modification
- Patient education

## Technology in Pain Management

### Digital Health Tools
- Pain tracking apps
- Telemedicine consultations
- Virtual reality therapy
- Wearable devices

### Advanced Treatments
- Interventional procedures
- Neuromodulation
- Regenerative medicine
- Precision medicine

## Patient Education and Support

### Self-Management Skills
- Pain coping strategies
- Medication management
- Activity pacing
- Goal setting

### Support Systems
- Patient support groups
- Family education
- Healthcare team coordination
- Community resources

## Conclusion

Effective pain management in India requires a comprehensive, culturally sensitive approach that combines modern medicine with traditional practices. The goal is not just pain relief but improved function and quality of life.

Work with your healthcare provider to develop a personalized pain management plan that addresses your specific needs and preferences.`,
      author: 'Dr. Meera Krishnan',
      publishDate: '2024-11-28',
      category: 'Pain Management',
      tags: ['chronic pain', 'pain relief', 'traditional medicine', 'lifestyle'],
      image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 11,
      views: 2134,
      likes: 198
    },
    {
      id: '5',
      title: 'Antibiotic Resistance: A Growing Challenge in Indian Healthcare',
      excerpt: 'Understanding antibiotic resistance and the importance of responsible antibiotic use in combating this global health threat.',
      content: `Antibiotic resistance is one of the most pressing challenges facing Indian healthcare today. This comprehensive guide explores the causes, consequences, and solutions to this growing problem.

## Understanding Antibiotic Resistance

Antibiotic resistance occurs when bacteria evolve to survive exposure to antibiotics that would normally kill them or stop their growth. This natural process is accelerated by:
- Overuse of antibiotics
- Inappropriate prescribing
- Poor infection control
- Agricultural use of antibiotics

## The Situation in India

India faces unique challenges with antibiotic resistance:
- High burden of infectious diseases
- Easy availability of antibiotics
- Self-medication practices
- Inadequate infection control
- Limited diagnostic facilities

### Alarming Statistics
- 70% of bacteria causing hospital infections are resistant to at least one antibiotic
- 50,000+ deaths annually attributed to antibiotic resistance
- Rising resistance rates across all major bacterial pathogens

## Common Resistant Bacteria in India

### MRSA (Methicillin-Resistant Staphylococcus Aureus)
- Common in hospitals
- Causes skin and soft tissue infections
- Resistant to multiple antibiotics

### ESBL-Producing Bacteria
- Extended-spectrum beta-lactamase producers
- Common in urinary tract infections
- Resistant to most common antibiotics

### MDR-TB (Multi-Drug Resistant Tuberculosis)
- Resistant to first-line TB drugs
- Requires prolonged treatment
- Higher mortality rates

### Carbapenem-Resistant Enterobacteriaceae (CRE)
- Resistant to last-resort antibiotics
- High mortality rates
- Limited treatment options

## Causes of Antibiotic Resistance

### Overuse and Misuse
- Unnecessary prescriptions
- Incomplete treatment courses
- Self-medication
- Prophylactic overuse

### Healthcare Factors
- Poor infection control
- Inadequate sterilization
- Overcrowded facilities
- Limited isolation facilities

### Agricultural Use
- Growth promotion in livestock
- Prophylactic use in animals
- Environmental contamination
- Food chain contamination

### Regulatory Issues
- Weak enforcement
- Over-the-counter availability
- Counterfeit medications
- Lack of prescription monitoring

## Consequences of Antibiotic Resistance

### Medical Impact
- Treatment failures
- Prolonged illness
- Increased mortality
- Limited treatment options

### Economic Burden
- Higher healthcare costs
- Longer hospital stays
- Lost productivity
- Research and development costs

### Social Impact
- Reduced quality of life
- Family burden
- Community spread
- Healthcare system strain

## Combating Antibiotic Resistance

### Responsible Prescribing
- Evidence-based guidelines
- Diagnostic testing before prescribing
- Appropriate antibiotic selection
- Optimal dosing and duration

### Patient Education
- Understanding when antibiotics are needed
- Completing prescribed courses
- Not sharing antibiotics
- Preventing infections

### Infection Prevention
- Hand hygiene
- Vaccination programs
- Safe food practices
- Wound care

### Surveillance Systems
- Resistance monitoring
- Prescription tracking
- Outbreak detection
- Data sharing

## Groma Pharma's Role

### Responsible Manufacturing
- Quality assurance
- Environmental protection
- Waste management
- Regulatory compliance

### Research and Development
- New antibiotic development
- Combination therapies
- Diagnostic tools
- Alternative treatments

### Education and Awareness
- Healthcare provider training
- Patient education materials
- Community outreach
- Policy advocacy

## Alternative Approaches

### Bacteriophage Therapy
- Viruses that kill bacteria
- Specific targeting
- Reduced resistance development
- Promising research results

### Immunotherapy
- Boosting immune response
- Monoclonal antibodies
- Vaccines
- Adjuvant therapies

### Natural Products
- Plant-based compounds
- Traditional medicine
- Antimicrobial peptides
- Synergistic combinations

## Prevention Strategies

### Individual Level
- Practice good hygiene
- Get vaccinated
- Use antibiotics responsibly
- Maintain healthy lifestyle

### Healthcare Level
- Implement infection control
- Follow prescribing guidelines
- Monitor resistance patterns
- Educate staff and patients

### Community Level
- Public awareness campaigns
- School education programs
- Media engagement
- Policy advocacy

### National Level
- Regulatory frameworks
- Surveillance systems
- Research funding
- International cooperation

## The One Health Approach

### Human Health
- Clinical practices
- Patient care
- Public health measures
- Healthcare policies

### Animal Health
- Veterinary practices
- Livestock management
- Aquaculture
- Wildlife conservation

### Environmental Health
- Waste management
- Water quality
- Soil contamination
- Ecosystem protection

## Future Directions

### Technology Solutions
- Rapid diagnostics
- Artificial intelligence
- Precision medicine
- Digital health tools

### Policy Interventions
- Prescription regulations
- Quality control
- International cooperation
- Funding mechanisms

### Research Priorities
- New drug development
- Resistance mechanisms
- Diagnostic tools
- Prevention strategies

## Global Initiatives

### WHO Action Plan
- Awareness and understanding
- Surveillance and research
- Infection prevention
- Optimizing antimicrobial use
- Sustainable investment

### Indian National Action Plan
- Strategic objectives
- Implementation framework
- Monitoring mechanisms
- Stakeholder engagement

## Conclusion

Antibiotic resistance is a complex challenge that requires coordinated action from all stakeholders. By working together - healthcare providers, patients, policymakers, and pharmaceutical companies - we can preserve the effectiveness of antibiotics for future generations.

Every individual has a role to play in combating antibiotic resistance. Use antibiotics responsibly and help spread awareness about this critical health issue.`,
      author: 'Dr. Rajesh Kumar',
      publishDate: '2024-11-20',
      category: 'Infectious Disease',
      tags: ['antibiotics', 'resistance', 'infection control', 'public health'],
      image: 'https://images.pexels.com/photos/3825371/pexels-photo-3825371.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 14,
      views: 1654,
      likes: 127
    },
    {
      id: '6',
      title: 'Mental Health and Pharmaceuticals: Breaking the Stigma in India',
      excerpt: 'Addressing mental health challenges in India and the role of modern pharmaceuticals in treatment and recovery.',
      content: `Mental health is finally gaining recognition as a critical healthcare issue in India. This comprehensive guide explores the current landscape, challenges, and the role of pharmaceuticals in mental health treatment.

## Mental Health in India: Current Scenario

India faces a significant mental health burden:
- 150+ million people need mental health care
- Less than 30% receive treatment
- Severe shortage of mental health professionals
- Deep-rooted stigma and discrimination

### Common Mental Health Conditions
- Depression and anxiety disorders
- Bipolar disorder
- Schizophrenia and psychotic disorders
- Substance use disorders
- Post-traumatic stress disorder

## Understanding Mental Health Stigma

### Cultural Factors
- Traditional beliefs about mental illness
- Family honor and social status
- Religious and spiritual interpretations
- Gender-specific stigma

### Consequences of Stigma
- Delayed treatment seeking
- Poor treatment adherence
- Social isolation
- Discrimination in employment and education

## Modern Pharmaceutical Treatments

### Antidepressants
- SSRIs (Selective Serotonin Reuptake Inhibitors)
- SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)
- Tricyclic antidepressants
- Atypical antidepressants

### Anti-anxiety Medications
- Benzodiazepines (short-term use)
- Buspirone
- Beta-blockers for physical symptoms
- Antihistamines

### Mood Stabilizers
- Lithium
- Anticonvulsants
- Atypical antipsychotics
- Combination therapies

### Antipsychotics
- First-generation (typical)
- Second-generation (atypical)
- Long-acting injectable formulations
- Clozapine for treatment-resistant cases

## Challenges in Mental Health Treatment

### Access Issues
- Limited availability of specialists
- High cost of treatment
- Geographic disparities
- Insurance coverage gaps

### Cultural Barriers
- Preference for traditional healers
- Family decision-making
- Language barriers
- Religious considerations

### Healthcare System Challenges
- Inadequate training of primary care providers
- Limited integration of mental health services
- Shortage of mental health facilities
- Poor referral systems

## Groma Pharma's Mental Health Initiative

### Product Development
- Affordable generic medications
- Patient-friendly formulations
- Combination therapies
- Extended-release preparations

### Education and Awareness
- Healthcare provider training
- Patient education materials
- Community outreach programs
- Stigma reduction campaigns

### Research Focus
- Indian population studies
- Cultural adaptation of treatments
- Side effect profiles
- Treatment adherence

## Integrative Approaches

### Combining Medication and Therapy
- Psychopharmacology
- Cognitive behavioral therapy
- Interpersonal therapy
- Family therapy

### Traditional and Modern Integration
- Yoga and meditation
- Ayurvedic principles
- Spiritual counseling
- Community support

## Special Populations

### Children and Adolescents
- Unique considerations
- Family involvement
- School-based interventions
- Developmental factors

### Elderly Population
- Age-related changes
- Medication interactions
- Cognitive considerations
- Social support needs

### Women's Mental Health
- Hormonal influences
- Pregnancy and postpartum
- Gender-specific stressors
- Cultural expectations

## Treatment Adherence

### Common Barriers
- Side effects
- Cost of medications
- Stigma
- Lack of family support

### Improving Adherence
- Patient education
- Side effect management
- Family involvement
- Regular monitoring

## Side Effect Management

### Common Side Effects
- Weight gain
- Sexual dysfunction
- Sedation
- Metabolic changes

### Management Strategies
- Dose adjustments
- Medication switching
- Adjunctive treatments
- Lifestyle modifications

## Technology in Mental Health

### Digital Therapeutics
- Mental health apps
- Online therapy platforms
- Medication reminders
- Mood tracking tools

### Telemedicine
- Remote consultations
- Increased access
- Reduced stigma
- Cost-effective care

## Prevention and Early Intervention

### Risk Factor Identification
- Family history
- Environmental stressors
- Substance use
- Medical conditions

### Preventive Strategies
- Stress management
- Social support
- Healthy lifestyle
- Early screening

## Community Mental Health

### Community-Based Programs
- Peer support groups
- Awareness campaigns
- Training programs
- Crisis intervention

### Role of NGOs
- Service delivery
- Advocacy
- Research
- Policy influence

## Policy and Legislation

### Mental Healthcare Act 2017
- Rights-based approach
- Decriminalization of suicide
- Community-based care
- Quality standards

### National Mental Health Programme
- Service delivery
- Human resource development
- Research and training
- Information systems

## Future Directions

### Personalized Medicine
- Genetic testing
- Biomarker identification
- Tailored treatments
- Precision psychiatry

### Novel Treatments
- Ketamine therapy
- Psychedelic research
- Neuromodulation
- Gene therapy

### Healthcare Integration
- Primary care integration
- Collaborative care models
- Stepped care approaches
- Technology integration

## Breaking the Stigma

### Education and Awareness
- Public campaigns
- Celebrity endorsements
- Media engagement
- School programs

### Language and Communication
- Person-first language
- Respectful terminology
- Cultural sensitivity
- Positive messaging

### Success Stories
- Recovery narratives
- Role models
- Peer testimonials
- Family experiences

## Conclusion

Mental health treatment in India is evolving, with pharmaceuticals playing a crucial role alongside therapy and social support. Breaking the stigma requires collective effort from healthcare providers, patients, families, and society.

If you or someone you know is struggling with mental health issues, seek professional help. Mental health conditions are treatable, and recovery is possible with appropriate care and support.

Remember: Mental health is as important as physical health, and seeking help is a sign of strength, not weakness.`,
      author: 'Dr. Priya Sharma',
      publishDate: '2024-11-15',
      category: 'Mental Health',
      tags: ['mental health', 'depression', 'anxiety', 'stigma', 'treatment'],
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: 13,
      views: 2876,
      likes: 234
    }
  ];

  const categories = [
    'all',
    'Cardiovascular Health',
    'Diabetes Care',
    'Respiratory Health',
    'Pain Management',
    'Infectious Disease',
    'Mental Health'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 md:mb-8 transition-colors group text-sm md:text-base"
          >
            <span className="mr-2">←</span>
            <span className="group-hover:ml-1 transition-all">Back to Blog</span>
          </button>

          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 md:h-64 object-cover"
            />
            
            <div className="p-4 md:p-8">
              <div className="flex flex-wrap items-center text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 gap-2 md:gap-4">
                <Calendar size={16} className="mr-2" />
                <span className="mr-2 md:mr-4">{formatDate(post.publishDate)}</span>
                <Clock size={16} className="mr-2" />
                <span className="mr-2 md:mr-4">{post.readTime} min read</span>
                <User size={16} className="mr-2" />
                <span className="mr-2 md:mr-4">{post.author}</span>
                <Eye size={16} className="mr-2" />
                <span className="mr-2 md:mr-4">{post.views} views</span>
                <Heart size={16} className="mr-2" />
                <span>{post.likes} likes</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{post.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-sm md:prose-lg max-w-none dark:prose-invert">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('##')) {
                    return (
                      <h2 key={index} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mt-6 md:mt-8 mb-3 md:mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={index} className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-4 md:mt-6 mb-2 md:mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('- **') || paragraph.startsWith('1. **')) {
                    return (
                      <div key={index} className="my-3 md:my-4">
                        {paragraph.split('\n').map((line, i) => (
                          <p key={i} className="mb-2 text-gray-700 dark:text-gray-300 text-sm md:text-base">{line}</p>
                        ))}
                      </div>
                    );
                  } else {
                    return (
                      <p key={index} className="mb-3 md:mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
              
              {/* Share buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Share this article:</span>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </button>
                      <button className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </button>
                      <button className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Heart size={16} />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Medical <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest medical insights, treatment guidelines, and health education from Ramedix experts.
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
              onClick={() => setSelectedPost(post.id)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-4">{formatDate(post.publishDate)}</span>
                  <Clock size={14} className="mr-1" />
                  <span className="mr-4">{post.readTime} min</span>
                  <Eye size={14} className="mr-1" />
                  <span>{post.views}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium mr-1">Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Heart size={14} className="mr-1" />
                    <span>{post.likes} likes</span>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{post.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No articles found matching your search criteria.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Medical Insights</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest medical research, treatment guidelines, and health tips from Groma Pharma experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;