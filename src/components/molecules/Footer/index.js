import React from "react";
import {
  ICFacebook,
  ICGithub,
  ICGoogle,
  ICTwitter,
  ICYoutube,
} from "../../../assets";
import { Gap } from "../../atoms";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="profile">
        <div className="name">
          <p>Esto Triramdani N</p>
        </div>
        <Gap width={100} />
        <div className="social-media">
          <a href="https://facebook.com">
            <img src={ICFacebook} alt="facebook" />
          </a>
          <a href="https://facebook.com">
            <img src={ICTwitter} alt="Twitter" />
          </a>
          <a href="https://facebook.com">
            <img src={ICGithub} alt="Github" />
          </a>
          <a href="https://facebook.com">
            <img src={ICGoogle} alt="Google" />
          </a>
          <a href="https://facebook.com">
            <img src={ICYoutube} alt="Youtube" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2021</p>
      </div>
    </div>
  );
};

export default Footer;
