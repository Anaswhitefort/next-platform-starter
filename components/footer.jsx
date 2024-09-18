import Link from 'next/link';
import Image from 'next/image';
import vexaLogo from 'public/vexa-logo.svg';
import { FaFacebookF, FaSnapchatGhost, FaLinkedinIn, FaTiktok, FaInstagram } from 'react-icons/fa';

export function Footer() {
    return (
        <footer className="bg-black/0 rounded-[15px] border border-white mb-3" style={{ boxShadow: '4px 6px 0px 4px #35cbee', marginTop: '5%' }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <Link href="/">
                            <Image src={vexaLogo} alt="Vexa Marketing Agency Abu Dhabi logo" />
                        </Link>
                        <p className="py-8 text-sm text-white lg:max-w-xs text-left">We are a team of creative content creators, marketers, graphic designers and developers. Assisting the online growth of small and medium-sized businesses based in Abu Dhabi</p>
                        <a href="javascript:;" className="py-2.5 px-5 h-9 block w-fit no-underline bg-[#35cbee] rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-black lg:mx-0">
                            Contact us
                        </a>
                    </div>

                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white font-medium mb-7">Vexa Marketing Agency</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Home</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">About</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Pricing</a></li>
                            <li><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Features</a></li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white font-medium mb-7">Products</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Figma UI System</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Icons Assets</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Responsive Blocks</a></li>
                            <li><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Components Library</a></li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white font-medium mb-7">Resources</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">FAQs</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Quick Start</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Documentation</a></li>
                            <li><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">User Guide</a></li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-white font-medium mb-7">Blogs</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">News</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Tips & Tricks</a></li>
                            <li className="mb-6"><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">New Updates</a></li>
                            <li><a href="javascript:;" className="text-white hover:text-[#35cbee] no-underline">Events</a></li>
                        </ul>
                    </div>
                </div>
                <div className="items-center justify-center mb-5 bottom-4 right-4 flex space-x-3 text-white">
                            <a href="https://www.facebook.com/vexauae" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a href="https://www.snapchat.com/add/vexa.ae" target="_blank" rel="noopener noreferrer">
                                <FaSnapchatGhost className="text-xl" />
                            </a>
                            <a href="https://www.linkedin.com/company/vexa-ae/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-xl" />
                            </a>
                            <a href="https://www.tiktok.com/@vexa.ae" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="text-xl" />
                            </a>
                            <a href="https://www.instagram.com/vexa.ae" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-white">©<a href="https://vexa.ae/">Vexa Advertisement LLC, Abu Dhabi</a> 2024, All rights reserved.</span>

                    </div>
                </div>
            </div>
        </footer>
    );
}
