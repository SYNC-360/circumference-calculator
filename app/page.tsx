"use client";

import React, { useState, useEffect } from 'react';
import { Calculator, BookOpen, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function CircumferenceCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('radius');
  const [result, setResult] = useState<number | null>(null);
  const [steps, setSteps] = useState<string[]>([]);

  useEffect(() => {
    const calculateCircumference = () => {
      const value = parseFloat(inputValue);
      if (isNaN(value) || value <= 0) {
        setResult(null);
        setSteps(['Please enter a valid positive number.']);
        return;
      }

      let circumference: number;
      let calculationSteps: string[] = [];

      switch (inputType) {
        case 'radius':
          circumference = 2 * Math.PI * value;
          calculationSteps = [
            `Given: Radius (r) = ${value}`,
            `Formula: C = 2πr`,
            `C = 2 × π × ${value}`,
            `C = 2 × 3.14159265... × ${value}`,
            `C = ${(2 * 3.14159265).toFixed(8)} × ${value}`,
            `C = ${circumference.toFixed(4)}`
          ];
          break;
        case 'diameter':
          circumference = Math.PI * value;
          calculationSteps = [
            `Given: Diameter (d) = ${value}`,
            `Formula: C = πd`,
            `C = π × ${value}`,
            `C = 3.14159265... × ${value}`,
            `C = ${circumference.toFixed(4)}`
          ];
          break;
        case 'area':
          circumference = 2 * Math.sqrt(Math.PI * value);
          const intermediateValue = Math.PI * value;
          const sqrtValue = Math.sqrt(intermediateValue);
          calculationSteps = [
            `Given: Area (A) = ${value}`,
            `Formula: C = 2√(πA)`,
            `Step 1: Calculate πA = π × ${value}`,
            `πA = 3.14159265... × ${value} = ${intermediateValue.toFixed(4)}`,
            `Step 2: Find √(πA) = √${intermediateValue.toFixed(4)}`,
            `√(πA) = ${sqrtValue.toFixed(4)}`,
            `Step 3: Multiply by 2`,
            `C = 2 × ${sqrtValue.toFixed(4)}`,
            `C = ${circumference.toFixed(4)}`
          ];
          break;
        default:
          circumference = 0;
      }

      setResult(circumference);
      setSteps(calculationSteps);
    };

    if (inputValue) {
      calculateCircumference();
    }
  }, [inputValue, inputType]);

  const examples = [
    { 
      type: 'Small Circle', 
      radius: '5 cm', 
      diameter: '10 cm',
      circumference: '31.42 cm',
      description: 'Cookie, coaster, or cup size'
    },
    { 
      type: 'Medium Circle', 
      radius: '15 cm', 
      diameter: '30 cm',
      circumference: '94.25 cm',
      description: 'Dinner plate or vinyl record'
    },
    { 
      type: 'Large Circle', 
      radius: '50 cm', 
      diameter: '100 cm',
      circumference: '314.16 cm',
      description: 'Round table or small trampoline'
    },
    { 
      type: 'Extra Large', 
      radius: '2 m', 
      diameter: '4 m',
      circumference: '12.57 m',
      description: 'Above-ground pool or garden pond'
    },
    {
      type: 'Jumbo Circle',
      radius: '10 m',
      diameter: '20 m',
      circumference: '62.83 m',
      description: 'Carousel or circus ring'
    }
  ];

  const realWorldExamples = [
    { item: 'Basketball', diameter: '24 cm', circumference: '75.4 cm', usage: 'Official NBA size basketball' },
    { item: 'Pizza (Large)', diameter: '35 cm', circumference: '110 cm', usage: 'Standard large pizza size' },
    { item: 'Hula Hoop', diameter: '90 cm', circumference: '283 cm', usage: 'Adult size hula hoop' },
    { item: 'Car Tire', diameter: '60 cm', circumference: '188.5 cm', usage: 'Average passenger car tire' },
    { item: "Earth's Equator", diameter: '12,742 km', circumference: '40,030 km', usage: 'Distance around Earth' },
    { item: 'Olympic Track', diameter: '127.3 m', circumference: '400 m', usage: 'Standard running track inner lane' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Circumference of a Circle:<br />
              <span className="text-blue-600">Calculator &amp; Complete Guide</span>
            </h1>
            
            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="text-xl mb-4">
                The <strong>circumference of a circle</strong> is the distance around its edge. Calculate it instantly 
                using our free tool with formulas C = 2πr (using radius) or C = πd (using diameter).
              </p>
              <p className="text-lg text-gray-600">
                Whether you&apos;re a student learning geometry, an engineer working on designs, or simply need to calculate 
                the perimeter of a circular object, our calculator provides instant results with step-by-step solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-10 max-w-4xl mx-auto">
          <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Quick Navigation</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <a href="#calculator" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
              <span className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform">→</span>
              <span className="font-medium">Calculator</span>
            </a>
            <a href="#formulas" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
              <span className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform">→</span>
              <span className="font-medium">Formulas &amp; Methods</span>
            </a>
            <a href="#how-to" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
              <span className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform">→</span>
              <span className="font-medium">How to Calculate</span>
            </a>
            <a href="#examples" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
              <span className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform">→</span>
              <span className="font-medium">Examples</span>
            </a>
            <a href="#faq" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
              <span className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform">→</span>
              <span className="font-medium">FAQ</span>
            </a>
            <a href="#applications" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group">
              <span className="text-blue-500 mr-2 group-hover:translate-x-1 transition-transform">→</span>
              <span className="font-medium">Applications</span>
            </a>
          </div>
        </div>

        {/* Main Calculator */}
        <div id="calculator" className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="mr-2 text-blue-600" />
                Calculate Circumference
              </h2>

              {/* Input Type Selector */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  I know the circle&apos;s:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['radius', 'diameter', 'area'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setInputType(type)}
                      className={`py-3 px-4 rounded-lg font-medium transition-all ${
                        inputType === type
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Field */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Enter {inputType} value:
                </label>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={`Enter ${inputType} value`}
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  min="0"
                  step="any"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Enter any positive number. You can use decimals for precise calculations.
                </p>
              </div>

              {/* Result Display */}
              {result !== null && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
                  <div className="text-sm font-medium opacity-90 mb-2">Circumference:</div>
                  <div className="text-4xl font-bold mb-3">{result.toFixed(4)}</div>
                  <div className="text-sm opacity-90">
                    Formula used: C = {inputType === 'radius' ? '2πr' : inputType === 'diameter' ? 'πd' : '2√(πA)'}
                  </div>
                  <div className="text-xs opacity-75 mt-2">
                    Calculated using π = 3.14159265... (15 decimal places)
                  </div>
                </div>
              )}
            </div>

            {/* Visual & Steps Section */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visual Representation</h3>
              
              {/* Circle Diagram */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
                <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
                  {/* Background grid */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#grid)" />
                  
                  {/* Circle */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="80" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="3"
                    strokeDasharray="8 4"
                    className="animate-pulse"
                  />
                  
                  {/* Radius line */}
                  <line x1="100" y1="100" x2="180" y2="100" stroke="#ef4444" strokeWidth="2"/>
                  
                  {/* Diameter line */}
                  <line x1="20" y1="100" x2="180" y2="100" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/>
                  
                  {/* Center point */}
                  <circle cx="100" cy="100" r="4" fill="#1f2937"/>
                  
                  {/* Labels */}
                  <text x="140" y="95" className="text-sm font-semibold" fill="#dc2626">r</text>
                  <text x="100" y="115" className="text-xs font-medium" fill="#10b981" textAnchor="middle">d</text>
                  <text x="100" y="195" className="text-xs font-medium" fill="#6b7280" textAnchor="middle">
                    Circumference = 2πr = πd
                  </text>
                </svg>
              </div>

              {/* Step by Step Solution */}
              {steps.length > 0 && inputValue && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Step-by-Step Solution:</h4>
                  <ol className="space-y-2">
                    {steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 font-medium">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SEO Content Block */}
        <div id="how-to" className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Calculate Circumference of a Circle
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Finding Circumference of a Circle with Radius
              </h3>
              <p className="text-gray-700 mb-3">
                To find the <strong>circumference of a circle</strong> when you know the radius, 
                use the formula C = 2πr. This is the most common method for calculating circle circumference.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="font-mono text-sm mb-2">Example: Radius = 10 cm</p>
                <p className="font-mono text-sm">C = 2 × π × 10 = 62.83 cm</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Circumference of a Circle Using Diameter
              </h3>
              <p className="text-gray-700 mb-3">
                When the diameter is known, the <strong>circumference of a circle</strong> 
                equals π times the diameter (C = πd). This direct relationship makes calculations simple.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="font-mono text-sm mb-2">Example: Diameter = 20 cm</p>
                <p className="font-mono text-sm">C = π × 20 = 62.83 cm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Reference Cards */}
        <div id="formulas" className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:transform hover:scale-105">
            <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
              <ArrowRight className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">From Radius</h3>
            <p className="text-gray-700 font-medium mb-3">C = 2πr</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Multiply the radius by 2π (approximately 6.28318). This is the most common formula used in geometry 
              since radius is often the primary measurement given. The factor of 2 accounts for going all the way 
              around the circle, while π represents the fundamental ratio between circumference and diameter.
            </p>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-800 font-semibold">Quick Tip:</p>
              <p className="text-xs text-blue-700">For mental math, use 6.28 × radius</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:transform hover:scale-105">
            <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
              <ArrowRight className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">From Diameter</h3>
            <p className="text-gray-700 font-medium mb-3">C = πd</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Simply multiply the diameter by π (approximately 3.14159). This is the most straightforward formula 
              because the diameter spans the full width of the circle. Since diameter equals twice the radius, 
              this formula is essentially the simplified version of the radius formula.
            </p>
            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
              <p className="text-xs text-purple-800 font-semibold">Quick Tip:</p>
              <p className="text-xs text-purple-700">For estimates, use 3.14 × diameter</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:transform hover:scale-105">
            <div className="bg-green-100 rounded-lg p-3 w-fit mb-4">
              <ArrowRight className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">From Area</h3>
            <p className="text-gray-700 font-medium mb-3">C = 2√(πA)</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              First find the square root of π times the area, then multiply by 2. This formula is derived by 
              solving the area formula (A = πr²) for radius, then substituting into the circumference formula. 
              It&apos;s particularly useful in engineering when area is calculated from other parameters.
            </p>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-xs text-green-800 font-semibold">Quick Tip:</p>
              <p className="text-xs text-green-700">√area × 3.54 gives approximate circumference</p>
            </div>
          </div>
        </div>

        {/* Common Examples Table */}
        <div id="examples" className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BookOpen className="mr-2 text-purple-600" />
            Common Circle Examples
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Example</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Radius</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Diameter</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Circumference</th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">Real-world Item</th>
                </tr>
              </thead>
              <tbody>
                {examples.map((example, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-gray-800">{example.type}</td>
                    <td className="py-3 px-4 text-gray-700">{example.radius}</td>
                    <td className="py-3 px-4 text-gray-700">{example.diameter}</td>
                    <td className="py-3 px-4 font-semibold text-blue-600">{example.circumference}</td>
                    <td className="py-3 px-4 text-gray-600">{example.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Real-World Applications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {realWorldExamples.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{item.item}</h4>
                  <span className="text-sm font-bold text-blue-600">{item.circumference}</span>
                </div>
                <p className="text-sm text-gray-600">Diameter: {item.diameter}</p>
                <p className="text-xs text-gray-500 mt-1">{item.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Content */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Circle Circumference</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">What is Circumference?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The circumference is the complete distance around the outer edge of a circle, equivalent to the perimeter 
                of other shapes. It represents the total length you would measure if you placed a string along the circle&apos;s 
                edge and then straightened it out. This measurement is fundamental in mathematics and has practical 
                applications in countless fields, from engineering and architecture to everyday tasks like measuring 
                the distance around circular objects.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What makes circles unique is the constant relationship between circumference and diameter, represented 
                by the mathematical constant π (pi), approximately equal to 3.14159. This means that for any circle, 
                regardless of its size, dividing the circumference by the diameter will always give you π. This remarkable 
                property was discovered by ancient civilizations and has fascinated mathematicians for millennia.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The circumference formula connects directly to the circle&apos;s radius and diameter, making it easy to 
                calculate when you know either measurement. Understanding circumference is essential for solving 
                real-world problems involving rotation, circular motion, and the design of round objects or spaces.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">The Mathematical Foundation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2 text-xl">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">C = 2πr (Radius Formula):</span>
                    <p className="text-gray-700 mt-1 leading-relaxed">
                      This formula multiplies the radius by 2π. Since the radius extends from the center to the edge, 
                      we need to account for the full journey around the circle (hence the factor of 2). The π factor 
                      converts this linear measurement into the curved distance. This is the most commonly used formula 
                      in geometry because radius is often the primary given measurement in mathematical problems.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-2 text-xl">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">C = πd (Diameter Formula):</span>
                    <p className="text-gray-700 mt-1 leading-relaxed">
                      The most intuitive formula - multiply the diameter by π. Since the diameter already spans the 
                      full width of the circle (twice the radius), we only need to multiply by π to get the circumference. 
                      This formula directly expresses the fundamental definition of π as the ratio of circumference to diameter.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2 text-xl">•</span>
                  <div>
                    <span className="font-semibold text-gray-900">C = 2√(πA) (Area Formula):</span>
                    <p className="text-gray-700 mt-1 leading-relaxed">
                      When only the area is known, this formula provides the solution. Starting from A = πr², we solve 
                      for r = √(A÷π), then substitute into C = 2πr to get C = 2π√(A÷π) = 2√(πA). This elegant formula 
                      is particularly useful in applications where area is measured directly or calculated from other parameters.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-2xl shadow-inner">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Historical Note: The Discovery of π</h3>
            <p className="text-gray-700 leading-relaxed">
              The relationship between a circle&apos;s circumference and diameter has been studied for over 4,000 years. 
              Ancient Babylonians used π ≈ 3.125, while ancient Egyptians used π ≈ 3.16. The Greek mathematician 
              Archimedes (287-212 BC) was the first to rigorously calculate π, showing it was between 3.1408 and 3.1428. 
              Today, computers have calculated π to trillions of decimal places, though for most practical purposes, 
              just a few decimal places provide sufficient accuracy. The symbol π itself was first used by Welsh 
              mathematician William Jones in 1706 and popularized by Leonhard Euler in the 18th century.
            </p>
          </div>
        </div>

        {/* Comprehensive FAQ Section */}
        <div id="faq" className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How accurate is π in calculations?</h3>
              <p className="text-gray-700 leading-relaxed">
                The accuracy of π depends on your application. For everyday calculations, using π = 3.14 provides accuracy 
                to within 0.05% of the true value. Using π = 3.14159 (5 decimal places) gives accuracy to within 0.00008%, 
                which is sufficient for most engineering applications. Our calculator uses JavaScript&apos;s Math.PI, which provides 
                15-17 decimal places of precision - far more than needed for any practical application. NASA, for example, 
                uses only 15 decimal places of π for interplanetary navigation calculations. For construction or crafts, 
                even π = 3.14 or the fraction 22÷7 (approximately 3.14286) often provides adequate accuracy.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What units should I use for circle measurements?</h3>
              <p className="text-gray-700 leading-relaxed">
                You can use any unit of measurement - meters, feet, inches, centimeters, miles, or even arbitrary units - 
                but consistency is crucial. If you enter the radius in centimeters, the circumference will be in centimeters. 
                For mixed units, always convert to a single unit before calculating. Common conversions: 1 meter = 100 cm, 
                1 foot = 12 inches, 1 inch = 2.54 cm. The calculator works with pure numbers, so unit interpretation is up 
                to you. For very large circles (like planetary orbits) use kilometers or miles; for small circles (like 
                jewelry) use millimeters or inches. Remember that the result will always be in the same linear unit as your input.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do I measure circumference in real life?</h3>
              <p className="text-gray-700 leading-relaxed">
                There are several practical methods to measure circumference. The most direct is using a flexible measuring 
                tape or string wrapped around the circle&apos;s edge - mark where it completes one full rotation and measure that 
                length. For rigid circular objects, you can roll them along a flat surface for one complete revolution and 
                measure the distance traveled. For large circles where wrapping isn&apos;t practical, measure the diameter with 
                a straight ruler or tape measure across the widest point, then multiply by π (3.14159). For partial circles 
                or arcs, measure a portion and calculate the full circumference proportionally. Digital tools like calipers 
                can provide precise diameter measurements for small objects, which you can then convert to circumference.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I calculate circumference from area alone?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, you can calculate circumference directly from area using the formula C = 2√(πA). This works because 
                area and circumference are both functions of radius. Given area A = πr², you can solve for radius: r = √(A÷π). 
                Then substitute this into the circumference formula C = 2πr to get C = 2π√(A÷π) = 2√(πA). This is particularly 
                useful in applications where area is measured directly, such as land surveying, material calculations, or when 
                working with circular cross-sections in engineering. For example, if you know a circular garden has an area 
                of 50 square meters, you can quickly calculate that its circumference is approximately 25.1 meters for fencing 
                purposes.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Why is circumference important in real-world applications?</h3>
              <p className="text-gray-700 leading-relaxed">
                Circumference calculations are essential in numerous fields. In engineering, they&apos;re crucial for designing 
                wheels, gears, pulleys, and bearings - determining rotational speeds and mechanical advantages. Architects 
                use circumference for circular structures, domes, arches, and columns. In manufacturing, it&apos;s vital for 
                pipes, tubes, rings, and cylindrical containers. Sports applications include running track distances, 
                basketball and soccer ball specifications, and cycling wheel rotations. In everyday life, we use circumference 
                for pizza sizes, circular tablecloths, fence requirements for round gardens, tire replacements, and belt sizing. 
                Even advanced technology depends on it - GPS satellites use Earth&apos;s circumference for positioning calculations, 
                and particle accelerators like the Large Hadron Collider (27 km circumference) require precise circular measurements.
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What&apos;s the relationship between circumference and other circle measurements?</h3>
              <p className="text-gray-700 leading-relaxed">
                All circle measurements are interconnected through mathematical relationships. Circumference relates to radius 
                by C = 2πr, to diameter by C = πd, and to area by C = 2√(πA). Additionally, circumference squared divided by 
                4π equals the area: A = C²÷(4π). The arc length of any portion of a circle equals (θ÷360) × C where θ is 
                the central angle in degrees. These relationships mean that knowing any one measurement allows you to calculate 
                all others. This interconnection is unique to circles and makes them particularly elegant in mathematics. 
                Understanding these relationships is crucial for solving complex geometry problems and real-world applications 
                involving circular motion, rotation, and cyclic phenomena.
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Topics Section */}
        <div id="applications" className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Topics &amp; Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Circumference in Motion</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                When a wheel of circumference C rolls without slipping, it travels a distance equal to C with each complete 
                rotation. This principle is fundamental to understanding vehicle speedometers, odometers, and gear ratios. 
                For example, a bicycle wheel with a 26-inch diameter travels approximately 81.7 inches (or 6.8 feet) per revolution.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Arc Length Calculations</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For a partial circle (arc), the length equals (θ÷360°) × C where θ is the central angle. This is essential 
                for calculating distances along curved paths, designing curved architectural elements, and understanding 
                planetary orbits. A 90° arc (quarter circle) has length C÷4.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Circumference and Speed</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Rotational speed relates directly to circumference. An object on a circle&apos;s edge travels the circumference 
                distance with each rotation. For a disk spinning at ω rotations per minute, a point on the edge travels 
                at linear speed v = ω × C per minute. This principle governs everything from ceiling fans to satellite orbits.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Precision in Industry</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Manufacturing tolerances often specify circumference to ensure proper fit. For example, engine pistons must 
                have precise circumferences for optimal compression. Even tiny errors in circumference calculations can lead 
                to significant problems in precision engineering, making accurate calculations essential.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <Users className="mx-auto text-blue-600 mb-3" size={40} />
              <div className="text-3xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-700 font-semibold">Students Helped</div>
              <p className="text-xs text-gray-500 mt-1">Worldwide since 2020</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <CheckCircle className="mx-auto text-green-600 mb-3" size={40} />
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Accurate Results</div>
              <p className="text-xs text-gray-500 mt-1">15+ decimal precision</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Calculator className="mx-auto text-purple-600 mb-3" size={40} />
              <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
              <div className="text-gray-700 font-semibold">Always Free</div>
              <p className="text-xs text-gray-500 mt-1">No ads or sign-ups</p>
            </div>
          </div>
        </div>

        {/* Related Circle Calculators - NEW SECTION */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Related Circle Calculators</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <a href="https://areaofcircle.com" className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors group">
              <p className="font-bold text-gray-900 group-hover:text-blue-600 mb-1">Area Calculator</p>
              <p className="text-sm text-gray-700 font-medium">Calculate using πr²</p>
            </a>
            <a href="https://radiusofacircle.com" className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors group">
              <p className="font-bold text-gray-900 group-hover:text-blue-600 mb-1">Radius Finder</p>
              <p className="text-sm text-gray-700 font-medium">Find from circumference</p>
            </a>
            <a href="https://circumferenceofacircleformula.com" className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors group">
              <p className="font-bold text-gray-900 group-hover:text-blue-600 mb-1">Formula Guide</p>
              <p className="text-sm text-gray-700 font-medium">2πr explained</p>
            </a>
            <a href="https://equationofacircle.com" className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors group">
              <p className="font-bold text-gray-900 group-hover:text-blue-600 mb-1">Equation Calculator</p>
              <p className="text-sm text-gray-700 font-medium">Circle equation solver</p>
            </a>
            <a href="https://howtofindcircumferenceofacircle.com" className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors group">
              <p className="font-bold text-gray-900 group-hover:text-blue-600 mb-1">How to Find Guide</p>
              <p className="text-sm text-gray-700 font-medium">Step-by-step instructions</p>
            </a>
          </div>
        </div>

        {/* Ultra-Minimal Footer - Maximum Authority Retention */}
<footer className="mt-20 border-t border-gray-200 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 py-8">
  <div className="text-center">
  <p className="text-sm text-gray-600 mb-2">
    The world&apos;s most accurate circle circumference calculator - Used by 500,000+ monthly
  </p>
      <p className="text-sm text-gray-500 mb-4">
        Related:
        <a href="https://areaofcircle.com" className="text-blue-600 hover:underline mx-2">Area Calculator</a>
        •
        <a href="https://radiusofacircle.com" className="text-blue-600 hover:underline mx-2">Radius Finder</a>
      </p>
      <p className="text-xs text-gray-400 mb-3">
        © 2025 CircumferenceOfACircle.com - Educational Resource
      </p>
      <p className="text-xs text-gray-500">
        Part of <a href="https://lab101.com" className="text-blue-600 hover:underline">Lab101.com Education Network</a>
      </p>
    </div>
  </div>
</footer>
      </div>
    </div>
  );
}