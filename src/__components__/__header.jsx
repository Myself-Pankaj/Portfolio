import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../__assets__/logo.png';

const Header = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    };
    const dialogVariants = {
        hidden: { opacity: 0, y: '-100vh', scale: 0.8 },
        visible: {
            opacity: 1,
            y: '0',
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        },
        exit: {
            opacity: 0,
            y: '100vh',
            scale: 0.8,
            transition: { duration: 0.3 }
        }
    };
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinks = [
        { href: '#work-Done', label: 'Latest Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#experiments', label: 'Experiments' },
        { href: '#blogs', label: 'Blogs' },
        { href: '#contact', label: 'Contact', onClick: () => setIsDialogOpen(true) }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 0.8,
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 }
        }
    };

    const about = `I'm Pankaj, a 24-year-old Indian freelance Full Stack Developer with a passion for creating innovative solutions using web technologies. 
    I enjoy solving design challenges, crafting smart user interfaces, and developing rich, user-centric web applications that deliver seamless experiences. 
    My expertise spans frontend, backend, and infrastructure, allowing me to build performant applications that address real-world problems effectively.
    Outside of coding, I love traveling to hilly and mountainous regions, where I find inspiration and relaxation.`;

    return (
        <>
            <motion.header className="header">
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="logo"
                    whileHover={{ scale: 1.2 }}
                />

                {/* Desktop Navigation */}
                <nav className="nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={link.onClick}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                {isMobileView && (
                    <div
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}>
                        <div className="hamburger"></div>
                    </div>
                )}

                {/* Mobile Navigation Overlay */}
                {isMobileView && (
                    <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => {
                                    link.onClick && link.onClick();
                                    toggleMobileMenu();
                                }}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </motion.header>

            <AnimatePresence>
                {isDialogOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="overlay"
                            variants={overlayVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={toggleDialog}
                        />

                        {/* Dialog */}
                        <motion.div
                            className="dialog-box"
                            variants={dialogVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit">
                            <div className="dialog-content">
                                <div className="about-me">
                                    <h2>About Me</h2>
                                    <p>{about}</p>
                                </div>

                                <div className="contact-form">
                                    <h2>Contact Me</h2>
                                    <form>
                                        <label>
                                            Name:
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </label>
                                        <label>
                                            Email:
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </label>
                                        <label>
                                            Message:
                                            <textarea
                                                placeholder="Your Message"
                                                required></textarea>
                                        </label>
                                        <button type="submit">Send Message</button>
                                    </form>
                                </div>
                            </div>

                            <button
                                className="close-button"
                                onClick={toggleDialog}>
                                &times;
                            </button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
export default Header;
