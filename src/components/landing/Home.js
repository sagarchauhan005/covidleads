import React from 'react';
import Header from './Header';
import Section from './Section';
import About from "../About";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="container text-muted">
                <Section/>
                <About/>
            </div>

        </div>
    );
};


export default Home;
