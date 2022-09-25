import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  const projectInd=projects.map((project)=>(
    <ProjectItem key={project.id} name= {project.name} about={project.about} technologies={project.technologies}/>
  ))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectInd}
        {/* <ProjectItem id = {1} name = "Reciplease" about="A recipe tracking app" technologies="Rails" technology = "Bootstrap CSS"/>
        <ProjectItem id = {2} name = "Kibbles N Bitz" about="Tinder for dogs" technologies="React" technology ="Redux"/>
        <ProjectItem id = {3} name = "Alienwares" about="Etsy for aliens" technologies="React" technology="Redux" technology2= "Rails"/>
        <button key={user.projects}>{projects.technologies}</button> */}

        {/* render ProjectItem components here */}</div>
    </div>
  );
}

export default ProjectList;
