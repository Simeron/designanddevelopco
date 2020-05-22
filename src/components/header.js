import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `#b76e79`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
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
      <nav className="menuItems" style={{ display: `flex`, direction: `rtl`, borderBottom: `solid #333333 3px`, fontFamily: `Cutive Mono, monospace` }}>
        <a href="#aboutContact" style={{ textDecoration: 'none' }}>
          <p style={{ paddingRight: `10px` }}>| Contact |</p>
        </a>
        <a href="#aboutContact" style={{ textDecoration: 'none' }}>
          <p style={{ paddingRight: `10px` }}>About |</p>
        </a>
        <a href="#services" style={{ textDecoration: 'none' }}>
          <p style={{ paddingRight: `10px` }}>Services |</p>
        </a>
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
