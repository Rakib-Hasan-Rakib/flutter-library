import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
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
            <Link>
              <FaXTwitter
                size={32}
                className="bg-black p-2 rounded-full"
                title="visit Twitter"
              />
            </Link>
            <Link>
              {" "}
              <FaLinkedinIn
                size={32}
                className="bg-black p-2 rounded-full"
                title="visit LinkedIn"
              />
            </Link>

            <Link>
              <FaInstagram
                size={32}
                className="bg-black p-2 rounded-full"
                title="visit Instagram"
              />
            </Link>

            <Link>
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
            <Link>Blog</Link>
            <Link>Templates</Link>
            <Link>Screens</Link>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold text-lg my-2">Support</h4>
            <Link>Pricing</Link>
            <Link>Become a Sponsor</Link>
            <Link>Hire top Flutter Devs</Link>
          </div>
        </div>
      </div>
      <hr className="w-full mt-10 mb-2" />
      <div className="flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-3 text-sm">
        <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
        <div>
          <Link>Privacy Policy</Link> <span> | </span>
          <Link>Terms & Conditions</Link> <span> | </span>
          <Link>Cookie Policy</Link>
        </div>
      </div>
    </>
  );
};
export default Footer;
