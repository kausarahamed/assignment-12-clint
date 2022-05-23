import React from "react";
import logo from "../../img/logo.png";
import "./footer.css";
import { BiEnvelope } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col">
            <img src={logo} alt="" className="logo" />
            <p>
              This is our very much popular cycle warehouse.You trust our
              motive.
            </p>
          </div>
          <div className="col">
            <h3 className="text-lg h-three underline decoration-slate-200 decoration-3">
              Office
            </h3>
            <p>Park Road</p>
            <p>Bogura, Rajshahi</p>
            <p>Sadar, PIN 5800, Bangladesh</p>
            <p className="email-id">galibhasan517@gmail.com</p>
            <p className="text-base">+8801868384430</p>
          </div>
          <div className="col">
            <h3 className="text-lg underline decoration-slate-200 decoration-3">
              Links
            </h3>
            <ul className="mt-7">
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Services</p>
              </li>
              <li>
                <p>About Us</p>
              </li>
              <li>
                <p>Feature</p>
              </li>
              <li>
                <p>Contacts</p>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-lg underline decoration-slate-200 decoration-3 ">
              Newsletter
            </h3>
            <form>
              <div className="flex mt-5">
                <div className="text-2xl mt-2 mr-2">
                  <BiEnvelope></BiEnvelope>
                </div>
                <input
                  className="rounded-xl p-2"
                  type="email"
                  placeholder="Enter your email id"
                  required
                />
                <button className="text-2xl mt-2 ml-2" type="submit">
                  <BsArrowRight></BsArrowRight>
                </button>
              </div>
            </form>
            <div className="social-icon flex gap-3 cursor-pointer text-2xl my-5 ">
              <BsFacebook></BsFacebook>
              <BsInstagram></BsInstagram>
              <BsWhatsapp></BsWhatsapp>
              <AiFillTwitterCircle></AiFillTwitterCircle>
              <AiFillLinkedin></AiFillLinkedin>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">
          &#169; Copyright, 2022 - All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
