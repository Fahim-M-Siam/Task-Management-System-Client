// @ts-nocheck
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-[#392467] text-base-content">
      <aside>
        <p className="text-white">
          Copyright © 2023 - All right reserved by SCC Technovision Inc
        </p>
        <div className="flex text-2xl space-x-5 text-white">
          <a
            href="https://www.facebook.com/Fahim.Mohammad.Siam/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://github.com/Fahim-M-Siam"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/fahim-mohammad-siam47/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
