import React from 'react'
import ProjectItem from './ProjectItem';

function projects() {
  return (
    <div className='projects'>
      <h1>
        My Personal Projects
      </h1>
      <div className='projectList'>
        <ProjectItem name='social media website' image='' />
        <ProjectItem />
        <ProjectItem />

      </div>

    </div>
  )
}

export default projects