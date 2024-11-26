const Experience = () => {
    const experiences = [
        {
            year: 'Mar/2023 - Present ',
            company: 'Capgemini',
            role: 'Software Engineer',
            responsibilities: [
                `Architected and implemented a highly scalable service using Node.js and 
Javascript, servicing over 500,000 requests daily with 99.99% uptime.`,
                `Led the development of a secure OAuth2.0-based authentication mechanism, 
improving system security and reducing unauthorized access by 40%.`,
                `Designed and built a robust session management system that supported a 
distributed environment, increasing user retention by 15% within the first 
quarter.`
            ]
        },
        {
            year: 'Sept/2022 - Feb/2023',
            company: 'Hexaware Technology Pvt Ltd.',
            role: 'Associate Engineer',
            responsibilities: [
                `Developed a telehealth application with real-time video conferencing 
features, serving 10,000 healthcare professionals.`,
                `Implemented a scalable microservices architecture, facilitating easier 
maintenance and faster feature deployment.`,
                `Collaborated in the design of a RESTful API handling over 200,000 
transactions per week with 99.9% reliability.`
            ]
        },
        {
            year: 'Apr-2021 To Apr-2022',
            company: 'Freelance',
            role: 'Freelance.com',
            responsibilities: [
                'Architected scalable microservices-based solutions.',
                'Integrated secure APIs and optimized backend systems.',
                'Mentored junior developers to enhance team skills.'
            ]
        }
    ];

    return (
        <div
            className="timeline-wrapper"
            id="experience">
            <h2 className="timeline-title">My Professional Journey</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="content">
                            <h3>{exp.year}</h3>
                            <h4>{exp.company}</h4>
                            <h5>{exp.role}</h5>
                            <ul>
                                {exp.responsibilities.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
