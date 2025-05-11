import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="container-fluid p-0">
      {/* Left Fixed Side */}
      <div
        className="left-side bg-light py-5 px-4"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "50%",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <img
          src="/my-photo.jpg"
          alt="Samiksha Mudunuri"
          className="img-fluid rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
          }}
        />
        <h2 className="my-3">Samiksha Mudunuri</h2>
        <p>Email: samikshamudunuri@gmail.com</p>

        <a
          href="https://www.linkedin.com/in/samiksha-mudunuri-908a33294"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary d-flex align-items-center mb-2"
          style={{
            width: "200px",
            justifyContent: "center",
            padding: "10px",
            borderRadius: "30px",
          }}
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>

        <a
          href="https://github.com/samikshamudunuri"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark d-flex align-items-center"
          style={{
            width: "200px",
            justifyContent: "center",
            padding: "10px",
            borderRadius: "30px",
          }}
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
      </div>

      {/* Right Scrollable Content */}
      <div
        className="right-side"
        style={{
          marginLeft: "50%",
          padding: "20px",
          overflowY: "scroll",
          height: "100vh",
        }}
      >
        <section>
          <h2>About Me</h2>
          <p>
            As an Information Technology Engineering student, I’m eager to turn
            my knowledge and skills into impactful solutions. I'm always looking
            for opportunities to grow and apply what I’ve learned in real-world
            projects. With a passion for problem-solving and a curiosity for
            emerging technologies, I’m excited to contribute, learn, and be a
            part of innovative teams.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <div className="mb-4">
            <h5>Bachelor of Engineering in Information Technology</h5>
            <p className="mb-1">
              <strong>Chaitanya Bharathi Institute of Technology</strong> (2022–2026)
            </p>
            <p>CGPA: 8.58</p>
          </div>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li>Languages: Python, Java (Basic)</li>
            <li>Web: MERN Stack (MongoDB, Express, React, Node.js)</li>
            <li>Databases: MongoDB, MySQL</li>
            <li>Concepts: Data Structures, OOP, Algorithms</li>
            <li>Soft Skills: Problem Solving, Debugging, Teamwork</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>AI-Based Translator</strong>: A translation tool using AI
              models to convert text across different languages. It features an
              easy-to-use UI built with React and integrates GEMINI API for
              real-time translations.
            </li>
            <li>
              <strong>Skin Cancer Detection</strong>: A machine learning-based
              web app for skin cancer classification using images of skin
              lesions. The app uses deep learning techniques to provide
              real-time predictions for users based on image uploads.
            </li>
            <li>
              <strong>Air Quality Index using BME680 Sensor</strong>: A project
              that monitors air quality using the BME680 sensor, with live data
              visualization. It uses a machine learning model to classify air
              quality as "good" or "bad."
            </li>
            <li>
              <strong>Image Enhancement using Django</strong>: Built a
              Django-based web application that applies various image processing
              techniques to enhance image quality. This project allows users to
              upload images and improve their resolution, contrast, sharpness,
              and reduce noise using Pillow and OpenCV.
            </li>
          </ul>
        </section>

        <section>
          <h2>Extracurriculars</h2>
          <ul>
            <li>
              <strong>CBIT Open Source Community (COSC)</strong>: Played an
              active role in organizing the technical fest, contributing to event
              planning and technical coordination.
            </li>
            <li>
              <strong>Chaitanya Samskruthi</strong>: Worked as part of the
              finance team, playing a key role in managing budgets and securing
              sponsorships for the cultural fest.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
