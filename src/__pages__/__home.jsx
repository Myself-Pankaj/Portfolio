import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import me from '../__assets__/me.png';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';

const Home = () => {
    const isMobile = window.innerWidth <= 768;
    const animations = {
        h1: {
            initial: {
                x: '-100%',
                opacity: 0
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: '-100%',
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    };
    const chevronRef = React.useRef(null); // Ref for the BsChevronDown component
    const [isScrolledToEnd, setIsScrolledToEnd] = React.useState(false);
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            chevronRef.current.style.opacity = entry.isIntersecting ? 1 : 0;
        });

        if (chevronRef.current) {
            observer.observe(chevronRef.current);
        }

        const handleScroll = () => {
            const scrollHeight = document.body.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset;
            const clientHeight = window.innerHeight;
            const threshold = isMobile ? 0.9 : 0.8;
            setIsScrolledToEnd(scrollTop + clientHeight >= scrollHeight * threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [chevronRef, isMobile]);
    return (
        <div
            className="homepage"
            id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br /> Pankaj Kholiya
                    </motion.h1>

                    <Typewriter
                        options={{
                            strings: ['Full Stack Developer', 'Software Engineer', 'A Creator', 'Code Tinkerer'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            wrapperClassName: 'typewriterpara'
                        }}
                    />

                    <div>
                        <a href="mailto:ifeelpankaj@gmail.com">Hire Me</a>
                        <a href="#work">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>

                    <aside>
                        <article>
                            <p>+ 20</p>
                            <span>Projects Done</span>
                        </article>

                        <article data-special>
                            <p>Contact</p>
                            <span>pankajkholiya04@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img
                    src={me}
                    alt="Pankaj"
                />
            </section>
            <BsChevronDown
                ref={chevronRef}
                style={{ opacity: isScrolledToEnd ? 0 : 1 }}
            />
        </div>
    );
};

export default Home;
