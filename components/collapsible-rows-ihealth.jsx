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
          "name": "Official Shopify Partner in Abu Dhabi",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Located in Abu Dhabi, Vexa Marketing Agency is your go-to partner for Shopify website development and shopify e-commerce management. As Official Shopify partners since 2020, we bring extensive expertise to the table. Our mission is to support and grow online businesses by providing detailed Shopify website development, expert e-commerce consultation, and strategic growth management services in the ever-evolving e-commerce landscape."
          }
        },
        {
          "@type": "Question",
          "name": "The Leading Ecommerce Service in Abu Dhabi",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As the most trusted provider of Ecommerce Services in Abu Dhabi, we specialize in elevating your online presence with a strategic and tailored approach. Our expert team delivers customized ecommerce development in Abu Dhabi with advanced features designed to meet your unique business needs. Let us help you build a powerful and efficient ecommerce platform that drives success and growth in the competitive digital marketplace."
          }
        },
        {
          "@type": "Question",
          "name": "GCC Ecommerce Setup in Abu Dhabi, UAE: Expert Onboarding Services",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expand your ecommerce business into the GCC market with our comprehensive GCC ecommerce setup services in Abu Dhabi, UAE. We provide everything from licensing and development to payment gateways, storage solutions, delivery systems, and marketing strategies. Our team specializes in helping European and UK manufacturers establish a strong digital presence through marketplace onboarding, inventory management, and targeted marketing, ensuring sustainable growth in the GCC."
          }
        },
        {
          "@type": "Question",
          "name": "Dropdown 4",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First"
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
