import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
   const [index, setIndex] = useState(0);

   let projInfoArray = data.projects;
   let projInfoAtIndex = projInfoArray[index];

   return (
      <div>
          <button onClick={handleClick}>Next</button>
          <ul>
            <li>{`Canvas: ${projInfoAtIndex.canvas}`}</li>
            <li>{`Designer: ${projInfoAtIndex.designer}`}</li>
            
          </ul>
          <img src={projInfoAtIndex.photoUrl} alt={projInfoAtIndex.alt} />
      </div>
      
  
  
  
   );

  function handleClick() {
   if (index < data.projects.length-1)
   {
      setIndex(index + 1);
   }
   else
   {
      setIndex(0);
   }
  }

  // let projects = data.projects;
  // let project = projects[index];

  // return (
  //   <div>
  //     <button onClick={handleClick}>
  //       Next
  //     </button>
  //     <h2>{project.canvas} by {project.designer}
  //     </h2>
  //     <img src={project.photoUrl} alt={project.alt} />
  //   </div>
  // );
}
