import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a id="top">
    <div style={{ display: `flex`, padding: `30px` }}>
      <div style={{ height: `220px`, width: `350px`, borderTop: `3px  solid black`, position: `relative`, margin: `0px`, bottom: `30px`, left: `-29px` }}>
        <div style={{ borderLeft: `3px solid black`, position: `absolute`, top: `0`, bottom: `50%`, }}></div>
      </div>
      <div style={{ marginLeft: `-50px`, paddingLeft: `25px` }}>
        <p style={{ paddingRight: `25px`, fontFamily: `Cutive Mono, monospace` }}>I help female entrepreneurs transform there web presence, through creating bespoke user experiences and websites 🎨✍🏽👩🏽‍💻 Now lets go build something great.
      </p>
      <a href="mailto:simeron03@icloud.com?subject=Customer enquiry" target="_blank">
      <button style={{ backgroundColor: `#f4e1e5`, borderRadius: ` 5px`, fontFamily: `Cutive Mono, monospace` }}>Book your consultation</button>
      </a>
      </div>
      <div style={{ width: `1400px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div style={{ height: `220px`, width: `355px`, borderBottom: `3px  solid black`, position: `relative`, margin: `0px`, bottom: `30px`, left: `30px` }}>
        <div style={{ borderRight: `3px solid black`, height: `50%`, position: `relative`, top: `50%` }}></div>
      </div>
    </div>
    </a>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
