import contactImg from "../assets/contactImg.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ke5qjn6", // Replace with your Service ID
        "template_fnyq9hn", // Replace with your Template ID
        form.current,
        "c_1cPqrMmuTTCo2Od" // Replace with your Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message!");
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            Get In{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>

          <p
            className="text-lg"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            Let's discuss your project
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={contactImg}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-contain"
            />
          </div>

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-left"
            style={{
              background: darkMode
                ? "linear-gradient(to right,#1f2937,#111827)"
                : "linear-gradient(to right,#ffffff,#f9fafb)",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-2xl border shadow-lg p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* First Name */}
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  color: darkMode ? "white" : "#1f2937",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                }}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Last Name */}
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  color: darkMode ? "white" : "#1f2937",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                }}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  color: darkMode ? "white" : "#1f2937",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                }}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  color: darkMode ? "white" : "#1f2937",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                }}
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Message */}
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  color: darkMode ? "white" : "#1f2937",
                  borderColor: darkMode ? "#4b5563" : "#d1d5db",
                }}
                className="sm:col-span-2 w-full px-4 py-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Button */}
              <button
                type="submit"
                className="sm:col-span-2 w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30"
                style={{
                  background:
                    "linear-gradient(to right,#f97316,#f59e0b)",
                }}
              >
                Send Message
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;