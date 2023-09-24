import React from 'react';

function HeroInfo() {
  return (
    <>
    <div className="hero">
      <div className="awesome-website">
        <h1>Who am I ?</h1>
        <p>
          I'm a dedicated computer science student currently embarking on an
          enriching internship journey at DevRev. My passion lies at the
          intersection of software engineering and data engineering, and I'm
          determined to forge a career path as a software engineer with a
          strong focus on data-driven solutions.
        </p>
        <button>Write to me !</button>
      </div>
      <div>
        <img src="./images/ilhan.jpeg" alt="Ilhan's photo" />
      </div>
    </div>
    <h1>Why should you hire me ?</h1>
    <div className="info">
      <div className="fact1">
        <img src="./images/leetcode.jpeg" alt="LeetCode" />
        <p>
          My strong problem-solving skills are showcased through my LeetCode
          profile, where I regularly tackle complex algorithmic challenges and
          participate in coding competitions. These experiences underscore my
          passion for problem-solving and my commitment to continuous learning
          in the field of computer science.
        </p>
      </div>
      <div className="fact2">
        <img src="./images/embedded.jpeg" alt="Embedded Systems" />
        <p>
          Through my experience in embedded systems, I've built a line follower,
          demonstrating proficiency in microcontrollers and seamless
          hardware-software integration. I've also completed a real-time rake
          monitoring project, showcasing my skills in sensor integration and
          real-time data acquisition.
        </p>
      </div>

      <div className="fact3">
        <img src="./images/mern.jpeg" alt="MERN Stack" />
        <p>
          I possess solid proficiency in the MERN stack, having built and
          deployed multiple web applications. My experience includes front-end
          development with React, back-end work with Node.js and Express, and
          database management with MongoDB. I thrive in creating responsive,
          user-friendly, and scalable web solutions.
        </p>
      </div>
      <div className="fact4">
        <img src="./images/bigdata.png" alt="Big Data" />
        <p>
          In my data engineering journey, I've crafted robust ETL pipelines to
          efficiently transform and ingest data from diverse sources. I've also
          leveraged Tableau to create compelling data visualizations, empowering
          stakeholders with insightful analytics. My experience reflects a
          seamless blend of data integration and visualization to drive
          data-driven decision-making.
        </p>
      </div>
    </div>
    </>
  );
}

export default HeroInfo;
