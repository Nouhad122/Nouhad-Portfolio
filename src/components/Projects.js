import React, { useState } from 'react';
import clubConnect from '../../src/assets/club-connect.png';
import soulaymaBoutique from '../../src/assets/soulayma-boutique.png';
import CRUDS from '../../src/assets/cruds.png';
import '../components/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faGit, faPython } from '@fortawesome/free-brands-svg-icons';

const Projects = ({darkMode}) => {
  const projects = ([
    {
      id: 0,
      title: "ClubConnect",
      image: clubConnect,
      icon1: faHtml5,
      icon2: faCss3Alt,
      icon3: faJs,
      icon4: faBootstrap,
      icon5: faGit,
      icon6: faPython,
      url: '#',
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Pellentesque pulvinar pellentesque habitant morbi tristique. Et netus et malesuada fames ac.
        Nec sagittis aliquam malesuada bibendum arcu. Lobortis elementum nibh tellus molestie nunc
         non blandit massa. Nisl suscipit adipiscing bibendum est ultricies integer.`
    },
    {
      id: 1,
      title: "Soulayma Boutique",
      image: soulaymaBoutique,
      icon1: faHtml5,
      icon2: faCss3Alt,
      icon3: faJs,
      icon4: faBootstrap,
      icon5: faGit,
      icon6: null,
      url: '#',
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Pellentesque pulvinar pellentesque habitant morbi tristique. Et netus et malesuada fames ac.
        Nec sagittis aliquam malesuada bibendum arcu. Lobortis elementum nibh tellus molestie nunc
         non blandit massa. Nisl suscipit adipiscing bibendum est ultricies integer.`
    },
    {
      id: 2,
      title: "CRUDS",
      image: CRUDS,
      icon1: faHtml5,
      icon2: faCss3Alt,
      icon3: faJs,
      icon4: null,
      icon5: faGit,
      icon6: null,
      url: 'https://nouhad122.github.io/cruds/',
      paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Pellentesque pulvinar pellentesque habitant morbi tristique. Et netus et malesuada fames ac.
        Nec sagittis aliquam malesuada bibendum arcu. Lobortis elementum nibh tellus molestie nunc
         non blandit massa. Nisl suscipit adipiscing bibendum est ultricies integer.`
    }
  ]);

  const renderIcons = (icons, projectId) => {
    return icons.map((icon, index) => icon ? <FontAwesomeIcon key={`${projectId}-${index}`} icon={icon} /> : null);
  };

  return (
    <>
      <div id='projects' className='projects-section'>
        <div className={darkMode ? 'projects-header dark-header': 'projects-header'}>
          <h3>Projects</h3>
        </div>
        <div className='projects-container'>
          {projects.map(project => (
            <a href={project.url} target='_blank' rel='noopener noreferrer' key={project.id}>
              <div className= {darkMode ? 'project-box dark-project-box' : 'project-box'}>
                <h1 className={darkMode ? 'project-title dark-title' : 'project-title'}>{project.title}</h1>
                <img src={project.image} alt={project.title} />
                <div className='project-technologies'>
                  {renderIcons([project.icon1, project.icon2, project.icon3, project.icon4, project.icon5, project.icon6], project.id)}
                </div>
                <div className='dark-background'></div>
                <p className='project-description'>{project.paragraph}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
