import React from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";

const Header = () => (
    <header>
        <h1>
          <Link
            to="/"
          >
            {config.siteTitle}
          </Link>
        </h1>
        <h2
          className="tagline"
        ><Link
          to="/"
        >{config.tagline}
        </Link>
        </h2>
  
    </header>
  )
  
  export default Header