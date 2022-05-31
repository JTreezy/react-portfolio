import React from 'react';
import github from '../assets/github.png'
import linkedIn from '../assets/linkedIn.png'
import emailIcon from '../assets/email.png'

const Footer = () => (
  <footer className="footer">
    <div class="content has-text-centered">
            <div>
                <div>
                    <h5>Jonathan Tran</h5>
                    <p>Full Stack Developer</p>
                </div>
                <div>
                    <h5 id="contact">Contact Links:</h5>
                    <div>
                        <span class="icon">
                          <div>
                            <a href="https://github.com/jtreezy/" target="blank"><img src={github} alt="Github" id="links"/></a>

                            <a href="https://www.linkedin.com/in/jonathan-tran-3082ba109/" target="blank"><img src={linkedIn} alt="Linkedin" id="links"/></a>

                            <a href="mailto: digitalsigna@gmail.com" target="blank"><img src={emailIcon} alt="email" id="links"/></a>
                          </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
  </footer>
);

export default Footer;