
import React from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus, BookOpen, FolderPlus, Search } from 'lucide-react';

const QuickActions = () => {
  const { toast } = useToast();

  const handleAction = (action: string) => {
    toast({
      title: action,
      description: `${action} feature will be available soon!`,
    });
  };

  const actions = [
    { name: "Create Study Set", icon: Plus },
    { name: "Join Class", icon: BookOpen },
    { name: "Create Folder", icon: FolderPlus },
    { name: "Expert Solutions", icon: Search },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={() => handleAction(action.name)}
              variant="outline"
              className="flex items-center gap-2 border-2 border-quizlet-blue text-quizlet-blue hover:bg-quizlet-light-blue px-6 py-4 rounded-full"
            >
              <action.icon className="h-5 w-5" />
              {action.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
