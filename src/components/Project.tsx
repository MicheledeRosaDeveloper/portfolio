import projects from '../data/project';
import ProjectItem from './ProjectItem';


const Project = () => {
  return (
    <>
      <div className="m-4 ">
        <h1 className="text-3xl font-bold text-center"> Progetti</h1>
        <div className="flex space-x-4 m-4 justify-center">
         { projects.map(project => (
            <ProjectItem
              title={project.title}
              imgUrl={project.imgUrl}
              link={project.link}
              description={project.description}
              stack={project.stack}
            />
          ))}

         
          </div>
        </div>
    </>
  );
};

export default Project;
