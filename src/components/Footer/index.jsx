import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import logo from "@/assets/images/logo3.svg";
const Footer = () => {
  return (
    <div className="">
      <div className="bg-black ">
        <img
          className="invert-[1] block mx-auto mt-4"
          src={logo}
          alt="luminous"
        />
        {/* <h2 className="text-center font-bold">Follow me on</h2> */}
        <div className="flex justify-center gap-2">
          <a
            href="https://twitter.com/vinitchuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-[30px] mx-2 invert-[1]" />
          </a>
          {/* follow me on github */}
          <a
            href="https://github.com/vinit-churi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-[30px] mx-2 invert-[1]" />
          </a>
          {/* follow me on youtube */}
          <a
            href="https://www.youtube.com/channel/UCJR9o7iNjhxgpYgAsvnwusQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-[30px] mx-2 invert-[1]" />
          </a>
        </div>
        <p className="text-center text-cyan-50 pb-8 pt-4 my-0">
          © 2021 Luminous, developed and designed by Vinit Churi
        </p>
      </div>
    </div>
  );
};

export default Footer;
