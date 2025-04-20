
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Search, Plus, Pencil, Star, PlayCircle } from 'lucide-react';

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
      description: "Review cards with spaced repetition",
      color: "bg-quizlet-blue",
    },
    {
      title: "Learn",
      icon: Search,
      description: "Adaptive learning technology",
      color: "bg-green-500",
    },
    {
      title: "Write",
      icon: Pencil,
      description: "Practice writing your answers",
      color: "bg-purple-500",
    },
    {
      title: "Test",
      icon: Star,
      description: "Generate practice tests",
      color: "bg-yellow-500",
    },
    {
      title: "Match",
      icon: Plus,
      description: "Match terms in a fun game",
      color: "bg-pink-500",
    },
    {
      title: "Live",
      icon: PlayCircle,
      description: "Learn with classmates in real-time",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-quizlet-dark-gray mb-12">
          Choose Your Study Mode
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyModes.map((mode, index) => (
            <div key={index} 
                 className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className={`${mode.color} text-white w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <mode.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-quizlet-dark-gray mb-3">{mode.title}</h3>
              <p className="text-quizlet-text-gray mb-4">{mode.description}</p>
              <Button 
                onClick={() => handleModeClick(mode.title)}
                className={`w-full ${mode.color} text-white hover:opacity-90 transition-colors`}>
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
