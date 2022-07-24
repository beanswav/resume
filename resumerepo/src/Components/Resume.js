import React from "react";

export default function Resume(props) {
  if (props.data) {
    var skillmessage = props.data.skillmessage;
    var education = props.data.education.map((el) => {
      return (
        <div key={el.school}>
          <h3>{el.school}</h3>
          <p className="info">
            {el.degree} <span>&bull;</span>
            <em className="date">{el.graduated}</em>
          </p>
          <p>{el.description}</p>
        </div>
      );
    });
    var workEx = props.data.work.map((el) => {
      return (
        <div key={el.company}>
          <h3>{el.company}</h3>
          <p className="info">
            {el.title}
            <span>&bull;</span>
            <em className="date">{el.years}</em>
          </p>
          <p>{el.description}</p>
        </div>
      );
    });
    var skills = props.data.skills.map((el) => {
      var className = "bar-expand " + el.name.toLowerCase();
      return (
        <li key={el.name}>
          <span style={{ width: el.level }} className={className}></span>
          <em>{el.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{workEx}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
