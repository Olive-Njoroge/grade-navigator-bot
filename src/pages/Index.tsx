
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatInterface from '@/components/ChatInterface';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-edu-blue to-edu-purple text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Your KCSE Results Are Just The Beginning
            </h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 animate-fade-in opacity-90">
              Get personalized guidance based on your KCSE grades and discover educational paths that match your potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-edu-blue hover:bg-gray-100">
                <a href="#chat-section">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How Grade Navigator Helps You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-edu-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-edu-blue">🎓</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-blue">Personalized Guidance</h3>
                <p className="text-gray-600">
                  Get tailored advice based on your specific KCSE grades to find the best educational path for you.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-edu-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-edu-green">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-green">Financial Solutions</h3>
                <p className="text-gray-600">
                  Discover scholarships, loans, and affordable educational options that match your situation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="w-16 h-16 bg-edu-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-edu-orange">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-edu-orange">Alternative Paths</h3>
                <p className="text-gray-600">
                  Explore vocational training, technical education, and entrepreneurship opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Chat Section */}
        <section id="chat-section" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Chat with Grade Navigator AI</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Our AI assistant will analyze your KCSE results and provide personalized educational guidance, whether you excelled or need to explore alternative paths.
            </p>
            <ChatInterface />
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
                <div className="text-edu-blue text-4xl font-serif absolute top-2 left-4 opacity-30">"</div>
                <p className="text-gray-600 mb-4 pt-6 px-2">
                  With a C- in KCSE, I thought my dreams were over. Grade Navigator helped me find a certificate program in IT that I could upgrade to a diploma and eventually a degree.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-edu-blue/20 flex items-center justify-center text-edu-blue font-bold">M</div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Michael</h4>
                    <p className="text-sm text-gray-500">Nairobi</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
                <div className="text-edu-blue text-4xl font-serif absolute top-2 left-4 opacity-30">"</div>
                <p className="text-gray-600 mb-4 pt-6 px-2">
                  I scored a B+, but couldn't afford university fees. The AI guided me to scholarship opportunities I didn't know about, and now I'm studying Engineering on a full scholarship.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-edu-green/20 flex items-center justify-center text-edu-green font-bold">W</div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Wangari</h4>
                    <p className="text-sm text-gray-500">Kisumu</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative md:col-span-2 lg:col-span-1">
                <div className="text-edu-blue text-4xl font-serif absolute top-2 left-4 opacity-30">"</div>
                <p className="text-gray-600 mb-4 pt-6 px-2">
                  After failing my KCSE, I felt like a failure. The Grade Navigator AI showed me vocational training options. Now I run my own successful carpentry business making custom furniture.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-edu-orange/20 flex items-center justify-center text-edu-orange font-bold">J</div>
                  <div className="ml-3">
                    <h4 className="font-semibold">Joshua</h4>
                    <p className="text-sm text-gray-500">Mombasa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-edu-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Your Educational Options?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
              Let our AI assistant guide you to the best educational path based on your KCSE results, regardless of your grades or financial situation.
            </p>
            <Button size="lg" className="bg-white text-edu-purple hover:bg-gray-100">
              <a href="#chat-section">Chat with Grade Navigator AI</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
