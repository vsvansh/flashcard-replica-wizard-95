
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const categories = [
    { 
      name: 'About us', 
      links: [
        { name: 'About Quizlet', url: '/' },
        { name: 'How Quizlet works', url: '/' },
        { name: 'Careers', url: '/' },
        { name: 'Advertise with us', url: '/' },
      ]
    },
    { 
      name: 'For students', 
      links: [
        { name: 'Flashcards', url: '/' },
        { name: 'Test', url: '/' },
        { name: 'Learn', url: '/' },
        { name: 'Solutions', url: '/' },
        { name: 'Quizlet Plus', url: '/' },
        { name: 'Study Guides', url: '/' },
        { name: 'Pomodoro timer', url: '/' },
      ]
    },
    { 
      name: 'For teachers', 
      links: [
        { name: 'Live', url: '/' },
        { name: 'Blog', url: '/' },
        { name: 'Be the Change', url: '/' },
        { name: 'Quizlet Plus for teachers', url: '/' },
      ]
    },
    { 
      name: 'Resources', 
      links: [
        { name: 'Help center', url: '/' },
        { name: 'Sign up', url: '/' },
        { name: 'Honor code', url: '/' },
        { name: 'Community guidelines', url: '/' },
        { name: 'Privacy', url: '/' },
        { name: 'Terms', url: '/' },
        { name: 'Ad and Cookie Policy', url: '/' },
        { name: 'Quizlet for Schools', url: '/' },
        { name: 'Parents', url: '/' },
      ]
    },
    { 
      name: 'Language', 
      links: [
        { name: 'English (USA)', url: '/' },
      ]
    },
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "New Zealand", 
    "Germany", "France", "Spain", "Italy", "Japan", "South Korea", "India", "China",
    "Mexico", "Sweden", "Netherlands", "Switzerland", "Brazil", "Poland", "Turkey",
    "Ukraine", "Taiwan", "Vietnam", "Indonesia", "Philippines", "Russia"
  ];

  const socialLinks = [
    { name: "TikTok", icon: "tiktok" },
    { name: "Twitter", icon: "twitter" },
    { name: "Facebook", icon: "facebook" },
    { name: "Instagram", icon: "instagram" },
    { name: "YouTube", icon: "youtube" },
    { name: "LinkedIn", icon: "linkedin" },
  ];

  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4 text-quizlet-dark-gray">{category.name}</h3>
              <ul className="space-y-3">
                {category.links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.url} className="text-quizlet-text-gray hover:text-quizlet-blue transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {category.name === 'Language' && (
                <div className="mt-4">
                  <div className="border border-gray-300 rounded-md p-3 flex items-center justify-between">
                    <span>English (USA)</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <div className="mt-8">
                    <img src="https://assets.quizlet.com/a/j/dist/app/i/qrcode.f1af4648f8d9.png" alt="QR code" className="w-32 h-32 mb-3" />
                    <div className="text-quizlet-text-gray font-medium">Get the app</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="font-bold text-lg mb-4 text-quizlet-dark-gray">Country</h3>
          <div className="flex flex-wrap gap-4">
            {countries.map((country, index) => (
              <Link key={index} to="/" className="text-quizlet-text-gray hover:text-quizlet-blue transition-colors">
                {country}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-8">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-quizlet-blue transition-colors">
                <span className="sr-only">{link.name}</span>
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  {link.icon === "facebook" && <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />}
                  {link.icon === "twitter" && <path d="M8.53 20C15.99 20 20.06 13.83 20.06 8.5C20.06 8.33 20.06 8.16 20.05 8C20.98 7.37 21.74 6.61 22.44 5.76C21.65 6.09 20.78 6.3 19.95 6.38C20.9 5.8 21.6 4.9 21.94 3.83C21.06 4.36 20.07 4.75 19.14 4.95C17.87 3.63 15.93 3.01 14 3.42C12.07 3.83 10.57 5.15 10 6.8C9.43 8.46 9.89 10.28 11.22 11.5C9.38 11.44 7.64 10.97 6.05 10.09C6.05 10.12 6.05 10.14 6.05 10.17C6.05 12.29 7.42 14.16 9.44 14.72C8.64 14.92 7.79 14.95 6.97 14.8C7.53 16.66 9.22 17.95 11.16 17.99C9.58 19.26 7.62 19.94 5.6 19.93C5.09 19.93 4.58 19.89 4.08 19.82C6.13 21.21 8.55 21.93 11.04 21.92C15.37 21.95 19.5 19.73 22.25 15.98C22.98 15.08 23.53 14.06 23.92 12.96C24.3 11.86 24.5 10.7 24.5 9.53C24.5 9.35 24.5 9.17 24.5 9" />}
                  {link.icon === "instagram" && <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />}
                  {link.icon === "youtube" && <path d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" />}
                  {link.icon === "linkedin" && <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" />}
                  {link.icon === "tiktok" && <path d="M16.6 5.82C16.6 5.82 18.55 5.82 18.55 5.82C18.55 5.82 18.55 9.82 18.55 9.82C19.67 10.68 20.61 11.69 21.37 12.83C21.37 12.83 19.05 12.83 19.05 12.83C18.6 11.95 17.89 11.2 17 10.69L17 18.08C17 19.68 16.38 21.22 15.26 22.34C14.15 23.45 12.61 24.07 11 24.07C7.68 24.07 5 21.37 5 18.07C5 14.76 7.69 12.07 11 12.07L11 14.87C9.8 14.87 8.83 15.85 8.83 17.06C8.83 18.26 9.8 19.24 11 19.24C12.2 19.24 13.17 18.27 13.17 17.06L13.17 3L16.6 3L16.6 5.82Z" />}
                </svg>
              </a>
            ))}
          </div>
          
          <div className="flex items-center">
            <div className="text-gray-500 text-sm">© 2025 Quizlet, Inc.</div>
            <img 
              src="https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=62,onerror=redirect,w=62/https://assets.quizlet.com/a/j/dist/app/i/coppa-seal.48e00380e.png" 
              alt="COPPA Certification" 
              className="h-16 ml-4" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
