'use client'; // Ensures this component runs on the client side

import { useState, useEffect } from 'react';
import { dark } from 'daisyui/src/theming/themes';

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
      <h2
                       className="text-white dark:text-black lg:text-5xl text-3xl font-bold lg:!leading-[56px]"
                       style={{
                         backgroundImage: dark
                             ? 'linear-gradient(rgb(255 255 255), rgb(82, 79, 79), rgb(63 57 57 / 60%))'
                             : 'linear-gradient(to bottom, #fff, #fff, rgba(255, 255, 255, 0.6))',
                         WebkitBackgroundClip: 'text',
                         backgroundClip: 'text',  // Fallback for non-webkit browsers
                         color: 'transparent',
                     }}
                    >
                        Shopify Partner Services
                    </h2>
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
   <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen1 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown1}
          style={{ cursor: 'pointer' }}
        >
          <span>UI/UX Development</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen1 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-4 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">Enhance conversions with our skilled Shopify UI/UX developers. Engage visitors with intuitive interfaces, seamless navigation, and compelling visuals.</div></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Dropdown */}
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen2 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown2}
          style={{ cursor: 'pointer' }}
        >
          <span>Store Revamp/Improvement</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen2 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
  <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
  Transform your Shopify store for an engaging online experience. Enhance brand identity, optimize user flow, and increase sales satisfaction.</div>
</li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Third Dropdown */}
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen3 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown3}
          style={{ cursor: 'pointer' }}
        >
          <span>Custom Store Development</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen3 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">From advanced features to seamless integrations tailored to your business needs, our expert developers deliver scalable solutions that drive growth and efficiency. Unlock your e-commerce potential with customized Shopify store solutions. Showcase your brand while enhancing performance with our Shopify expertise.</div></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

            {/* 4th Dropdown */}
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen4 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown4}
          style={{ cursor: 'pointer' }}
        >
          <span>Theme Customization</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen4 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">Vexa is one of the fastest growing digital marketing company in Abu dhabi. Renowned in the region for assisting businesses in Abu Dhabi to expand their reach, grow, and thrive at an affordable price.  Our team is made up of passionate digital enthusiasts and creative thinkers who are fully dedicated to helping our clients succeed.</div></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

  {/* 5th Dropdown */}
  <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen5 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown5}
          style={{ cursor: 'pointer' }}
        >
          <span>App & Channel Integration</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen5 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Expand the capabilities and reach of your Shopify store with seamless integration of third-party apps and sales channels.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>


        {/* 6th Dropdown */}
  <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen6 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown6}
          style={{ cursor: 'pointer' }}
        >
          <span>Shipping/Tax/Payment Setup</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen6 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Streamline Shopify store management and optimize checkout processes with expert setup of shipping, tax, and payment gateway options.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

        {/* 7th Dropdown */}
  <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen7 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown7}
          style={{ cursor: 'pointer' }}
        >
          <span>Website Migration</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen7 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Effortlessly transition to Shopify with our comprehensive migration services. Includes data transfer, SEO optimization, and preserving site integrity and performance.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

        {/* 8th Dropdown */}
  <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen8 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown8}
          style={{ cursor: 'pointer' }}
        >
          <span>Bug Fixing/Troubleshooting</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen8 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Swiftly resolve issues with our expert bug-fixing and troubleshooting services to minimize downtime and enhance customer satisfaction.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

       {/* 9th Dropdown */}
       <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen9 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown9}
          style={{ cursor: 'pointer' }}
        >
          <span>Responsive & Custom Coding</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen9 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Optimize performance, usability, and accessibility with responsive website design and custom coding that drives engagement and conversions.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>


       {/* 10th Dropdown */}
       <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen10 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown10}
          style={{ cursor: 'pointer' }}
        >
          <span>Wholesale/Dropshipping/B2B</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen10 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Expand market reach with Shopify solutions for wholesale, dropshipping, and B2B. Custom pricing and automated fulfillment support scaling success.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

       {/* 11th Dropdown */}
       <div className="relative bg-black/0 rounded-[15px] text-lg border border-white" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen11 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown11}
          style={{ cursor: 'pointer' }}
        >
          <span>Custom Product/Landing Page</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen11 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black can">
                   Showcase your products with compelling custom product page designs that highlight offerings with engaging visuals and persuasive content.</div>
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
