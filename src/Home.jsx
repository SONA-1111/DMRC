import React from 'react'
import Footer from './Footer'
import Project from './Project'
const Home = () => {
    return (
        <>
            <header className="header">
                <a href="#" id="logo">KEC</a>
                <navbar className="nav">
                    <a href="#projects">Guidelines</a>
                </navbar>
            </header>
            <div className="background-image">
                <div className="inner-back-text">
                    <h1>
                        <span>Workmen Rakhsha - DMRC DE-04 Project</span> </h1>
                    <div className="inner-back-btn">
                        <a href="#projects" className="second-btn">Guidelines</a>
                    </div>
                </div>
            </div>

            <section className="about" id="about">
                <h1 className="heading"> <span>Workmen</span> Rakhsha </h1>
                <div className="row">
                    <div className="image">
                        <img src="/Imgs/saftey2.png" />
                    </div>
                    <div className="content">
                        <h2>Workmen Rakhsha is a safety initiative implemented within the DMRC DE-04 Project, It aims to enhance safety measures at project sites by providing safety awareness to workers involved in construction projects. The initiative is tailored to safeguard workers and ensure the upkeep of a risk-free work environment.</h2>
                    </div>
                </div>
            </section>

             <Project />

            <Footer />
        </>
    )
}

export default Home