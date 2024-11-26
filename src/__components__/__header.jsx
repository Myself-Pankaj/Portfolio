import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../__assets__/logo.png';

const Header = () => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

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

    const navLinks = [
        { href: '#work-Done', label: 'Latest Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#experiments', label: 'Experiments' },
        { href: '#blogs', label: 'Blogs' },
        { href: '#contact', label: 'Contact', onClick: toggleDialog }
    ];
    let about = `I'm Pankaj, a 24-year-old Indian Freelance Full Stack developer. I'm a weird guy who likes making weird things with web technologies.
                  I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                  When not working or futzing around with code.`;
    return (
        <>
            <motion.header
                className="header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}>
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="logo"
                    whileHover={{ scale: 1.2 }}
                />
                <nav className="nav">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={link.onClick}
                            whileHover={{ scale: 1.1, color: '#FF5733' }}
                            transition={{ duration: 0.3 }}>
                            {link.label}
                        </motion.a>
                    ))}
                </nav>
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
