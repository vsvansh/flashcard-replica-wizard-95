
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, GraduationCap, Calculator, Globe, Clock, Award } from 'lucide-react';

const SubjectBrowser = () => {
  const { toast } = useToast();

  const subjects = [
    { name: "Languages", icon: Globe, color: "bg-purple-500" },
    { name: "Science", icon: BookOpen, color: "bg-green-500" },
    { name: "Mathematics", icon: Calculator, color: "bg-blue-500" },
    { name: "History", icon: Clock, color: "bg-yellow-500" },
    { name: "Test Prep", icon: Award, color: "bg-red-500" },
    { name: "Academic", icon: GraduationCap, color: "bg-indigo-500" },
  ];

  const handleSubjectClick = (subject: string) => {
    toast({
      title: subject,
      description: `${subject} study sets will be available soon!`,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-quizlet-dark-gray mb-12">
          Browse by Subject
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {subjects.map((subject) => (
            <Button
              key={subject.name}
              onClick={() => handleSubjectClick(subject.name)}
              className={`h-32 flex flex-col items-center justify-center gap-3 ${subject.color} hover:opacity-90 text-white transition-all`}
            >
              <subject.icon className="h-8 w-8" />
              <span className="font-medium">{subject.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectBrowser;
