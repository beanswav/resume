import React from "react";
import profilepic from "../images/profilepic.jpg";

export default function About(props) {
  if (props.data) {
    var name = props.data.name;
    var bio = props.data.bio;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone = props.data.phone;
    var email = props.data.email;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Vince Estrada Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
              <div style={{ width: "58.3333%", paddingTop: 6 }}>
                <p>
                  <a
                    className="button"
                    href="https://docs.google.com/document/d/1EyxxShm10nknSBzV-craEZyuEtqXjU5Z/edit?usp=sharing&ouid=100150158492349996742&rtpof=true&sd=true"
                    style={{ marginTop: 6, background: "#444" }}
                  >
                    See Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
