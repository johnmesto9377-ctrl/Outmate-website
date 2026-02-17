import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Sparkles, Bot, Zap, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-8 overflow-hidden border-t border-gray-900 relative">
            {/* Background Gradient for subtle effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-gray-900/20 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Top Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">

                    {/* Column 1: Platform */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Platform</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
                            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                            <li><Link to="/book-demo" className="hover:text-white transition-colors">Book a demo</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Company</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Contact</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/company/outmateai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Slack</a></li>
                            <li><a href="mailto:team@outmate.ai" className="hover:text-white transition-colors">Email</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Ask AI About Outmate */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Ask AI About Outmate</h4>
                        <div className="flex flex-wrap gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer shadow-lg shadow-blue-500/20">
                                <Sparkles className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer shadow-lg shadow-green-500/20">
                                <Bot className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer shadow-lg shadow-purple-500/20">
                                <Globe className="w-5 h-5 text-black" />
                            </div>
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer shadow-lg shadow-gray-500/20">
                                <div className="w-5 h-5 rounded-full border-2 border-black"></div>
                            </div>
                            <div className="w-10 h-10 bg-[#FF5A36] rounded-lg flex items-center justify-center hover:bg-[#ff7a5c] transition-colors cursor-pointer shadow-lg shadow-orange-500/20">
                                <span className="text-white font-bold text-xl">✻</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Big Brand Section */}
                <div className="flex items-center justify-center mb-16 select-none pointer-events-none">
                    <div className="relative flex items-center gap-4 md:gap-8">
                        {/* Logo Icon */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-16 h-16 md:w-32 md:h-32 text-white/80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 10L12 3L21 10" />
                            <circle cx="12" cy="16" r="5" />
                        </svg>
                        {/* Text */}
                        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 leading-none tracking-tight drop-shadow-2xl" style={{ fontFamily: 'Arial, sans-serif' }}>
                            Outmate
                        </h1>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left Socials */}
                    <div className="flex gap-8 text-sm text-gray-400 font-medium order-2 md:order-1">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="https://www.linkedin.com/company/outmateai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Slack</a>
                        <a href="mailto:team@outmate.ai" className="hover:text-white transition-colors">Email</a>
                    </div>

                    {/* Right Legal */}
                    <div className="flex gap-8 text-sm text-gray-500 font-medium order-1 md:order-2">
                        <Link to="#" className="hover:text-gray-300 transition-colors">Privacy</Link>
                        <Link to="#" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
                        <span>©Outmate 2026</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
