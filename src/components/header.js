import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
// import './style.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `#b76e79`,
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
        paddingTop: `1.45rem`,
      }}
    >
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#333333`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <nav className="navItems" style={{ display: `flex`, direction: `rtl`, borderBottom: `solid #333333 3px`, fontFamily: `Cutive Mono, monospace` }}>
        <div className='menuItems' style={{textAlign: `left`, width: `50%`, display: `flex`}}>
        <a href="#aboutContact" style={{ textDecoration: 'none' }}>
          <p style={{ paddingRight: `50px` }}>| Contact |</p>
        </a>
        <a href="#aboutContact" style={{ textDecoration: 'none' }}>
          <p style={{ paddingRight: `10px` }}>About |</p>
        </a>
        <a href="#services" style={{ textDecoration: 'none' }}>
          <p style={{ paddingRight: `10px` }}>Services |</p>
        </a>
        </div>
        <div className='space' style={{textAlign: `right`, width: `50%`}}></div>
        <a className='logo' style={{width: `300px`, textAlign: `left`, paddingLeft: `50px`}}><Image /></a>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
