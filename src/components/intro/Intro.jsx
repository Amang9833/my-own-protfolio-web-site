import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Problem solver",
        "MERN stack Developer",
        "ML enthusiast",
        "Web Developer",
        "and increasing... :)"
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="assets/man.png" alt="" /> */}
          <div className="img-div">
            <h3>About me :)</h3>
            <p className="myIntro">My Introduction</p>I am an Undergraduate,
            like to explore new frameworks, Ml alogrithms, exploring whatever
            interests me, with a versatile mind.
            <div className="qualification">
              <p className="education">Education</p>
              <div className="box box1">
                B.Tech. in Artificial Intelligence and Machine learning
                <p>Thakur College Of Engineering and Technology</p>
                <h6>2021 - current</h6>
              </div>
              <div className="box box2">
                Higher Secondary School Certificate
                <p>
                  The Bombay Suburban Grain Dealers’ Junior College of Commerce,
                  Arts and Science
                </p>
                <h6>2018 - 2020</h6>
              </div>
              <div className="box box3">
                High School Certificate
                <p>Sir J.P high school</p>
                <h6>2010 - 2018</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Aman Gupta</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
