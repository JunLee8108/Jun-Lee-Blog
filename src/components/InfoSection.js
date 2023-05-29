import React from "react";
import "../App.css";
import "./InfoSection.css";

function InfoSection() {
  return (
    <div className="info-container">
      <h0>
        What is <span className="info-red">Tech Stack?</span>
      </h0>
      <p0>
        For the modern UI / UX system, React was used for the front end. <br />
        Django is for our backend system, and the database system used was RDS.
      </p0>

      <div className="info-container2">
        {/* {<h1>Our Mission</h1>}
                <h2>We provide an optimal in-store route according to user's shopping list.</h2> */}
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item1">
            <img
              src="/img/react2.png"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              class="rounded mx-auto d-block"
            />
            <h3>React</h3>
            <p3>Frontend Development</p3>
          </div>
          <div className="flexbox-item flexbox-item2">
            <img
              src="/img/django.png"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              class="rounded mx-auto d-block"
            />
            <h3>Django</h3>
            <p3>Backend Development</p3>
          </div>
          <div className="flexbox-item flexbox-item3">
            <img
              src="/img/Rds.png"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
              class="rounded mx-auto d-block"
            />
            <h3>Amazon RDS</h3>
            <p3>Database System</p3>
          </div>
        </div>
      </div>
      {/* <div className="targetImage2">
                <img className="targetImage" src="img/target.png" ></img>
            </div> */}
    </div>
  );
}

export default InfoSection;
