import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center text-center p-4 space-y-4 max-w-lg w-full">
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <p className="text-gray-600">Feel free to email me about potential opportunities.</p>
        <ContactForm />
      </div>
    </section>
  );
};


export default Contact;