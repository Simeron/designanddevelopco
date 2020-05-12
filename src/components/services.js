import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
// import { AnchorLink } from "gatsby-plugin-anchor-links";

const Services = () => (
    <div>
        <h2 style={{ backgroundColor: `#f4e1e5`, height: `70px`, textAlign: `center`, padding: `25px`, width: `100%`, fontFamily: `Cutive Mono, monospace` }}>Services</h2>
        <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
        }}>
            <hr style={{ marginTop: `-27px`, backgroundColor: `black`, height: `2px` }} />
            <div style={{ width: `40%` }}>
                <h3 style={{ borderBottom: `2px solid black`, fontFamily: `Cutive Mono, monospace`, paddingBottom: `20px` }}>What services we offer</h3>
                <p>I help FEMALE ENTREPRENEURS transform their web presence, through creating bespoke user experiences and websites transform their web presence, through creating bespoke user experiences and websites</p>
                {/* <AnchorLink to="../../AboutContact" title="Our team"> */}
                    <button style={{ backgroundColor: `#f4e1e5`, borderRadius: ` 5px`, fontFamily: `Cutive Mono, monospace` }}>Contact</button>
                {/* </AnchorLink> */}
            </div>
            <div style={{ display: `flex` }}>
                <div>
                    <div style={{ width: `400px`, marginBottom: `1.45rem`, padding: `25px` }}>
                        {/* <Image /> */}
                        {/* <img src="../images/setupImg.jpg" style={{width: `200px`}}></img> */}
                        <img src="https://i.pinimg.com/564x/1b/d1/76/1bd17689f483069a9694653e46af30ff.jpg"></img>
                        <img src="https://i.pinimg.com/564x/b6/14/de/b614dedeb396922f9e389d151db4d8b7.jpg"></img>
                    </div>
                </div>
                <div style={{ borderLeft: `2px solid black`, padding: `25px` }}>
                    <div style={{ borderBottom: `1.5px solid black`, marginBottom: `30px` }}>
                        <h3 style={{ fontFamily: `Cutive Mono, monospace` }}>CONSULTATION</h3>
                        <p>We will sit down together and talk about your business and understand what you want to acieve and how Design & develop.Co can help you create the website your looking for and outline what the process would looks like. </p>
                    </div>
                    <div style={{ borderBottom: `1.5px solid black`, marginBottom: `30px` }}>
                        <h3 style={{ fontFamily: `Cutive Mono, monospace` }}>WIREFRAMING</h3>
                        <p>Based on our consultation we will go through all the things we need to have to create the best experience for your customers and we will wireframe out the perfect journey.</p>
                    </div>
                    <div style={{ borderBottom: `1.5px solid black`, marginBottom: `30px` }}>
                        <h3 style={{ fontFamily: `Cutive Mono, monospace` }}>DESIGN PHASE</h3>
                        <p>Wireframing done we’ll put everything together and I will create the mockup of what your site will look like, with the wireframe applied and the colour scheme and dummy or real content added. </p>
                    </div>
                    <div style={{ borderBottom: `1.5px solid black`, marginBottom: `30px` }}>
                        <h3 style={{ fontFamily: `Cutive Mono, monospace` }}>DEVELOPMENT PHASE</h3>
                        <p>Once we are happy with the design and the mockup that we have produced then we are all good to go creating the website in development! I will keep you updated during this process but will be aiming to match the design perfectly so there will be no surprises.</p>
                    </div>
                    <div style={{ borderBottom: `1.5px solid black`, marginBottom: `30px` }}>
                        <h3 style={{ fontFamily: `Cutive Mono, monospace` }}>COMPLETION</h3>
                        <p>Now your site has been created! Everything will be ready for you and now the only thing left to do is for me to hand everything over to you and show you anything that you have left to do and the rest is all yours!</p>
                    </div>
                    <a href="mailto:simeron03@icloud.com?subject=Customer enquiry" target="_blank">
                        <button style={{ backgroundColor: `#f4e1e5`, borderRadius: ` 5px`, fontFamily: `Cutive Mono, monospace` }}>Book a consultation</button>
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
