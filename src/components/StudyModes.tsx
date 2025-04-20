
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Search, Plus } from 'lucide-react';

const StudyModes = () => {
  const { toast } = useToast();

  const handleModeClick = (mode: string) => {
    toast({
      title: `${mode} Mode`,
      description: `${mode} mode will be available soon!`,
    });
  };

  const studyModes = [
    {
      title: "Flashcards",
      icon: BookOpen,
      description: "Create your own flashcard sets or choose from millions created by other students.",
      color: "bg-quizlet-blue",
    },
    {
      title: "Learn",
      icon: Search,
      description: "Master concepts through adaptive learning technology.",
      color: "bg-quizlet-green",
    },
    {
      title: "Test",
      icon: Plus,
      description: "Generate practice tests to assess your knowledge.",
      color: "bg-quizlet-orange",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-quizlet-dark-gray mb-12">
          Choose how you want to study
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studyModes.map((mode, index) => (
            <div key={index} 
                 className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`${mode.color} text-white w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <mode.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-quizlet-dark-gray mb-3">{mode.title}</h3>
              <p className="text-quizlet-text-gray mb-4">{mode.description}</p>
              <Button 
                onClick={() => handleModeClick(mode.title)}
                className="w-full bg-quizlet-light-blue text-quizlet-blue hover:bg-quizlet-blue hover:text-white transition-colors">
                Try {mode.title}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyModes;
