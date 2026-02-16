import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ isContained = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine positioning class based on isContained prop
    const positionClass = isContained ? 'absolute top-0 left-0 w-full' : 'fixed w-full';

    return (
        <nav className={`${positionClass} z-50 transition-all duration-300 ${scrolled && !isContained ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
            {isContained && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-px bg-gray-300 pointer-events-none" />
            )}
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group" target="_blank" rel="noopener noreferrer">
                    <div className="text-gray-900 hover:text-black transition-colors">
                        {/* New Logo: Roof + Circle */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 10L12 3L21 10" />
                            <circle cx="12" cy="16" r="5" />
                        </svg>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Home</Link>
                    <Link to="/feature" className="text-sm font-medium text-gray-600 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">Features</Link>

                    {/* Solutions Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black transition-colors">
                            Solutions <ChevronDown size={14} />
                        </button>
                        <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                                <Link to="/core-engine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg" target="_blank" rel="noopener noreferrer">
                                    Core GTM Engine
                                </Link>
                                <Link to="/platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg" target="_blank" rel="noopener noreferrer">
                                    Platform Overview
                                </Link>
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg" target="_blank" rel="noopener noreferrer">
                                    Integrations
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">Pricing</Link>

                    {/* Resources Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Resources
                            <svg className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden p-2">
                                <Link to="/book-demo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg" target="_blank" rel="noopener noreferrer">
                                    Book a Demo
                                </Link>
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg" target="_blank" rel="noopener noreferrer">
                                    Blog
                                </Link>
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg" target="_blank" rel="noopener noreferrer">
                                    Help Center
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">Login</Link>
                    <Link to="/book-demo" className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200" target="_blank" rel="noopener noreferrer">
                        Book a demo
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-900 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-xl">
                    <Link to="/" className="p-2 hover:bg-gray-50 rounded-lg text-gray-600 font-medium" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">Home</Link>
                    <div className="p-2 text-gray-400 text-xs font-bold uppercase tracking-wider">Solutions</div>
                    <Link to="/core-engine" className="pl-4 p-2 hover:bg-gray-50 rounded-lg text-gray-600 font-medium block" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">Core GTM Engine</Link>
                    <Link to="/platform" className="pl-4 p-2 hover:bg-gray-50 rounded-lg text-gray-600 font-medium block" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">Platform Overview</Link>

                    <Link to="/pricing" className="p-2 hover:bg-gray-50 rounded-lg text-gray-600 font-medium" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">Pricing</Link>

                    <div className="p-2 text-gray-400 text-xs font-bold uppercase tracking-wider">Resources</div>
                    <Link to="/book-demo" className="pl-4 p-2 hover:bg-gray-50 rounded-lg text-gray-600 font-medium block" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">Book a Demo</Link>

                    <div className="h-px bg-gray-100 my-2" />
                    <Link to="/login" className="p-2 text-center text-gray-600 font-medium" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">Login</Link>
                    <Link to="/signup" className="btn-primary w-full text-center justify-center" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer">
                        Get Started
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
