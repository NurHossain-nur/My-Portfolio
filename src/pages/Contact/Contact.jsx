// src/pages/Contact.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true, offset: 100, duration: 600 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Sent!",
      text: "Thanks for contacting me. I'll get back to you soon.",
      icon: "success",
      confirmButtonColor: "#0ea5e9",
    });
    e.target.reset();
  };

  return (
    <div className="max-w-7xl mx-auto bg-base-100 text-base-content px-6 md:px-8 py-16 font-poppins mt-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up">
          Get In Touch
        </h2>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="100">
          <div className="space-y-4 text-lg">
            <p><strong>Email:</strong> <br /> <a href="mailto:nur.hossain.dev@email.com" className="text-primary">nur.hossain.dev@email.com</a></p>
            <p><strong>Phone:</strong> <br /> <a href="tel:+8801701593102" className="text-primary">+880 1701-593102</a></p>
            <p><strong>WhatsApp:</strong> <br /> <a href="https://wa.me/8801701593102" target="_blank" rel="noreferrer" className="text-primary">Chat on WhatsApp</a></p>
            <p>
              I'm always open to discussing new projects, freelance work, or opportunities to be part of your team.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
