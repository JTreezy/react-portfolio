import React from 'react';
import github from '../assets/github.png'
import linkedIn from '../assets/linkedIn.png'
import emailIcon from '../assets/email.png'

const Footer = () => (
  <footer className="site-footer border-t-2 border-solid border-gray-400 py-5 mt-4">
    <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="grey-text text-lighten-2">Jonathan Tran</h5>
                    <p class="grey-text text-lighten-2">Full Stack Developer</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="grey-text text-lighten-2 section scrollspy" id="contact">Contact Links:</h5>
                    <ul>
                        <span>
                          <div>
                            <a class="grey-text text-lighten-3" href="https://github.com/jtreezy/" target="blank"><img src={github} alt="Github" id="links"/></a>

                            <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/jonathan-tran-3082ba109/" target="blank"><img src={linkedIn} alt="Linkedin" id="links"/></a>

                            <a class="grey-text text-lighten-3" href="mailto: digitalsigna@gmail.com" target="blank"><img src={emailIcon} alt="email" id="links"/></a>
                          </div>
                          </span>
                    </ul>
                </div>
            </div>
        </div>
  </footer>
);

export default Footer;