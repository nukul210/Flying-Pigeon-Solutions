import React from "react";
import Section from "./Section";
import { FaTwitter, FaInstagram, FaTelegramPlane, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"; // Make sure to import the YouTube icon

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved. Code by
          <a
            href="https://github.com/nukul210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-pink font-bold hover:underline"
            style={{ marginLeft: "4px" , color:"#D77DEE" }} // Adds a little spacing between the text and link
          >
            Nukul Sharma
          </a>
          .
        </p>

        <ul className="flex gap-5 flex-wrap">
        <li>
        <a
          href="https://x.com/yourtwitterhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaTwitter size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/tradingwithkarol/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800"
        >
          <FaInstagram size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://t.me/tradingwithkarol"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaTelegramPlane size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/people/Trading-with-Karol/100093949922479/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-900"
        >
          <FaFacebookF size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.whatsapp.com/channel/0029Va5yf13DzgT5wF16OV1X"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700"
        >
          <FaWhatsapp size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@internetpadhai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800"
        >
          <FaYoutube size={24} />
        </a>
      </li>
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
