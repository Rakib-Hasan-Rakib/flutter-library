import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between gap-3 pt-8">
        <div className="basis-1/2 text-sm space-y-4">
          <img src={logo} alt="logo" className="w-32" />
          <p>
            Beautifully designed, expertly crafted Flutter components and
            templates, to jumpstart your projects and speed up your development
            process.
          </p>
          <div className="flex items-center gap-3 text-white">
            <Link to="https://github.com/Rakib-Hasan-Rakib" target="_blank">
              <FaGithub
                size={32}
                className="bg-black p-2 rounded-full"
                title="visit github"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/rakibul-hasan-10a1b9274/"
              target="_blank"
            >
              <FaLinkedinIn
                size={32}
                className="bg-black p-2 rounded-full"
                title="visit LinkedIn"
              />
            </Link>

            <Link
              to="https://www.facebook.com/rk.rakib.180625/"
              target="_blank"
            >
              <FaFacebookF
                size={32}
                className="bg-black p-2 rounded-full"
                title="visit Facebook"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between lg:justify-normal gap-4 lg:gap-8">
          <div className="flex flex-col">
            <h4 className="font-bold text-lg my-2">Explore</h4>
            <Link className="footer_link">Blog</Link>
            <Link className="footer_link">Templates</Link>
            <Link className="footer_link">Screens</Link>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg my-2">Support</h4>
            <Link className="footer_link">Pricing</Link>
            <Link className="footer_link">Become a Sponsor</Link>
            <Link className="footer_link">Hire top Flutter Devs</Link>
          </div>
        </div>
      </div>
      <hr className="w-full mt-10 mb-2" />
      <div className="flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-3 text-sm">
        <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <div>
          <Link className="footer_link">Privacy Policy</Link> <span> | </span>
          <Link className="footer_link">Terms & Conditions</Link>{" "}
          <span> | </span>
          <Link className="footer_link">Cookie Policy</Link>
        </div>
      </div>
    </>
  );
};
export default Footer;
