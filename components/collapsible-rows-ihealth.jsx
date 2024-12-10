'use client'; // Ensures this component runs on the client side

import { useState, useEffect } from 'react';

export default function CollapsibleRows() {
  // States for each dropdown
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);


  // Toggle functions for each dropdown
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };
  const toggleDropdown8 = () => {
    setIsOpen8(!isOpen8);
  };
  const toggleDropdown9 = () => {
    setIsOpen9(!isOpen9);
  };
  const toggleDropdown10 = () => {
    setIsOpen10(!isOpen10);
  };
  const toggleDropdown11 = () => {
    setIsOpen11(!isOpen11);
  };
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Achievement Summary?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 2022-2023, we successfully generated 1 million AED in sales for the brand new eCommerce."
          }
        },
        {
          "@type": "Question",
          "name": "What was your role in this achievement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our role included Ecommerce Development, Marketing Strategy, Paid Ads, and SEO."
          }
        },
        {
          "@type": "Question",
          "name": "What was the main objective?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our objective was to get the best return on investment with minimal ad spend for eCommerce. We focused on smart strategies, targeting the right audience, and making every advertising dollar count to boost profits while keeping costs down."
          }
        },
        {
          "@type": "Question",
          "name": "What was the duration of this project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The project duration was from 2022 to 2024."
          }
        },
        {
          "@type": "Question",
          "name": "What tools were used?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We used Ads Manager (Google, Meta, TikTok), Gtag, and Shopify for this project."
          }
        }
      ]
    };
  
    // Injecting the FAQ schema in the head of the document
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);
  
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div className="space-y-4">
      {/* First Dropdown */}
   
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
   <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen1 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown1}
          style={{ cursor: 'pointer' }}
        >
          <span>Achievement Summary</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen1 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-4 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">In 2022-2023, we successfully generated 1 million AED in sales for the brand new eCommerce.</div></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Dropdown */}
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen2 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown2}
          style={{ cursor: 'pointer' }}
        >
          <span>Our Role</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen2 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
  <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
  Ecommerce Development, Marketing Strategy, Paid Ads, SEO.</div>
</li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Third Dropdown */}
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen3 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown3}
          style={{ cursor: 'pointer' }}
        >
          <span>Objective</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen3 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">Get the best return on your investment with minimal ad spend for eCommerce. We focus on smart strategies, targeting the right audience, and making every advertising dollar count. Our goal is to boost your profits while keeping costs down and driving real growth for your eCommerce business.</div></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

            {/* 4th Dropdown */}
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen4 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown4}
          style={{ cursor: 'pointer' }}
        >
          <span>Duration</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen4 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">2022 - 2024</div></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

  {/* 5th Dropdown */}
  <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen5 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown5}
          style={{ cursor: 'pointer' }}
        >
          <span>Tools used</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen5 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Ads Manager (Google, Meta, TikTok), Gtag, Shopify</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>


      </div>




   
  );
}
