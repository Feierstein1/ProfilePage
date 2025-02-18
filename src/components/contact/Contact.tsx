import ContactForm from './ContactForm';
import { MdEmail } from "react-icons/md"; 

const Contact = () => {
  return (
    <div className="pt-14 bg-vaporwave-gradient">
        <div id="container" className="flex flex-col w-full max-w-4xl p-8 mx-auto space-y-8 ">
          <section className="flex justify-center">
            <div className="flex flex-col items-center w-full max-w-lg p-4 space-y-4 text-center ">
              <h1 className="flex justify-center pb-4 text-3xl font-bold text-center text-vaporwave_pink font-saira">
                <MdEmail className="mt-1 mr-2"/>
                Contact Me
              </h1>
              <ContactForm />
            </div>
          </section>
        </div>
    </div>
  );
};


export default Contact;