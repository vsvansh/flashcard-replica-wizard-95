
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container px-4 mx-auto flex items-center justify-between h-16">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-quizlet-blue">quizlet</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/home" className="text-quizlet-dark-gray font-medium hover:text-quizlet-blue transition-colors">
              Home
            </Link>
            <Link to="/library" className="text-quizlet-dark-gray font-medium hover:text-quizlet-blue transition-colors">
              Your Library
            </Link>
            <div className="relative group">
              <button className="text-quizlet-dark-gray font-medium hover:text-quizlet-blue transition-colors flex items-center">
                Create
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10 hidden group-hover:block">
                <Link to="/create-set" className="block px-4 py-2 text-sm text-quizlet-dark-gray hover:bg-quizlet-light-gray">
                  Study set
                </Link>
                <Link to="/create-folder" className="block px-4 py-2 text-sm text-quizlet-dark-gray hover:bg-quizlet-light-gray">
                  Folder
                </Link>
                <Link to="/create-class" className="block px-4 py-2 text-sm text-quizlet-dark-gray hover:bg-quizlet-light-gray">
                  Class
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64">
            <Input 
              type="text" 
              placeholder="Study sets, textbooks, questions" 
              className="pl-10 pr-4 py-2 rounded-full bg-quizlet-light-gray border-quizlet-light-gray focus:border-quizlet-blue"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-quizlet-text-gray h-4 w-4" />
          </div>
          
          <Button variant="link" className="text-quizlet-dark-gray hidden md:inline-flex">
            Log in
          </Button>
          
          <Button className="bg-quizlet-blue hover:bg-quizlet-dark-blue text-white font-medium rounded-md">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
