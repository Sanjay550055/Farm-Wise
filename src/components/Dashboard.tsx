import React, { useState } from 'react';
import { 
  Sprout, 
  AlertTriangle, 
  Beaker, 
  Upload, 
  MapPin, 
  Calendar,
  Thermometer,
  Droplets,
  Wind,
  Sun
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('crop');
  const [predictions, setPredictions] = useState({
    crop: null,
    disease: null,
    fertilizer: null
  });

  const [formData, setFormData] = useState({
    // Crop Prediction
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
    
    // Disease Prediction
    cropType: '',
    imageFile: null,
    
    // Fertilizer Recommendation
    soilType: '',
    cropName: '',
    moisture: ''
  });

  // Complete list of 22 crops from the dataset
  const cropOptions = [
    { value: 'rice', label: 'Rice' },
    { value: 'maize', label: 'Maize' },
    { value: 'chickpea', label: 'Chickpea' },
    { value: 'kidneybeans', label: 'Kidney Beans' },
    { value: 'pigeonpeas', label: 'Pigeon Peas' },
    { value: 'mothbeans', label: 'Moth Beans' },
    { value: 'mungbean', label: 'Mung Bean' },
    { value: 'blackgram', label: 'Black Gram' },
    { value: 'lentil', label: 'Lentil' },
    { value: 'pomegranate', label: 'Pomegranate' },
    { value: 'banana', label: 'Banana' },
    { value: 'mango', label: 'Mango' },
    { value: 'grapes', label: 'Grapes' },
    { value: 'watermelon', label: 'Watermelon' },
    { value: 'muskmelon', label: 'Muskmelon' },
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' },
    { value: 'papaya', label: 'Papaya' },
    { value: 'coconut', label: 'Coconut' },
    { value: 'cotton', label: 'Cotton' },
    { value: 'jute', label: 'Jute' },
    { value: 'coffee', label: 'Coffee' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({
      ...prev,
      imageFile: file
    }));
  };

  const predictCrop = () => {
    // Simulate crop prediction based on input values
    const crops = ['Rice', 'Wheat', 'Cotton', 'Sugarcane', 'Maize', 'Barley', 'Groundnut', 'Chickpea', 'Kidney Beans', 'Pigeon Peas', 'Moth Beans', 'Mung Bean', 'Black Gram', 'Lentil', 'Pomegranate', 'Banana', 'Mango', 'Grapes', 'Watermelon', 'Muskmelon', 'Apple', 'Orange', 'Papaya', 'Coconut', 'Jute', 'Coffee'];
    const confidence = Math.floor(Math.random() * 20) + 80; // 80-99%
    const recommendedCrop = crops[Math.floor(Math.random() * crops.length)];
    
    setPredictions(prev => ({
      ...prev,
      crop: {
        crop: recommendedCrop,
        confidence: confidence,
        reasons: [
          'Optimal soil nutrient levels detected',
          'Weather conditions favorable',
          'Historical yield data supports this choice'
        ],
        expectedYield: `${Math.floor(Math.random() * 50) + 30} tons/hectare`,
        plantingTime: 'Next 2-3 weeks'
      }
    }));
  };

  const predictDisease = () => {
    // Simulate disease prediction
    if (!formData.imageFile) {
    alert("Please upload a plant image first.");
    return;
    }
    const diseases = [
      { name: 'Healthy', severity: 'None', color: 'text-green-600' },
      { name: 'Leaf Blight', severity: 'Moderate', color: 'text-yellow-600' },
      { name: 'Rust Disease', severity: 'High', color: 'text-red-600' },
      { name: 'Powdery Mildew', severity: 'Low', color: 'text-orange-600' },
      { name: 'Bacterial Wilt', severity: 'High', color: 'text-red-600' },
      { name: 'Mosaic Virus', severity: 'Moderate', color: 'text-yellow-600' },
      { name: 'Anthracnose', severity: 'Moderate', color: 'text-yellow-600' },
      { name: 'Root Rot', severity: 'High', color: 'text-red-600' }
    ];
    
    const prediction = diseases[Math.floor(Math.random() * diseases.length)];
    const confidence = Math.floor(Math.random() * 20) + 75;
    
    setPredictions(prev => ({
      ...prev,
      disease: {
        ...prediction,
        confidence: confidence,
        treatment: prediction.name === 'Healthy' ? 'No treatment needed' : 'Apply fungicide spray every 7 days',
        prevention: [
          'Maintain proper plant spacing',
          'Ensure adequate drainage',
          'Regular monitoring and early detection',
          'Use disease-resistant varieties'
        ]
      }
    }));
  };

  const recommendFertilizer = () => {
    // Simulate fertilizer recommendation
    const fertilizers = [
      { name: 'NPK 10-26-26', type: 'Balanced', application: '200 kg/hectare' },
      { name: 'Urea', type: 'Nitrogen-rich', application: '150 kg/hectare' },
      { name: 'DAP', type: 'Phosphorus-rich', application: '100 kg/hectare' },
      { name: 'Potash', type: 'Potassium-rich', application: '80 kg/hectare' },
      { name: 'NPK 20-20-20', type: 'Balanced', application: '180 kg/hectare' },
      { name: 'Ammonium Sulfate', type: 'Nitrogen-rich', application: '120 kg/hectare' },
      { name: 'Single Super Phosphate', type: 'Phosphorus-rich', application: '90 kg/hectare' },
      { name: 'Muriate of Potash', type: 'Potassium-rich', application: '70 kg/hectare' }
    ];
    
    const recommendation = fertilizers[Math.floor(Math.random() * fertilizers.length)];
    
    setPredictions(prev => ({
      ...prev,
      fertilizer: {
        ...recommendation,
        cost: `$${Math.floor(Math.random() * 200) + 100}`,
        timing: 'Apply during early growth stage',
        benefits: [
          'Improved crop yield by 15-25%',
          'Enhanced soil fertility',
          'Better disease resistance',
          'Improved nutrient uptake'
        ],
        instructions: 'Mix with water and apply evenly across the field'
      }
    }));
  };

  const tabs = [
    { id: 'crop', name: 'Crop Prediction', icon: Sprout, color: 'text-green-600' },
    { id: 'disease', name: 'Disease Detection', icon: AlertTriangle, color: 'text-red-600' },
    { id: 'fertilizer', name: 'Fertilizer Recommendation', icon: Beaker, color: 'text-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Farm Wise
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent ml-3">
              Dashboard
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-powered agricultural predictions for smarter farming decisions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white shadow-lg text-gray-900 border-2 border-green-500'
                  : 'bg-white/50 text-gray-600 hover:bg-white hover:shadow-md'
              }`}
            >
              <tab.icon className={`h-5 w-5 mr-2 ${tab.color}`} />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {tabs.find(tab => tab.id === activeTab)?.name}
            </h2>

            {/* Crop Prediction Form */}
            {activeTab === 'crop' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Thermometer className="inline h-4 w-4 mr-1" />
                      Temperature (°C)
                    </label>
                    <input
                      type="number"
                      name="temperature"
                      value={formData.temperature}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="25"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Droplets className="inline h-4 w-4 mr-1" />
                      Humidity (%)
                    </label>
                    <input
                      type="number"
                      name="humidity"
                      value={formData.humidity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="65"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nitrogen (N)</label>
                    <input
                      type="number"
                      name="nitrogen"
                      value={formData.nitrogen}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="90"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phosphorus (P)</label>
                    <input
                      type="number"
                      name="phosphorus"
                      value={formData.phosphorus}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="42"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Potassium (K)</label>
                    <input
                      type="number"
                      name="potassium"
                      value={formData.potassium}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="43"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">pH Level</label>
                    <input
                      type="number"
                      step="0.1"
                      name="ph"
                      value={formData.ph}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="6.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Wind className="inline h-4 w-4 mr-1" />
                      Rainfall (mm)
                    </label>
                    <input
                      type="number"
                      name="rainfall"
                      value={formData.rainfall}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="202"
                    />
                  </div>
                </div>

                <button
                  onClick={predictCrop}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Predict Best Crop
                </button>
              </div>
            )}

            {/* Disease Detection Form */}
            {activeTab === 'disease' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Crop Type</label>
                  <select
                    name="cropType"
                    value={formData.cropType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select crop type</option>
                    {cropOptions.map((crop) => (
                      <option key={crop.value} value={crop.value}>
                        {crop.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Upload className="inline h-4 w-4 mr-1" />
                    Upload Plant Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                    </label>
                  </div>
                </div>

                <button
                  onClick={predictDisease}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Detect Disease
                </button>
              </div>
            )}

            {/* Fertilizer Recommendation Form */}
            {activeTab === 'fertilizer' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Soil Type</label>
                  <select
                    name="soilType"
                    value={formData.soilType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select soil type</option>
                    <option value="sandy">Sandy</option>
                    <option value="loamy">Loamy</option>
                    <option value="clay">Clay</option>
                    <option value="silt">Silt</option>
                    <option value="peaty">Peaty</option>
                    <option value="chalky">Chalky</option>
                    <option value="saline">Saline</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Crop Name</label>
                  <select
                    name="cropName"
                    value={formData.cropName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select crop</option>
                    {cropOptions.map((crop) => (
                      <option key={crop.value} value={crop.value}>
                        {crop.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Droplets className="inline h-4 w-4 mr-1" />
                    Soil Moisture (%)
                  </label>
                  <input
                    type="number"
                    name="moisture"
                    value={formData.moisture}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="45"
                  />
                </div>

                <button
                  onClick={recommendFertilizer}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get Fertilizer Recommendation
                </button>
              </div>
            )}
          </div>

          {/* Results Panel */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Prediction Results</h2>

            {/* Crop Prediction Results */}
            {activeTab === 'crop' && predictions.crop && (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Sprout className="h-8 w-8 text-green-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-green-800">Recommended Crop</h3>
                      <p className="text-green-600">Confidence: {predictions.crop.confidence}%</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-green-800 mb-4">
                    {predictions.crop.crop}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Expected Yield</p>
                      <p className="text-lg font-semibold text-gray-900">{predictions.crop.expectedYield}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Best Planting Time</p>
                      <p className="text-lg font-semibold text-gray-900">{predictions.crop.plantingTime}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Why this crop?</p>
                    <ul className="space-y-1">
                      {predictions.crop.reasons.map((reason, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Disease Detection Results */}
            {activeTab === 'disease' && predictions.disease && (
              <div className="space-y-6">
                <div className={`${predictions.disease.name === 'Healthy' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border rounded-lg p-6`}>
                  <div className="flex items-center mb-4">
                    <AlertTriangle className={`h-8 w-8 mr-3 ${predictions.disease.color}`} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Disease Detection</h3>
                      <p className="text-gray-600">Confidence: {predictions.disease.confidence}%</p>
                    </div>
                  </div>
                  
                  <div className={`text-3xl font-bold mb-2 ${predictions.disease.color}`}>
                    {predictions.disease.name}
                  </div>
                  
                  <div className={`text-lg font-semibold mb-4 ${predictions.disease.color}`}>
                    Severity: {predictions.disease.severity}
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium text-gray-700 mb-2">Treatment</p>
                    <p className="text-gray-600">{predictions.disease.treatment}</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Prevention Tips</p>
                    <ul className="space-y-1">
                      {predictions.disease.prevention.map((tip, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Fertilizer Recommendation Results */}
            {activeTab === 'fertilizer' && predictions.fertilizer && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Beaker className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">Fertilizer Recommendation</h3>
                      <p className="text-blue-600">Estimated Cost: {predictions.fertilizer.cost}</p>
                    </div>
                  </div>
                  
                  <div className="text-3xl font-bold text-blue-800 mb-2">
                    {predictions.fertilizer.name}
                  </div>
                  
                  <div className="text-lg font-semibold text-blue-700 mb-4">
                    {predictions.fertilizer.type} • {predictions.fertilizer.application}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Application Timing</p>
                      <p className="text-gray-900">{predictions.fertilizer.timing}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Instructions</p>
                      <p className="text-gray-900">{predictions.fertilizer.instructions}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Expected Benefits</p>
                    <ul className="space-y-1">
                      {predictions.fertilizer.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* No Results State */}
            {!predictions[activeTab as keyof typeof predictions] && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {activeTab === 'crop' && <Sprout className="h-12 w-12 text-gray-400" />}
                  {activeTab === 'disease' && <AlertTriangle className="h-12 w-12 text-gray-400" />}
                  {activeTab === 'fertilizer' && <Beaker className="h-12 w-12 text-gray-400" />}
                </div>
                <p className="text-gray-500">Fill in the form and click the button to get predictions</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;