import one from '../__assets__/one.png';
import two from '../__assets__/two.jpeg';
import three from '../__assets__/CabManagement.jpg';
import four from '../__assets__/four.jpeg';

const Projects = () => {
    const projects = [
        {
            name: 'Cab Management System',
            description:
                'A robust cab management platform featuring role-based access for Admins, Drivers, and Users. Integrated with Razorpay for seamless payments, and Google Maps API for dynamic price calculation and route planning. Developed using Vite React for speed and maintainability.',
            link: 'https://github.com/Myself-Pankaj/Production_Frontend/blob/master/README.md',
            image: three
        },
        {
            name: 'Academic-Assets',
            description:
                'An intuitive platform for managing academic resources, assignments, and schedules. Features drag-and-drop functionality for ease of use, designed with a focus on collaboration and organization.',
            link: 'https://github.com/Myself-Pankaj/Academics-Asset-Frontned/blob/master/README.md',
            image: one
        },
        {
            name: 'DocLockr',
            description:
                'A document storage and sharing solution with advanced security features. Designed to manage sensitive data securely while providing an elegant and user-friendly interface. Features include encryption and access control.',
            link: 'https://github.com/Myself-Pankaj/Doclokr-Frontend/blob/master/README.md',
            image: two
        },
        {
            name: 'E-commerce Native App',
            description:
                'A native mobile application for e-commerce with features like product browsing, cart management, and secure checkout. Provides a seamless shopping experience with real-time notifications and cross-platform support.',
            link: 'https://github.com/Myself-Pankaj/PerfumeStore-Frontend/blob/master/README.md',
            image: four
        }
    ];

    return (
        <div
            className="projects"
            id="work-Done">
            <h2 className="projects-title">Latest Work</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card">
                        <div className="project-card-inner">
                            <div className="project-card-front">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="project-image"
                                />
                                <h3>{project.name}</h3>
                            </div>
                            <div className="project-card-back">
                                <p>{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
