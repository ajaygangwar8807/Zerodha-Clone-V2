import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/ajay.jpg"
            style={{ borderRadius: "100%", width: "40%" }}
          />
          <h4 className="mt-5">Ajay Gangwar</h4>
          <h6>Software Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Ajay Gangwar is currently pursuing a Bachelor of Computer
            Applications (BCA) with a deep interest in web development. His
            passion for coding and curiosity to build real-world applications
            led him to develop a full-fledged clone of Zerodha — a testament to
            his growing skills and commitment to learning by doing.
          </p>
          <p>
            Ajay finds joy in travel, which gives him new perspectives and
            creative inspiration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
