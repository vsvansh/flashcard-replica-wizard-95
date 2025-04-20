
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Get Started",
      description: "Sign up functionality will be available soon!",
    });
  };

  const handleTeacherClick = () => {
    toast({
      title: "Teacher Resources",
      description: "Teacher resources will be available soon!",
    });
  };

  const handlePracticeClick = () => {
    toast({
      title: "Practice Mode",
      description: "Interactive practice mode will be available soon!",
    });
  };

  return (
    <div className="bg-gradient-to-br from-quizlet-blue to-quizlet-dark-blue py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            The best digital flashcards and study tools
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Join over 60 million students using Quizlet's science-backed flashcards, practice tests and expert solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button 
              onClick={handleGetStarted}
              className="bg-white text-quizlet-blue hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto flex items-center justify-center gap-2">
              Get started <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              onClick={handleTeacherClick}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-full w-full sm:w-auto">
              I'm a teacher
            </Button>
          </div>
          <div className="mt-12">
            <Button
              onClick={handlePracticeClick}
              className="bg-white/10 text-white hover:bg-white/20 font-medium px-6 py-3 rounded-full transition-all">
              Try our new Practice Mode
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
