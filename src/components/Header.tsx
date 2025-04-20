
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { NavMenu } from './navigation/NavMenu';

const Header = () => {
  const { toast } = useToast();

  const handleUpgradeClick = () => {
    toast({
      title: "Upgrade to Plus",
      description: "Premium features will be available soon!",
    });
  };

  const handleProfileClick = () => {
    toast({
      title: "Profile",
      description: "Profile functionality will be available soon!",
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
          
          <div className="hidden md:flex items-center">
            <NavMenu />
          </div>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="relative hidden md:block max-w-xl w-full mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Search study sets, textbook solutions, and more" 
                className="pl-10 pr-4 py-2 rounded-md bg-gray-100 border-gray-200 w-full hover:bg-white focus:bg-white transition-colors"
              />
            </form>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              onClick={handleUpgradeClick}
              className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium rounded-full px-6 transition-colors hidden md:flex">
              Upgrade
            </Button>
            
            <Button 
              variant="ghost"
              onClick={handleProfileClick}
              className="text-quizlet-dark-gray hover:text-quizlet-blue transition-colors">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
