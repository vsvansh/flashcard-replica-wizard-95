
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-quizlet-dark-gray mb-6">
              Every class, every test, one ultimate study app
            </h2>
            <p className="text-lg text-quizlet-text-gray mb-6">
              Create your own flashcards or find sets made by teachers, students, and experts. Study them anytime, anywhere with our free app.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="block">
                <img src="https://static.quizlet.com/a/j/dist/app/i/app-store-badge.097425ba1ca6.svg" alt="Download on the App Store" className="h-12" />
              </a>
              <a href="#" className="block">
                <img src="https://static.quizlet.com/a/j/dist/app/i/play-store-badge.6c18653e316a.svg" alt="Get it on Google Play" className="h-12" />
              </a>
            </div>
          </div>
          
          <div className="bg-quizlet-blue p-10 rounded-lg text-center">
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md p-8 transform -rotate-2 relative max-w-xs">
                <div className="absolute top-4 left-4 bg-quizlet-blue rounded-full h-8 w-8 flex items-center justify-center">
                  <div className="text-white font-bold">Q</div>
                </div>
                <div className="mt-8">
                  <div className="h-4 w-5/6 bg-gray-200 rounded mb-3 mx-auto"></div>
                  <div className="bg-gray-200 h-40 w-full rounded-md flex items-center justify-center">
                    <div className="text-gray-400">Map of South Africa</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 transform rotate-2 relative max-w-xs ml-[-60px] mt-16">
                <div className="absolute top-3 left-3 bg-quizlet-blue rounded-full h-6 w-6 flex items-center justify-center">
                  <div className="text-white font-bold text-sm">Q</div>
                </div>
                <div className="mt-6">
                  <div className="h-3 w-5/6 bg-gray-200 rounded mb-2 mx-auto"></div>
                  <div className="bg-gray-200 h-24 w-full rounded-md flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Map of South Africa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
