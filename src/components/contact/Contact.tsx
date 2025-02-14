import ContactForm from './ContactForm';
import { MdEmail } from "react-icons/md"; 

const Contact = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-lg p-4 p-6 space-y-4 text-center border-brackets">
        <h1 className="flex justify-center text-2xl font-bold tracking-widest">
          <MdEmail className="mt-1 mr-2"/>
          Contact Me
        </h1>
        <ContactForm />
      </div>
    </section>
  );
};


export default Contact;