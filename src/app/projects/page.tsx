import Projects from '../../components/projects/Projects';

const ProjectsPage = () => {
  return (
    <div className="flex flex-col bg-repeat-x bg-bottom mix-blend-overlay" style={{backgroundImage: "url('/city-background.JPG')"}}>
      <Projects />
    </div>
  );
};


export default ProjectsPage;