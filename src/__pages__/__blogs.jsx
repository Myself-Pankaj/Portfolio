import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { IoCodeSlashOutline as Code, IoCloud as Cloud } from 'react-icons/io5';
import { BsDatabaseFillGear as Database } from 'react-icons/bs';
import { FaBookOpen as BookOpen, FaChevronDown as ChevronDown, FaChevronUp as ChevronUp } from 'react-icons/fa';

const blogCategories = [
    {
        icon: <Code color="#3498db" />,
        title: 'DSA Development',
        description: 'Dive deep into Data Structures and Algorithms',
        blogs: [
            {
                title: 'Data Types and Array Basic',
                // excerpt: 'Explore the basic of Dsa',
                link: 'https://datatype.hashnode.dev/series/dsa'
            },
            {
                title: 'Hashing Techinque',
                // excerpt: 'Solving complex problems with DP approaches'
                link: 'https://datatype.hashnode.dev/hash-array'
            },
            {
                title: 'Number Games',
                // excerpt: 'Understanding graph theory fundamentals'
                link: 'https://datatype.hashnode.dev/series/number-game'
            }
        ]
    },
    {
        icon: <Cloud color="#2ecc71" />,
        title: 'DevOps Insights',
        description: 'Modern infrastructure and deployment strategies',
        blogs: [
            {
                title: 'Git & Github',
                // excerpt: 'Advanced container orchestration techniques'
                link: 'https://medium.com/@itsmepankaj/list/git-github-ebcea9ade2de'
            },
            {
                title: 'CI/CD Pipeline',
                link: 'https://github.com/ifeelpankaj/Pipelining/blob/main/README.md'
            }
        ]
    },
    {
        icon: <Database color="#e74c3c" />,
        title: 'System Design',
        description: 'Architectural patterns and scalable solutions',
        blogs: [
            {
                title: 'Microservices Architecture',
                excerpt: 'Working on it...'
            }
        ]
    },
    {
        icon: <BookOpen color="#9b59b6" />,
        title: 'Informative Tech',
        description: 'Latest trends and technological insights',
        blogs: [
            {
                title: 'AWS EC2 and Jenkins Set Up',
                link: 'https://datatype.hashnode.dev/series/devops'
            }
        ]
    }
];

const Blogs = () => {
    const [openCategory, setOpenCategory] = React.useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        <section
            className="blogs-showcase"
            id="blogs">
            <div className="blogs-container">
                <h1>Tech Blog Insights</h1>
                <div className="blog-categories">
                    {blogCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="blog-category"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}>
                            <div
                                className="category-header"
                                onClick={() => toggleCategory(index)}>
                                <div className="category-title">
                                    {category.icon}
                                    <span>{category.title}</span>
                                </div>
                                <motion.div
                                    className="expand-icon"
                                    animate={{
                                        rotate: openCategory === index ? 180 : 0
                                    }}>
                                    {openCategory === index ? <ChevronUp /> : <ChevronDown />}
                                </motion.div>
                            </div>

                            <AnimatePresence>
                                {openCategory === index && (
                                    <motion.div
                                        className="category-blogs"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{
                                            opacity: 1,
                                            height: 'auto',
                                            transition: { duration: 0.3 }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                            transition: { duration: 0.2 }
                                        }}>
                                        <p className="category-description">{category.description}</p>
                                        {category.blogs.map((blog, blogIndex) => (
                                            <div
                                                key={blogIndex}
                                                className="blog-item">
                                                <h3>{blog.title}</h3>
                                                <p>{blog.excerpt}</p>
                                                <a
                                                    href={blog.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    Read More
                                                </a>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
