import Resume from '../../components/resume/Resume';

const ResumePage = () => {
  return (
    <div className="flex flex-col bg-repeat-x bg-bottom mix-blend-overlay" style={{backgroundImage: "url('/city-background.JPG')"}}>
      <Resume />
    </div>
  );
};


export default ResumePage;