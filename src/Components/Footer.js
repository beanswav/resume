import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer(props) {
  if (props.data) {
    var social = props.data.socials.map((el) => {
      return (
        <li key={el.name}>
          <a href={el.url}>
            <i className={el.className}></i>
          </a>
        </li>
      );
    });
  }
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{social}</ul>
        </div>
        <div id="go-top">
          <Link smooth={true} title="Back to Top" to="home">
            <i className="icon-up-open"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
