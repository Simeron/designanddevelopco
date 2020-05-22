import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ContactImage from "./image"

import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"

// const data = useStaticQuery(graphql`
// {
// allSpeakingYaml {
// edges {
//   node {
//     conference
//     year
//     image {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// }
// }
// }`)
// @media screen and (max-width: 700px) {
//     .introText {
//       width: 100%;
//     }
//     .mainContent {
//         display: block;
//     }
//   }

const AboutContact = () => (
    <div>
        {/* {data.allFile.edges.map(({node}) => (
            <Img fluid={node.childImageSharp} />
        ))} */}
        <a id="aboutContact">
            <h2 style={{ backgroundColor: `#f4e1e5`, height: `70px`, textAlign: `center`, padding: `25px`, width: `100%`, fontFamily: `Cutive Mono, monospace` }}>About & Contact</h2>
        </a>
        <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
        }}>
            <hr style={{ marginTop: `-27px`, backgroundColor: `black`, height: `2px` }} />
            <div style={{ width: `60%` }}>
                <h3 style={{ borderBottom: `2px solid black`, fontFamily: `Cutive Mono, monospace`, paddingBottom: `20px` }}>All about Design & Develop.Co</h3>
                <p>I help FEMALE ENTREPRENEURS transform their web presence, through creating bespoke user experiences and websites transform their web presence, through creating bespoke user experiences and websitespresence, through creating bespoke user experiences and websites transform their web presence, through creating bespoke user experiences and websites</p>
                <a href="mailto:simeron03@icloud.com?subject=Customer enquiry" target="_blank">
                    <button style={{ backgroundColor: `#f4e1e5`, borderRadius: ` 5px`, fontFamily: `Cutive Mono, monospace` }}>Send us an email</button>
                </a>
            </div>
            <div style={{ display: `flex`, borderBottom: `2px solid black` }}>
                <div>
                    <div style={{ width: `400px`, marginBottom: `1.45rem`, padding: `25px` }}>
                        {/* <Image /> */}
                        {/* <img src="../images/setupImg.jpg" style={{width: `200px`}}></img> */}
                        <img src="https://i.pinimg.com/564x/1d/43/d2/1d43d21964da805557d7c94f1bc43746.jpg"></img>
                    </div>
                </div>
                <div style={{ marginLeft: `100px` }}>
                    <div style={{ display: `flex` }}>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/15/15914.svg" style={{ width: `35px` }} />
                        </div>
                        <div>
                            <p style={{ paddingLeft: `15px` }}>| 07501351982</p>
                        </div>
                    </div>
                    <div style={{ display: `flex` }}>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/561/561188.svg" style={{ width: `35px` }} />
                        </div>
                        <div>
                            <p style={{ paddingLeft: `15px` }}>| simeron03@icloud.com</p>
                        </div>
                    </div>
                    <div style={{ display: `flex` }}>
                        <div>
                            <img src="https://www.iconsdb.com/icons/preview/black/instagram-xxl.png" style={{ width: `35px` }} />
                        </div>
                        <div>
                            <p style={{ paddingLeft: `15px` }}>| @designanddevelopco</p>
                        </div>
                    </div>
                    <div style={{ display: `flex` }}>
                        <div>
                            <img src="https://image.flaticon.com/icons/svg/60/60580.svg" style={{ width: `35px` }} />
                        </div>
                        <div>
                            <p style={{ paddingLeft: `15px` }}>| @designanddevelopco</p>
                        </div>
                    </div>
                    <a href="mailto:simeron03@icloud.com?subject=Customer enquiry" target="_blank">
                        <button style={{ backgroundColor: `#f4e1e5`, borderRadius: ` 5px`, display: `block`, marginBottom: `20px`, fontFamily: `Cutive Mono, monospace` }}>Book your consultation</button>
                    </a>
                    <a href="#services" style={{ textDecoration: 'none' }}>
                        <button style={{ backgroundColor: `#e1e9ed`, borderRadius: ` 5px`, display: `block`, fontFamily: `Cutive Mono, monospace` }}>Services</button>
                    </a>
                    <a href="#index" style={{ textDecoration: 'none' }}>
                        <button style={{ width: `50px`, backgroundColor: `#e1e9ed`, borderRadius: `50%`, height: `50px`, fontSize: `30px`, marginTop: `25px`, marginBottom: `25px`, fontFamily: `Cutive Mono, monospace`, paddingTop: `10px` }}>&uarr;</button>
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
