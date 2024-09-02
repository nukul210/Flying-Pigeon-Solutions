import Heading from "./Heading";
import Section from "./Section";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Section id="contacts">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Contact Us" />

        <div className="flex flex-wrap gap-10 mb-10">
          {/* Contact Information */}
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] "
            style={{
              backgroundImage: "url('./src/assets/benefits/card-3.svg')",
            }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="text-2xl font-semibold mb-5">Get in Touch</h5>
              <p className="text-base mb-6 text-gray-300">
                For inquiries, partnerships, or support, feel free to reach out
                to us through any of the following channels.
              </p>

              {/* Phone Contact */}
              <div className="flex items-center mt-auto">
                <FaPhoneAlt
                  className="mr-3"
                  style={{ fontSize: "1.5rem", color: "#D77DEE" }}
                />
                <span className="text-base font-bold text-white">
                  +1 234 567 890
                </span>
              </div>

              {/* Email Contact */}
              <div className="flex items-center mt-4">
                <FaEnvelope
                  className="mr-3"
                  style={{ fontSize: "1.5rem", color: "#D77DEE" }}
                />
                <span className="text-base font-bold text-white">
                  info@flyingpigeon.com
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center mt-4">
                <FaMapMarkerAlt
                  className="mr-3"
                  style={{ fontSize: "1.5rem", color: "#D77DEE" }}
                />
                <a
                  href="https://goo.gl/maps/xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold"
                  style={{ color: "#D77DEE", textDecoration: "underline" }}
                >
                  Visit Our Office
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 relative z-2">
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[50rem]"
              style={{
                backgroundImage: "url('./src/assets/benefits/card-3.svg')",
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="text-2xl font-semibold mb-5 text-white">
                  Send Us a Message
                </h5>
                <form className="flex flex-col gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-4 border-2 rounded-lg focus:outline-none bg-black text-white placeholder-gray-500"
                    style={{ borderColor: "#D77DEE" }} // Neon purple border
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-4 border-2 rounded-lg focus:outline-none bg-black text-white placeholder-gray-500"
                    style={{ borderColor: "#D77DEE" }} // Neon purple border
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="p-4 border-2 rounded-lg focus:outline-none bg-black text-white placeholder-gray-500"
                    style={{ borderColor: "#D77DEE" }} // Neon purple border
                  ></textarea>
                  <button
                    type="button"
                    className="mt-4 py-3 px-6 text-white font-bold uppercase tracking-wider rounded-lg focus:outline-none transition-all duration-300 ease-in-out"
                    style={{
                      border: "2px solid #D77DEE", // Neon purple border
                      backgroundColor: "transparent",
                      boxShadow: "0 0 0 #D77DEE", // Initial shadow
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#D77DEE"; // Change background color to neon purple on hover
                      e.target.style.boxShadow = "0 4px 15px #D77DEE"; // Add shadow on hover
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent"; // Revert background color
                      e.target.style.boxShadow = "0 0 0 #D77DEE"; // Revert shadow
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
