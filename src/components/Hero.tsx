
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleSignUp = () => {
    toast({
      title: "Sign up",
      description: "Sign up functionality will be available soon!",
    });
  };

  const handleTeacherClick = () => {
    toast({
      title: "Teacher account",
      description: "Teacher account creation will be available soon!",
    });
  };

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-quizlet-dark-gray mb-6 animate-fade-in">
            How do you want to study?
          </h1>
          <p className="text-xl md:text-2xl text-quizlet-dark-gray mb-8 animate-fade-in">
            Master whatever you're learning with Quizlet's interactive flashcards, practice tests, and study activities.
          </p>
          <div className="flex flex-col items-center space-y-4 animate-fade-in">
            <Button 
              onClick={handleSignUp}
              className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium px-8 py-3 text-lg rounded-full w-48 transition-transform hover:scale-105">
              Sign up for free
            </Button>
            <Button 
              variant="link" 
              onClick={handleTeacherClick}
              className="text-quizlet-blue hover:text-quizlet-dark-blue hover:underline transition-colors">
              I'm a teacher
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
