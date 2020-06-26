import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './services'
import './style.css'
import setupImg from "../images/setupImg.jpg"
import handonnotepad from "../images/handonnotepad.jpg"

const Services = () => (
    <div>
        <a id="services">
            <h2>Services</h2>
        </a>
        <div class="content">
            <hr />
            <div class="servicesIntro">
                <h3>What services we offer</h3>
                <p>At Design & Develop.Co we offer a whole range of services to help you achieve your branding and online goals. We specialise in helping businesses build epic brands that represent their companies and that are completely bespoke to them.</p>
                <h4>BRANDING</h4>
                <p>A brand isn’t just a logo, it about everything, such as your colour scheme, packaging, your ethos, and your reputation as a company. We can build a package that works around the needs & desires of your business. </p>
                <p><strong>We build brands:</strong> Logo designs, brand assets, social media icons, business cards, loyalty cards, labels, and much more!</p>
                <h4>WEB & ONLINE PRESENCE</h4>
                <p>What about the online side? An online presence is just as important as your offline presence. This can play a major part in how your customers interact with your business, and can be the primary focus of your business, for  customers booking your services, or buy your products. You want to make sure this is the best experience. Thats why we specialise in creating bespoke user journeys to give your customers the best experience & keep them coming back.
                </p>
                <p><strong>We build websites:</strong> UX / IU (user experience focused design), web design, and web development, and much much more!</p>
                <h4>THE EXTRA MILE</h4>
                <p>We go the extra mile … We know that setting this up is just the first step, we offer support and maintenance to help you maintain your website with options to suit your needs at your level of expertise.</p>
                <a href="#aboutContact" class="aboutLink">
                    <button>Contact</button>
                </a>
            </div>
            <div class="mainContent">
                <div>
                    <div class="serviceImages">
                        {/* <img src="https://i.pinimg.com/564x/1b/d1/76/1bd17689f483069a9694653e46af30ff.jpg"></img> */}
                        {/* <img src="https://i.pinimg.com/564x/b6/14/de/b614dedeb396922f9e389d151db4d8b7.jpg"></img> */}
                        <img src={handonnotepad} alt="useful alt tag" />
                        {/* <img src={Desk} alt="useful alt tag" /> */}
                        <img src={setupImg} alt="useful alt tag" />
                        {/* <img src={SetupImg} alt="a working image" /> */}
                    </div>
                </div>
                <div class="processContent">
                    <div class="stage">
                        <h3 class="stageName">CONSULTATION</h3>
                        <p>We will sit down together and talk about your business and understand what you want to achieve and how Design & develop.Co can help you create the brand & website your looking for and outline what the process would looks like. I will then put together a proposal of what your transformation is going to look like. </p>
                    </div>
                    <div class="stage">
                        <h3 class="stageName">WIREFRAMING</h3>
                        <p>Based on our consultation we will go through all the things we need to have to create the best experience for your customers and we will wireframe out the perfect journey, for your users based on the users primary goals. </p>
                    </div>
                    <div class="stage">
                        <h3 class="stageName">DESIGN PHASE</h3>
                        <p>Wireframing done! We’ll put everything together and I will create the mockup of what your site will look like. This will be with the wireframes and the branding such as the colour scheme and dummy or real content added, to give you an idea of what the finished product will look like.</p>
                    </div>
                    <div class="stage">
                        <h3 class="stageName">DEVELOPMENT PHASE</h3>
                        <p>Once we are happy with the design and the mockup that we have produced then we are all good to go creating the website in development! I will keep you updated during this process but will be aiming to match the design perfectly so there will be no surprises.</p>
                    </div>
                    <div class="stage">
                        <h3 class="stageName">COMPLETION</h3>
                        <p>Now your site has been created! Everything will be ready for you and now the only thing left to do is for me to hand everything over to you and show you anything that you have left to do and the rest is all yours! At this point we have options if you’d like future training on how to use your brand, and website, or we also offer maintenance packages to suit each client where I can maintain your site for you.</p>
                    </div>
                    <a href="mailto:simerondevelops@gmail.com?subject=Customer enquiry" target="_blank">
                        <button>Book a consultation</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
)

Services.propTypes = {
    siteTitle: PropTypes.string,
}

Services.defaultProps = {
    siteTitle: ``,
}

export default Services
