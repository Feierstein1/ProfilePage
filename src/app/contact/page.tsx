import Contact from '../../components/contact/Contact';

const ContactPage = () => {
  return (
    <div className="flex flex-col bg-repeat-x bg-bottom mix-blend-overlay" style={{backgroundImage: "url('/city-background.jpg')"}}>
      <Contact />
    </div>
  );
};


export default ContactPage;