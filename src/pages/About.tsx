
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-edu-blue">About Grade Navigator</h1>
        <p className="text-gray-600 mb-8">
          Helping Kenyan students find their path regardless of their KCSE results.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-edu-purple">Our Mission</h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-gray-700">
                  Grade Navigator was created with one goal in mind: to ensure that every Kenyan student can find a 
                  meaningful educational and career path regardless of their KCSE performance. We believe that grades 
                  are just one measure of potential, and that every student deserves guidance, support, and 
                  opportunities to succeed.
                </p>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-semibold mb-4 text-edu-green">The Kenyan Education System</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  The Kenya Certificate of Secondary Education (KCSE) is a crucial milestone in a student's journey. 
                  The results often determine access to higher education and career opportunities. The grading system 
                  ranges from A (excellent) to E (poor), with plus and minus variations.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-edu-blue/10">
                      <tr>
                        <th className="py-2 px-4 border-b text-left">Grade</th>
                        <th className="py-2 px-4 border-b text-left">Points</th>
                        <th className="py-2 px-4 border-b text-left">Classification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">A</td>
                        <td className="py-2 px-4 border-b">12</td>
                        <td className="py-2 px-4 border-b">Excellent</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">A-</td>
                        <td className="py-2 px-4 border-b">11</td>
                        <td className="py-2 px-4 border-b">Very Good</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">B+</td>
                        <td className="py-2 px-4 border-b">10</td>
                        <td className="py-2 px-4 border-b">Good</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">B</td>
                        <td className="py-2 px-4 border-b">9</td>
                        <td className="py-2 px-4 border-b">Good</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">B-</td>
                        <td className="py-2 px-4 border-b">8</td>
                        <td className="py-2 px-4 border-b">Fairly Good</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">C+</td>
                        <td className="py-2 px-4 border-b">7</td>
                        <td className="py-2 px-4 border-b">Average</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">C</td>
                        <td className="py-2 px-4 border-b">6</td>
                        <td className="py-2 px-4 border-b">Average</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">C-</td>
                        <td className="py-2 px-4 border-b">5</td>
                        <td className="py-2 px-4 border-b">Fair</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">D+</td>
                        <td className="py-2 px-4 border-b">4</td>
                        <td className="py-2 px-4 border-b">Below Average</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">D</td>
                        <td className="py-2 px-4 border-b">3</td>
                        <td className="py-2 px-4 border-b">Below Average</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">D-</td>
                        <td className="py-2 px-4 border-b">2</td>
                        <td className="py-2 px-4 border-b">Poor</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">E</td>
                        <td className="py-2 px-4 border-b">1</td>
                        <td className="py-2 px-4 border-b">Very Poor</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-edu-orange">How We Help</h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-edu-green text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-700">
                      <strong>Personalized Advice:</strong> Our AI assistant analyzes your KCSE grades and provides tailored 
                      educational and career guidance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-edu-green text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-700">
                      <strong>Financial Support Information:</strong> We connect students with scholarships, loans, and 
                      other financial aid resources.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-edu-green text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-700">
                      <strong>Alternative Pathways:</strong> We highlight vocational training, technical education, and 
                      entrepreneurship opportunities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-edu-green text-white p-1 rounded-full mr-2 flex-shrink-0">✓</span>
                    <span className="text-gray-700">
                      <strong>Motivation and Support:</strong> We encourage resilience and provide emotional support for 
                      students facing challenges.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-semibold mb-4 text-edu-blue">Our Values</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-edu-blue/5">
                    <h3 className="font-semibold text-edu-blue mb-2">Inclusivity</h3>
                    <p className="text-sm text-gray-700">
                      Education is for everyone, regardless of academic performance or financial background.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg bg-edu-purple/5">
                    <h3 className="font-semibold text-edu-purple mb-2">Empowerment</h3>
                    <p className="text-sm text-gray-700">
                      Knowledge and guidance can transform lives and create opportunities.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg bg-edu-green/5">
                    <h3 className="font-semibold text-edu-green mb-2">Innovation</h3>
                    <p className="text-sm text-gray-700">
                      Creative thinking and alternative paths can lead to success and fulfillment.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg bg-edu-orange/5">
                    <h3 className="font-semibold text-edu-orange mb-2">Support</h3>
                    <p className="text-sm text-gray-700">
                      Every student deserves encouragement and resources to achieve their potential.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
