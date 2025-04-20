
import React from 'react';
import { CheckCircle, BookOpen, Award, FileText } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-quizlet-blue" />,
      title: '90% of students who use Quizlet report higher grades',
      description: 'Power your study sessions with AI-assisted flashcards, practice tests, and more.'
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-quizlet-green" />,
      title: 'Verified expert solutions',
      description: 'Find millions of expert-verified textbook solutions to help you understand your work.'
    },
    {
      icon: <Award className="h-12 w-12 text-quizlet-yellow" />,
      title: 'On-the-go learning',
      description: 'Study anywhere, anytime with our mobile app for iOS and Android.'
    },
    {
      icon: <FileText className="h-12 w-12 text-quizlet-orange" />,
      title: 'Practice tests & explanations',
      description: 'Test your knowledge with practice problems and step-by-step explanations.'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-quizlet-dark-gray mb-12">
          Why students choose Quizlet
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-quizlet-dark-gray mb-2">{feature.title}</h3>
              <p className="text-quizlet-text-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
