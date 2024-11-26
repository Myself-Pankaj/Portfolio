import { BrowserRouter as Router } from 'react-router-dom';
import Home from './__pages__/__home';
import Header from './__components__/__header';
import Projects from './__pages__/__projects';
import Expreience from './__pages__/__experience';
import Experiments from './__pages__/__experiments';
import Footer from './__pages__/__footer';
import Blogs from './__pages__/__blogs';
// import React from 'react';
function App() {
    return (
        <>
            <Router>
                <Header />
                <Home />
                <Projects />
                <Expreience />
                <Experiments />
                <Blogs />
                <Footer />
            </Router>
        </>
    );
}

export default App;
