import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
function Footer() {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="cont">
          <h3>Contact the Publisher</h3>
          <p>pranaygoudpalle123@gmail.com</p>
          <p>+91 8919262896</p>
        </div>
        <div className="cont">
          <h3>Explore</h3>
          <p>Technology</p>
          <p>Science</p>
          <p>Food</p>
          <p>Architecture</p>
          <p>Oppurtunities</p>
        </div>
        <div className="cont">
          <h3>Address</h3>
          <p>500001,Hyderabad,Telangana,India.</p>
        </div>
        <div className="Social cont">
          <h3>Connections</h3>
          <div className="icn">
            <a
              className="icon"
              href="https://github.com/pranaygoud01"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/pranaygoud1229/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              className="icon"
              href="https://pranaygoud01.github.io/pranayportfolio/"
              target="_blank"
            >
              <LanguageIcon />
            </a>
            <a
              className="icon"
              href="https://www.instagram.com/pranayygoud/"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer2">
        <p className="cp">2023 | Copyright&copy;Pranay</p>
        <p className="sn">Subscribe Now</p>
      </div>
    </div>
  );
}

export default Footer;
