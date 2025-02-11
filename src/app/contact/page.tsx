import ContactForm from '../../components/ContactForm';
import { MdEmail } from "react-icons/md"; 

const Contact = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center text-center p-4 space-y-4 max-w-lg w-full p-6 rounded-xl border-t-4 border-b-4 dark:border-gray-700">
        <h1 className="flex justify-center text-2xl tracking-widest font-bold">
          <MdEmail className="mr-2 mt-1"/>
          Contact Me
        </h1>
        
        <ContactForm />
      </div>
    </section>
  );
};


export default Contact;