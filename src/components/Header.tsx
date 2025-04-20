
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const { toast } = useToast();

  const handleCreateClick = () => {
    toast({
      title: "Coming soon",
      description: "This feature will be available soon!",
    });
  };

  const handleLoginClick = () => {
    toast({
      title: "Login",
      description: "Login functionality will be available soon!",
    });
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Search",
      description: "Search functionality will be available soon!",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center">
            <div className="text-3xl font-bold text-quizlet-blue hover:text-quizlet-dark-blue transition-colors">
              Quizlet
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative group">
              <button 
                onClick={() => toast({ title: "Study tools", description: "Study tools will be available soon!" })}
                className="text-quizlet-dark-gray font-medium hover:text-quizlet-blue transition-colors flex items-center px-3 py-2">
                Study tools
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="relative group">
              <button 
                onClick={() => toast({ title: "Subjects", description: "Subject selection will be available soon!" })}
                className="text-quizlet-dark-gray font-medium hover:text-quizlet-blue transition-colors flex items-center px-3 py-2">
                Subjects
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="relative hidden md:block max-w-xl w-full mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Find it faster with a search" 
                className="pl-10 pr-4 py-2 rounded-md bg-gray-100 border-gray-200 w-full hover:bg-white focus:bg-white transition-colors"
              />
            </form>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              onClick={handleCreateClick}
              className="text-quizlet-blue font-semibold hidden md:flex items-center hover:bg-quizlet-light-blue">
              <span className="text-xl">+</span>
              <span className="ml-1">Create</span>
            </Button>
            
            <Button 
              onClick={handleLoginClick}
              className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium rounded-full px-6 transition-colors">
              Log in
            </Button>

            <Button 
              variant="ghost"
              className="md:hidden"
              onClick={() => toast({ title: "Menu", description: "Mobile menu will be available soon!" })}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
