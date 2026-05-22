// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

/* ─── Data ──────────────────────────────────────────────── */
const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "nur.hossain.dev@email.com",
    link: "mailto:nur.hossain.dev@email.com",
  },
  {
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    value: "+880 1701-593102",
    link: "https://wa.me/8801701593102?text=Hello%20Nur,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Dinajpur, Bangladesh",
    link: "https://maps.google.com/?q=Dinajpur,Bangladesh",
  },
];

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/NurHossain-nur",
    colorClass:
      "bg-base-content/10 text-base-content hover:bg-base-content hover:text-base-100 border-base-content/20",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nur-hossain-nur/",
    colorClass:
      "bg-blue-500/10 text-blue-500 hover:bg-blue-600 hover:text-white border-blue-500/20",
  },
  {
    icon: <FaFacebook />,
    label: "Facebook",
    href: "https://facebook.com/Mr.NuR07",
    colorClass:
      "bg-sky-500/10 text-sky-500 hover:bg-sky-600 hover:text-white border-sky-500/20",
  },
];

/* ─── Animation variants ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideIn = (dir = 1) => ({
  hidden: { opacity: 0, x: 40 * dir },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
});

/* ─── Component ─────────────────────────────────────────── */
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for reaching out. I'll get back to you within 24 hours.",
        icon: "success",
        confirmButtonColor: "#059669",
        background: "#18181b",
        color: "#e4e4e7",
      });
      e.target.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="relative py-24 bg-base-100 text-base-content font-poppins overflow-hidden">

      {/* ── Background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Let's{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">Connect</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/15 rounded-sm -z-0" />
            </span>
          </h2>
          <p className="max-w-lg text-sm md:text-base text-base-content/50 leading-relaxed">
            Have a project in mind, a question, or just want to say hi? I'm always
            open to new opportunities and conversations.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: Info + Socials ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn(-1)}
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 self-start text-xs font-semibold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for freelance & full-time roles
            </div>

            {/* Headline */}
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">
                Contact Information
              </h3>
              <p className="text-sm text-base-content/45 leading-relaxed">
                Reach out through any channel below — I typically respond within a few hours.
              </p>
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noreferrer"
                  variants={fadeUp}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group relative flex items-center gap-4 p-5 rounded-2xl bg-base-200 border border-base-content/8 hover:border-primary/40 transition-colors duration-300 overflow-hidden"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary text-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-base-content/40 uppercase tracking-wider font-semibold mb-0.5">
                      {info.title}
                    </p>
                    <p className="text-sm font-semibold text-base-content truncate group-hover:text-primary transition-colors duration-200">
                      {info.value}
                    </p>
                  </div>

                  <HiOutlineExternalLink className="text-base-content/25 group-hover:text-primary text-lg flex-shrink-0 transition-colors duration-200" />

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-base-content/10" />
              <span className="text-xs text-base-content/30 uppercase tracking-widest font-medium">
                Find me on
              </span>
              <div className="flex-1 h-px bg-base-content/10" />
            </div>

            {/* Social buttons */}
            <div className="flex gap-3 flex-wrap">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-300 ${s.colorClass}`}
                >
                  <span className="text-base">{s.icon}</span>
                  {s.label}
                </motion.a>
              ))}
            </div>

            {/* Response time note */}
            <p className="text-xs text-base-content/30 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Usually responds within 24 hours
            </p>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn(1)}
            className="group relative rounded-3xl bg-base-200 border border-base-content/8 hover:border-primary/25 transition-colors duration-500 p-8 md:p-10 overflow-hidden"
          >
            {/* Corner glow */}
            <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />

            <h3 className="text-2xl font-extrabold tracking-tight mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-base-content/40 mb-8">
              Fill in the form and I'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="input input-bordered bg-base-100/60 focus:bg-base-100 focus:border-primary focus:outline-none transition-all duration-200 rounded-xl text-sm w-full"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="input input-bordered bg-base-100/60 focus:bg-base-100 focus:border-primary focus:outline-none transition-all duration-200 rounded-xl text-sm w-full"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  required
                  className="input input-bordered bg-base-100/60 focus:bg-base-100 focus:border-primary focus:outline-none transition-all duration-200 rounded-xl text-sm w-full"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project, timeline, or just say hi..."
                  required
                  className="textarea textarea-bordered bg-base-100/60 focus:bg-base-100 focus:border-primary focus:outline-none transition-all duration-200 rounded-xl text-sm w-full resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="btn btn-primary w-full rounded-xl text-sm font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <FaPaperPlane className="text-xs" />
                  </span>
                )}
              </motion.button>

            </form>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;