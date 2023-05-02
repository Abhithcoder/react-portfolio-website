import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id= 'about'>
      <h5>Get to Know me</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small></small>

            </article>

            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small></small>

            </article>

            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small></small>

            </article>
            </div>
            <p>
              I am a coding enthusiast who loves to solve new and real-world based problems. I also have a fair interest and knowledge in the field of web development. 
            </p>
            
            <a href='"contact' className='btn btn-primary'>Let's Talk</a>
      
          </div>
      </div>
    </section>
  )
}

export default About