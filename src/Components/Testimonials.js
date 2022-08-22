import React from "react";
import testimonialsimg from "../images/testimonials.jpg";

export default function Testimonials(props) {
  if (props.data) {
    var testimonials = props.data.testimonials.map((el) => {
      return (
        <li key={el.user}>
          <blockquote>
            <p>{el.text}</p>
            <cite>{el.user}</cite>
          </blockquote>
        </li>
      );
    });
  }

  return (
    <section
      id="testimonials"
      style={{
        backgroundImage: `url(${testimonialsimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
