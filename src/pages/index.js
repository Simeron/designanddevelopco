import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../components/style.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a id="top">
      <div class="homepage">
        <div class="borderTop">
          <div class="borderTopTwo"></div>
        </div>
        <div class="headerContent">
          <p>I help female entrepreneurs transform there web presence, through creating bespoke user experiences and websites 🎨✍🏽👩🏽‍💻 Now lets go build something great.
      </p>
          <a href="mailto:simerondevelops@gmail.com?subject=Customer enquiry" target="_blank">
            <button class="bookConsult">Book your <strong>FREE</strong> consultation</button>
          </a>
        </div>
        <div class="headerImage">
          <Image />
        </div>
        <div class="borderBottomTwo">
          <div class="borderBottom"></div>
        </div>
      </div>
    </a>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
