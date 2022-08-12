import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Dashboard",
      desc: "These website is made to calculate the montly expension with login/logout, profile picture upload, add new user functionlty using firabase",
      img: "./assets/firebase.png",
      project: "https://dashbord-with-firebase.netlify.app/",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "blogMe",
      desc: "A website made using MERN tech. stack which have function like login/logout , data storage ",
      img: "./assets/blogMe.png",
      project: "https://github.com/Amang9833/blogme/tree/blog-master/api",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "A chat app to get connect with firends build using nodejs,reactjs, socket.io",
      img: "./assets/chat.png",
      project: "https://ichat-web-app.netlify.app/",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "OpenNews",
      desc: "A news web app which display news build using reactjs with multiple categories",
      img: "./assets/news.png",
      project: "https://opennews-refresher.netlify.app/",
    },
    {
      id: "5",
      icon: "./assets/writing.png",
      title: "contactForm",
      desc: "A from which collect user data and document the data in database",
      img: "./assets/contact.png",
      project: "https://getuserinfo.netlify.app/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>
                    <a href={d.project} className='link' target="_blank" rel="noreferrer">
                    hosted link
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
