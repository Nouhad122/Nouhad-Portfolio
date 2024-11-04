import React, { useState } from 'react';
import clubConnect from '../../src/assets/club-connect.png';
import soulaymaBoutique from '../../src/assets/soulayma-boutique.png';
import CRUDS from '../../src/assets/cruds.png';
import clipCast from '../../src/assets/clipCast.png';
import '../components/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faGit, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const Projects = ({darkMode}) => {
  const projects = ([
    {
      id: 0,
      title: "Soulayma Boutique",
      image: soulaymaBoutique,
      icon1: faReact,
      icon2: faCss3Alt,
      icon3: null,
      icon4: faBootstrap,
      icon5: faGit,
      icon6: null,
      url: 'https://soulayma-ecommerce.vercel.app/',
      paragraph: `Soulayma Boutique is an e-commerce website I created to sell hijabs, abayas, underscarves,
       bags, and accessories. Built with React, Redux, CSS, Git, and Bootstrap, the platform offers a seamless
        shopping experience, featuring intuitive navigation and a responsive design. Soulayma Boutique allows
         users to easily explore categories, view product details, and make purchases efficiently.`
    },
    {
      id: 1,
      title: "CRUDS",
      image: CRUDS,
      icon1: faHtml5,
      icon2: faCss3Alt,
      icon3: faJs,
      icon4: null,
      icon5: faGit,
      icon6: null,
      url: 'https://cruds-chi.vercel.app/',
      paragraph: `CRUDS is a product management system I developed to handle the inventory of products sold.
       Built with HTML, CSS, JavaScript, and Git, it allows users to create, read, update, and delete product
        entries. This system provides an intuitive interface for efficient product tracking, ensuring smooth
         management of inventory and enhancing operational efficiency.`
    },
    {
      id: 2,
      title: "ClipCast",
      image: clipCast,
      icon1: faReact,
      icon2: faCss3Alt,
      icon3: null,
      icon4: null,
      icon5: faGit,
      icon6: null,
      url: 'https://clip-cast-youtube-api.vercel.app/',
      paragraph: `ClipCast is a YouTube clone website I developed using React.js, CSS, Git, and API integration.
       The platform replicates key YouTube features, allowing users to browse, search, and view videos with a sleek,
        responsive design. By leveraging APIs, ClipCast delivers real-time video content, providing a smooth and
         engaging user experience similar to popular video streaming sites.`
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
