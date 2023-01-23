import React from 'react'
import ProjectItem from './ProjectItem';
import '../styles/Projects.css';
import {ProjectList} from '../helpers/ProjectList.js';

function projects() {
  return (
    <div className='projects'>
      <h1>
        My Projects
      </h1>
      <div className='projectList'>
        {
          ProjectList.map((project, index) => {
            return <ProjectItem id={index} name={project.name} image={project.image} />
          })
        }
      </div>

    </div>
  )
}

export default projects