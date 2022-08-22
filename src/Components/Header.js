import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header(props) {
  const [current, setCurrent] = useState(null);

  if (props.data) {
    var name = props.data.name;
    var city = props.data.address.city;
    var occupation = props.data.occupation;
    var description = props.data.description;
    var networks = props.data.networks;
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li>
            <Link activeClass="current" smooth={true} to="home">
              Home
            </Link>
          </li>

          <li>
            <Link activeClass="current" smooth={true} to="about">
              About
            </Link>
          </li>

          <li>
            <Link activeClass="current" smooth={true} to="resume">
              Resume
            </Link>
          </li>

          <li>
            <Link activeClass="current" smooth={true} to="testimonials">
              Testimonials
            </Link>
          </li>

          <li>
            <Link activeClass="current" smooth={true} to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}</h1>
          <h3>
            I'm a {city} based <span>{occupation}</span>, {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <Link smooth={true} to="about">
          <i className="icon-down-circle"></i>
        </Link>
      </p>
    </header>
  );
}
