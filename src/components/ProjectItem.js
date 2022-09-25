import React from "react";
//Pseudocode

// function techListArr (){
  // const technologies = ["Rails", "Bootstrap CSS"];

  // const technologiesArr =technologies.map((technologies)=> {
  //   return <span>{technologies}</span>
  // });


// }


function ProjectItem({name, about, technologies}) {
  const technologiesArr =technologies.map((technology)=> {
    return <span key={technology}>{technology}</span>
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesArr}</div>
        {/* <span>{technology}</span> */}
        {/* render a <span> for each technology in the technologies array */}
    </div>
  );
}

export default ProjectItem;
