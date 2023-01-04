import React, {useState} from 'react';
import ProjectEntry from './ProjectEntry.jsx';

const Projects = () => {
  const [projects, setProjects] = useState(['1', '2', '3']);
  return (<div>
    {projects.map((project) => (
      <ProjectEntry project={project}/>
    ))}
    </div>
  )
}
export default Projects;