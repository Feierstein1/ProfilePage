"use client";
import { useState } from "react";
import { MdSend } from 'react-icons/md';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [subjectError, setSubjectError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    setNameError(null);
    setEmailError(null);
    setSubjectError(null);
    setMessageError(null);

    // Perform form validation
    const isValid = validFormSubmission(formData);
    
    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const validFormSubmission = ({ name, email, subject, message }: { name: string, email: string, subject: string, message: string }) => {
    let returnVal = true
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name.length > 40) {
      returnVal = false;
      setNameError("name is too long")
    }

    if (email.length > 60) {
      returnVal = false;
      setEmailError("email is too long")
    }else if(!emailRegex.test(email)) {
      returnVal = false
      setEmailError("email is incorrect fomrat")
    }

    if (subject.length > 40) {
      returnVal = false;
      setSubjectError("subject is too long")
    }

    if (message.length > 250) {
      returnVal = false;
      setMessageError("message is too long")
    }

    return returnVal;
  };


  return (
    <div className="flex items-center justify-center dark:bg-gray-900 dark:text-white">
      <div className="max-w-lg mx-auto p-6 bg-blue-200 dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className=" w-full p-3 rounded dark:bg-gray-700 focus:outline-none" value={formData.name} onChange={handleChange} />
          {nameError && <b className="text-red-800">{nameError}</b>}
          <input type="email" name="email" placeholder="Your Email" required className=" w-full p-3 rounded dark:bg-gray-700 focus:outline-none" value={formData.email} onChange={handleChange} />
          {emailError && <b className="text-red-800">{emailError}</b>}
          <input type="text" name="subject" placeholder="Subject" required className=" w-full p-3 rounded dark:bg-gray-700 focus:outline-none" value={formData.subject} onChange={handleChange} />
          {subjectError && <b className="text-red-800">{subjectError}</b>}
          <textarea name="message" placeholder="Your Message" required className=" w-full p-3 rounded dark:bg-gray-700 focus:outline-none resize-none" rows={5} value={formData.message} onChange={handleChange} />
          {messageError && <b className="text-red-800">{messageError}</b>}
          {!success && 
          <button type="submit" disabled={loading} className="flex justify-center w-full text-white bg-blue-600 p-3 rounded hover:bg-blue-600 transition border-2 border-white dark:bg-gray-900">
            <MdSend className="mr-2 mt-1"/>
            {loading ? "Sending..." : "Send Message"}
          </button>
          }
          {success && <SuccessfulMessage />}
          {error && <p className="text-red-800">{error}</p>}
        </form>
      </div>
    </div>
  );
};

const SuccessfulMessage = () => {
  return (
      <div className="flex justify-center bg-green-600 p-2 mb-4 border-2 border-green-800 ">
        <h2 className="text-white">Email Successfull Sent!</h2>
      </div>
  )
}

export default ContactForm;