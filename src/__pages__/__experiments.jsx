import npmPackageGif from '../__assets__/Project001.gif';
import setupGif from '../__assets__/How.png';

import StylishLoader from '../__components__/loader';

const experimentsData = [
    {
        title: 'Custom Loader',
        description: 'A visually engaging loader animation for web apps.',
        component: (
            <StylishLoader
                size="large"
                color="#e74c3c"
            />
        ),
        link: 'https://codepen.io/ifeelpankaj/pen/WbeeKrM'
    },
    {
        title: 'Frontend Setup',
        description: 'A robust initial setup for React projects.',
        gif: setupGif,
        link: 'https://github.com/Myself-Pankaj/Initial_Frontend_Set_Up/blob/master/README.md'
    },
    {
        title: 'NPM Package',
        description: 'A reusable npm package for developers.',
        gif: npmPackageGif,
        link: 'https://www.npmjs.com/package/react-sale-countdown'
    }
];

const Experiments = () => {
    return (
        <div
            className="container"
            id="experiments">
            <h1 className="title">My Experiments</h1>
            <div className="grid">
                {experimentsData.map((experiment, index) => (
                    <div
                        key={index}
                        className="card">
                        {experiment.component ? (
                            <div className="dynamicComponent">{experiment.component}</div>
                        ) : (
                            <img
                                src={experiment.gif}
                                alt={experiment.title}
                                className="image"
                            />
                        )}

                        <h2 className="cardTitle">{experiment.title}</h2>
                        <p className="description">{experiment.description}</p>
                        <a
                            href={experiment.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiments;

// https://codepen.io/ifeelpankaj/pen/GgKKBKj  Count Down

// https://codepen.io/ifeelpankaj/pen/WbeeKrM Classy Loader

// Production Level Set up for server

// Production Level set up for vite react frontend
