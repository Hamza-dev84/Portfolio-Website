import React from 'react'
import HamzaImg from '../../assets/HamzaImg.png'
import CV from '../../assets/Hamza.pdf'
import './Home.css'
import { Link } from 'react-scroll'
function Home() {
    return (
        <div className="home">
            <div className="image">
                <img src={HamzaImg} alt="" className='animated-rounded-image' />
            </div>

            <div className="intro">
                <p className='greeting'>Hi there, i'm</p>

                <h1 className='name'>Muhammad Hamza</h1>
                <h2 className='role'>MERN Stack Developer</h2>

            </div>

            <div className="action-buttons">
                <Link to="contact" smooth={true} duration={500}
                    spy={true} offset={-70} className="contactBtn" 
                    activeClass="active-link">Contact With me </Link>
                <a href={CV} target='_blank' className='cvBtn'>My Resume</a>
            </div>
        </div>
    )
}

export default Home