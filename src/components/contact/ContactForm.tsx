"use client";
import { useState } from "react";
import { MdSend } from "react-icons/md";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

    if (!validateForm(formData)) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send message");

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = ({
    name,
    email,
    subject,
    message,
  }: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    let isValid = true;
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name || name.length > 40) {
      setNameError("Name is required and max 40 characters");
      isValid = false;
    }

    if (!email || !emailRegex.test(email) || email.length > 60) {
      setEmailError("Valid email is required and max 60 characters");
      isValid = false;
    }

    if (subject.length > 40) {
      setSubjectError("Subject max 40 characters");
      isValid = false;
    }

    if (!message || message.length > 250) {
      setMessageError("Message is required and max 250 characters");
      isValid = false;
    }

    return isValid;
  };

  return (
    <div className="flex items-center justify-center border-2 border-vaporwave_dark_pink rounded-xl dark:bg-gray-900 dark:text-white">
      <div className="max-w-lg p-6 mx-auto bg-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded dark:bg-gray-700 focus:outline-none"
            value={formData.name}
            onChange={handleChange}
          />
          {nameError && <b className="text-red-800">{nameError}</b>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded dark:bg-gray-700 focus:outline-none"
            value={formData.email}
            onChange={handleChange}
          />
          {emailError && <b className="text-red-800">{emailError}</b>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded dark:bg-gray-700 focus:outline-none"
            value={formData.subject}
            onChange={handleChange}
          />
          {subjectError && <b className="text-red-800">{subjectError}</b>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded resize-none dark:bg-gray-700 focus:outline-none"
            value={formData.message}
            onChange={handleChange}
          />
          {messageError && <b className="text-red-800">{messageError}</b>}

          {!success && (
            <button
              type="submit"
              disabled={loading}
              className="flex justify-center w-full p-3 text-white transition border-2 border-white rounded bg-vaporwave_pink hover:bg-vaporwave_dark_pink dark:bg-gray-900"
            >
              <MdSend className="mt-1 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          )}

          {success && <div className="text-green-500 font-bold">{success}</div>}
          {error && <p className="text-red-800">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;