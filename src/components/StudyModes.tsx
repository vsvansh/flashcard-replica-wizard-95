
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Search, Plus, Pencil, Star, PlayCircle } from 'lucide-react';

const StudyModes = () => {
  const { toast } = useToast();

  const handleModeClick = (mode: string) => {
    toast({
      title: `${mode} Mode Selected`,
      description: `Starting ${mode.toLowerCase()} mode...`,
      variant: "default",
    });
  };

  const studyModes = [
    {
      title: "Flashcards",
      icon: BookOpen,
      description: "Master concepts with spaced repetition",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      title: "Learn",
      icon: Search,
      description: "Personalized learning path",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
    {
      title: "Write",
      icon: Pencil,
      description: "Practice written answers",
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      title: "Test",
      icon: Star,
      description: "Test your knowledge",
      color: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
    },
    {
      title: "Match",
      icon: Plus,
      description: "Fast-paced matching game",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
    },
    {
      title: "Live",
      icon: PlayCircle,
      description: "Real-time study sessions",
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-quizlet-dark-gray mb-12 animate-fade-in">
          Choose Your Study Mode
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyModes.map((mode, index) => (
            <div
              key={index}
              className={`
                transform hover:scale-105 transition-all duration-300
                opacity-0 animate-[fade-in_0.5s_ease-out_forwards]
                [animation-delay:${index * 100}ms]
              `}
            >
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                <div className={`${mode.color} text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 transform transition-transform duration-300 hover:rotate-12`}>
                  <mode.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-quizlet-dark-gray mb-3">{mode.title}</h3>
                <p className="text-quizlet-text-gray mb-4">{mode.description}</p>
                <Button 
                  onClick={() => handleModeClick(mode.title)}
                  className={`w-full ${mode.color} ${mode.hoverColor} text-white transition-all duration-300 transform hover:-translate-y-1`}>
                  Try {mode.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyModes;
