
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const categories = [
    { name: 'About Quizlet', links: ['About', 'How Quizlet works', 'Careers', 'Advertise', 'Press'] },
    { name: 'For Students', links: ['Flash cards', 'Learn', 'Solutions', 'Quizlet Plus', 'Explanations'] },
    { name: 'For Teachers', links: ['Live', 'Checkpoint', 'Blog', 'Be the Change', 'Contact Support'] },
    { name: 'Resources', links: ['Help Center', 'Honor Code', 'Community Guidelines', 'Privacy', 'Terms'] },
    { name: 'Language', links: ['English (USA)', 'English (UK)', 'Español', 'Français', 'Deutsch'] },
  ];

  return (
    <footer className="bg-quizlet-dark-gray text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.links.map((link, i) => (
                  <li key={i}>
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">quizlet</div>
          <div className="text-gray-400 text-sm">
            © 2025 Quizlet Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
