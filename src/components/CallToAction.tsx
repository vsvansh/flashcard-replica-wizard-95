
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="bg-quizlet-blue py-16">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to start learning with Quizlet?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join millions of students who are already studying smarter, not harder.
          </p>
          <Button className="bg-white hover:bg-gray-100 text-quizlet-blue font-medium px-8 py-3 text-lg">
            Get started for free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
