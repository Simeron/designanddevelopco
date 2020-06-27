import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './style.css'
import designanddevelopBuildSomething from "../images/designanddevelopBuildSomething.png"
import phoneplant from "../images/phoneplant.jpg"


const AboutContact = () => (
    <div>
        <a id="aboutContact">
            <h2>About & Contact</h2>
        </a>
        <div class="content">
            <hr />
            <div className="aboutIntro">
                <h3>All about Design & Develop.Co</h3>
                <h4>Hi there 👋🏽<br />
                Welcome to Design & Develop.Co </h4>
                <p>We are brand and online specialists. We transform businesses to help brands relate to their target audiences.</p>
                <p>A bit more about me… <br />
                My name is Simeron & I’m a frontend developer with a background in graphic & web design. I spent years trying to find the right role for me. While I have worked in some amazing places, I’ve always had to compromise on parts of my role. I’ve always loved design and fell in love with Development & bringing my designs to life. I have a passion for empowering females and have always wanted to run my own business. This year I decided it was time to design the perfect ‘role’ for me, and combine all the things I love to help other budding entrepreneurs achieve their dreams too, thats why I started Design & Develop.Co. </p>
                <p>Feel free to get in contact via email and reach out to me on the socials.</p>
                <p>Check out what I’m currently working on via Instagram</p>
                <p>If twitter is more your thing read about what were up to</p>
                <p>If you want to see how I work… literally be sure to check out our tik tok account too!</p>
                <a href="mailto:simerondevelops@gmail.com?subject=Customer enquiry" target="_blank">
                    <button>Send us an email</button>
                </a>
            </div>
            <div className="aboutImages">
                <div class="images">
                    {/* <img src="https://i.pinimg.com/564x/1d/43/d2/1d43d21964da805557d7c94f1bc43746.jpg"></img> */}
                    <img src={phoneplant} alt="picture of a phone and a plant" />
                    <img src={designanddevelopBuildSomething} alt="useful alt tag" />
                </div>
                <div class="contactInfo">
                    <div class="contactItems">
                        <img src="https://image.flaticon.com/icons/svg/15/15914.svg" />
                        <div>
                            <p class="contactDetials">| 07501351982</p>
                        </div>
                    </div>
                    <div class="contactItems">
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/561/561188.svg" />
                        </div>
                        <div>
                            <a href="mailto:simerondevelopc@gmail.com?subject=Customer enquiry" target="_blank">
                                <p class="contactDetials">| simerondevelops@gmail.com</p>
                            </a>
                        </div>
                    </div>
                    <div class="contactItems">
                        <div>
                            <img src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png" />
                        </div>
                        <div>
                            <a href="https://www.instagram.com/designanddevelopco/" target="_blank">
                                <p class="contactDetials">| @designanddevelopco</p>
                            </a>
                        </div>
                    </div>
                    <div class="contactItems">
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/60/60580.svg" />
                        </div>
                        <div>
                            <a href="https://twitter.com/designanddevel2" target="_blank">
                                <p class="contactDetials">| @designanddevelopco</p>
                            </a>
                        </div>
                    </div>
                    <a href="mailto:simerondevelops@gmail.com?subject=Customer enquiry" target="_blank">
                        <button class="bookConsult">Book your <strong>FREE</strong> consultation</button>
                    </a>
                    <a class="servicesLink" href="#services">
                        <button class="servicesButton">Services</button>
                    </a>
                    <a href="#index">
                        <button class="backToTop">&uarr;</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

AboutContact.propTypes = {
    siteTitle: PropTypes.string,
}

AboutContact.defaultProps = {
    siteTitle: ``,
}

export default AboutContact
