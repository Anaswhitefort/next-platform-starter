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
          "name": "Who are the Official Shopify Partners in Abu Dhabi UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vexa Marketing Agency, located in Abu Dhabi, is an Official Shopify Partner since 2020. We specialize in Shopify website development, e-commerce consultation, and strategic growth management to help businesses thrive in the competitive e-commerce space."
          }
        },
        {
          "@type": "Question",
          "name": "What are the leading eCommerce services offered in Abu Dhabi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our eCommerce services in Abu Dhabi include tailored website development, advanced features integration, and strategic growth solutions to ensure a powerful and efficient platform that drives success in the digital marketplace."
          }
        },
        {
          "@type": "Question",
          "name": "How do you help with GCC Ecommerce Setup in Abu Dhabi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We assist businesses in entering the GCC market by offering services such as licensing, payment gateway integration, storage solutions, delivery systems, and targeted marketing strategies. Our expert onboarding services ensure smooth market penetration and sustainable growth."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in Shopify Store Setup and Customization services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We customize Shopify stores to match your brand identity, ensuring a seamless user experience. From theme selection to layout optimization, we focus on creating a store that reflects your business's unique vision."
          }
        },
        {
          "@type": "Question",
          "name": "How does Feature Integration improve Shopify stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We enhance store functionality by integrating third-party tools for social media, inventory management, email marketing, and more. These integrations work together to optimize store performance and user experience."
          }
        },
        {
          "@type": "Question",
          "name": "What does Payment Gateway and Checkout Setup include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our payment gateway setup ensures secure transactions and a seamless checkout experience. We integrate trusted payment systems to boost customer confidence and minimize cart abandonment."
          }
        },
        {
          "@type": "Question",
          "name": "How do you implement custom functionalities for Shopify?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We develop custom Shopify functionalities using APIs to meet specific business needs. This includes unique features and process automation that enhance your store's capabilities."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of migrating to Shopify?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We ensure a seamless transition to Shopify, including data migration, SEO preservation, and site performance optimization. Shopify's robust features and user-friendly interface provide an excellent foundation for your online store."
          }
        },
        {
          "@type": "Question",
          "name": "How do you optimize Shopify stores for SEO and performance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We drive organic traffic and improve user experience with comprehensive SEO strategies, including keyword optimization and site speed enhancements, ensuring top performance in search engine rankings."
          }
        },
        {
          "@type": "Question",
          "name": "What services do you offer for Shopify POS setup in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide Shopify POS setup and staff training, integrating online and offline inventory management into one system. Our solutions streamline sales tracking and operations for businesses in the UAE."
          }
        },
        {
          "@type": "Question",
          "name": "How do you integrate Tabby and Tamara with Shopify stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We integrate Tabby and Tamara payment options into your Shopify store, providing customers in the GCC with flexible payment solutions. This integration enhances customer experience and drives sales."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide Shopify staff training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer comprehensive Shopify training both online and offline, tailored to meet your team's needs. Our training includes Shopify dashboard management and POS system operations."
          }
        }
      ]
    }
    

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
                       className="text-white dark:text-black lg:text-5xl text-3xl font-bold lg:!leading-[56px] animate-jello"
                    
                    >
                        Shopify Partner Services
                    </h2>
      <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
   <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen1 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown1}
          style={{ cursor: 'pointer' }}
        >
          <span>Store Setup and customization</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen1 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-4 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">We configure your Shopify store, tailoring it to your brand identity and business requirements. From theme selection to layout customization, we ensure every aspect reflects your unique vision and enhances user experience.</div></li>
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
          <span>Feature integration and 3rd-part integration</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen2 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
  <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
  We improve your store's functionality with seamless integration of third-party apps and features.
Whether it's social media integration, inventory
management, or email marketing tools, we ensure all
integrations work flawlessly together to optimize
your store's performance.</div>
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
          <span>Payment Gateway and check-out setup</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen3 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">Smooth and easy payment processing is essential for
customer satisfaction and conversion. We integrate
trusted payment gateways to ensure secure
transactions and smooth checkout experiences that
inspire confidence and minimize cart abandonment.</div></li>
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
          <span>Custom Functionalities and API work</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen4 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                  <li><div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">To elevate your store's capabilities with custom
functionalities to your specific needs. Our expertise
in Shopify APIs allows us to implement unique
features and automate processes.</div></li>
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
          <span>Custom Theme development</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen5 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Stand out from the competition with a custom-made
Shopify them. From layout design to color scheme
selection, we design visually stunning and highly
functional themes that capture your brand essence
and leave a lasting impression on visitors.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>


        {/* 6th Dropdown */}
  <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen6 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown6}
          style={{ cursor: 'pointer' }}
        >
          <span>SEO and Performance optimization</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen6 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Drive organic traffic and maximize conversions with
our comprehensive SEO and performance
optimization strategies. From keyword optimization to
site speed enhancements, we ensure your Shopify
store is fully optimized for search engines and
delivers lightning-fast performance for an
exceptional user experience.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

        {/* 7th Dropdown */}
  <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen7 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown7}
          style={{ cursor: 'pointer' }}
        >
          <span>Migration to Shopify</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen7 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Migrating to Shopify is straightforward and
advantageous for businesses looking to establish or
enhance their online presence. It offers a userfriendly interface, robust migration tools, and
extensive support resources for a seamless transition. Effortlessly transition to Shopify with our comprehensive migration services. Includes data transfer, SEO optimization, and preserving site integrity and performance.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

        {/* 8th Dropdown */}
  <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen8 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown8}
          style={{ cursor: 'pointer' }}
        >
          <span>Shopify Market and Languages</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen8 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Shopify's market and language capabilities enable
global reach and localization, providing a seamless
shopping experience in multiple languages. For the
GCC market, translate your website into Arabic with
the help of our professional translators and make it
user-friendly for Arabic-speaking customers.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

       {/* 9th Dropdown */}
       <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen9 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown9}
          style={{ cursor: 'pointer' }}
        >
          <span>Shopify POS Setup for UAE</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen9 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   With our Shopify POS setup keep your online and
offline inventory in one system, monitored your online
and offline stores sale using one platform . We setup
your POS system and train your staffs, with the
advanced user friendly Shopify POS system.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>


       {/* 10th Dropdown */}
       <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen10 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown10}
          style={{ cursor: 'pointer' }}
        >
          <span>Tabby and Tamara Setup</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen10 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black">
                   Integrate your store with Tabby and Tamara to
boost sales, enhance customer experience, and
increase conversions. Our technical expertise
ensures seamless integration, enabling you to reach
a broader audience in the GCC region with flexible,
trusted payment options.</div>
                </li>

                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

       {/* 11th Dropdown */}
       <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
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

       {/* 12th Dropdown */}
       <div className="relative bg-black/0 rounded-[15px] text-lg border border-white dark:border-black" style={{ boxShadow: '4px 6px 0px 4px #35cbee' }}>
        <div 
          className={`text-lg text-white dark:text-black font-bold mb-2 text-left w-full no-underline pl-4 sm:w-auto sm:pl-4 py-2 sm:py-1 ${isOpen11 ? 'h-auto' : 'h-[48px]'}`} 
          onClick={toggleDropdown11}
          style={{ cursor: 'pointer' }}
        >
          <span>Staff Training - Offline & Online</span>
          <span className="ml-2">&#9662;</span> {/* Down arrow */}
          {isOpen11 && (
            <div className="mt-2 w-full bg-black/0 ">
              <div className="px-2 pt-2 pb-4 bg-black/0 h-auto flex flex-col justify-center">
                <ul className="space-y-2">
                <li>
                   <div className="text-sm font-normal dropdown-item block text-left text-white dark:text-black can">
                   We offer comprehensive Shopify training, available
both online and offline, tailored to meet your team's
needs. Whether your staff requires guidance on the
Shopify dashboard or hands-on training for Shopify
POS, our expert instructors ensure professional,
practical, and effective learning.</div>
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
