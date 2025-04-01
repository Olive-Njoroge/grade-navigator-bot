
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Scholarships & Financial Aid",
      description: "Financial resources to support your education",
      items: [
        { name: "Higher Education Loans Board (HELB)", link: "https://www.helb.co.ke/" },
        { name: "Wings to Fly Scholarship", link: "https://www.equitygroupfoundation.com/en/our-programmes/wings-to-fly" },
        { name: "KCB Foundation Scholarships", link: "https://kcbgroup.com/foundation/education/scholarships/" },
        { name: "Mastercard Foundation Scholars Program", link: "https://mastercardfdn.org/all/scholars/" },
      ]
    },
    {
      title: "Learning Resources",
      description: "Free educational materials to improve your skills",
      items: [
        { name: "Khan Academy", link: "https://www.khanacademy.org/" },
        { name: "Coursera", link: "https://www.coursera.org/" },
        { name: "edX", link: "https://www.edx.org/" },
        { name: "Open University", link: "https://www.open.edu/openlearn/" },
      ]
    },
    {
      title: "Vocational Training",
      description: "Skills-based education options",
      items: [
        { name: "TVET Authority Kenya", link: "https://www.tveta.go.ke/" },
        { name: "Kenya Youth Employment Opportunities Project", link: "https://www.kyeop.go.ke/" },
        { name: "Digital Skills Program", link: "https://www.ajiradigital.go.ke/" },
        { name: "Generation Kenya", link: "https://www.generation.org/kenya/" },
      ]
    },
    {
      title: "Career Guidance",
      description: "Resources for career planning and development",
      items: [
        { name: "Kenya Careers Portal", link: "https://careers.go.ke/" },
        { name: "Career Point Kenya", link: "https://www.careerpointkenya.co.ke/" },
        { name: "BrighterMonday Kenya", link: "https://www.brightermonday.co.ke/career-advice" },
        { name: "The Knowledge Hub", link: "https://www.knowledgehub.ke/" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-edu-blue">Educational Resources</h1>
        <p className="text-gray-600 mb-8">
          Below are valuable resources to help you on your educational journey, regardless of your KCSE results.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resourceCategories.map((category, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-edu-blue">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-edu-purple hover:underline flex items-center"
                      >
                        {item.name}
                        <span className="text-xs ml-1">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gradient-to-r from-edu-blue/10 to-edu-purple/10 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
          <p className="text-gray-700">
            Our AI assistant is available 24/7 to provide personalized guidance based on your KCSE results.
            Return to the <a href="/" className="text-edu-blue hover:underline">home page</a> to chat with the Grade Navigator AI.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
