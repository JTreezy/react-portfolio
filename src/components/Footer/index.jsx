import React from 'react';
import github from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'
import emailIcon from '../assets/email.png'
import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div class="content">
                    <h5>Jonathan Tran</h5>
                    <p>Full Stack Developer</p>
                <div>
                    <h5 id="contact">Contact Links</h5>
                    <div className="icon-links">
                        <span class="icon">
                            <a href="https://github.com/jtreezy/" target="blank"><img src={github} alt="Github" id="links"/></a>
                        </span>
                        <span class="icon">
                            <a href="https://www.linkedin.com/in/jonathan-tran-3082ba109/" target="blank"><img src={linkedIn} alt="Linkedin" id="links"/></a>
                        </span>
                        <span class="icon">
                            <a href="mailto: digitalsigna@gmail.com" target="blank"><img src={emailIcon} alt="email" id="links"/></a>
                        </span>
                    </div>
                </div>

        </div>
  </footer>
);

export default Footer;