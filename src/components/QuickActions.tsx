
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, BookOpen, FolderPlus, Search, PlayCircle, Book } from 'lucide-react';

const QuickActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: `${action} Selected`,
      description: `Opening ${action.toLowerCase()}...`,
      variant: "default",
    });
  };

  const actions = [
    { name: "Create Study Set", icon: Plus, color: "bg-quizlet-blue hover:bg-blue-600" },
    { name: "Join Class", icon: BookOpen, color: "bg-green-500 hover:bg-green-600" },
    { name: "Create Folder", icon: FolderPlus, color: "bg-purple-500 hover:bg-purple-600" },
    { name: "Expert Solutions", icon: Search, color: "bg-yellow-500 hover:bg-yellow-600" },
    { name: "Live Sessions", icon: PlayCircle, color: "bg-pink-500 hover:bg-pink-600" },
    { name: "Textbook Solutions", icon: Book, color: "bg-indigo-500 hover:bg-indigo-600" },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-200">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={() => handleAction(action.name)}
              className={`
                flex flex-col items-center gap-3 h-24 ${action.color}
                text-white transform hover:scale-105 transition-all duration-300
                shadow-sm hover:shadow-md
                opacity-0 animate-[fade-in_0.5s_ease-out_forwards]
                [animation-delay:${index * 100}ms]
              `}
            >
              <action.icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-center text-sm font-medium">{action.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
