
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, BookOpen, FolderPlus, Search, PlayCircle, Book } from 'lucide-react';

const QuickActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} feature will be available soon!`,
    });
  };

  const actions = [
    { name: "Create Study Set", icon: Plus, color: "bg-quizlet-blue" },
    { name: "Join Class", icon: BookOpen, color: "bg-green-500" },
    { name: "Create Folder", icon: FolderPlus, color: "bg-purple-500" },
    { name: "Expert Solutions", icon: Search, color: "bg-yellow-500" },
    { name: "Live Sessions", icon: PlayCircle, color: "bg-pink-500" },
    { name: "Textbook Solutions", icon: Book, color: "bg-indigo-500" },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-200">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={() => handleAction(action.name)}
              variant="outline"
              className={`flex flex-col items-center gap-3 h-24 ${action.color} text-white hover:opacity-90 transition-all duration-300`}
            >
              <action.icon className="h-6 w-6" />
              <span className="text-center text-sm font-medium">{action.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
