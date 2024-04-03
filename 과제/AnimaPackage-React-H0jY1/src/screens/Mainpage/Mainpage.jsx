import React from "react";
import "./style.css";

export const Mainpage = () => {
  return (
    <div className="mainpage">
      <div className="div">
        <footer className="footer">
          <div className="overlap-group">
            <img className="line" alt="Line" src="/img/line-1.svg" />
            <p className="email">
              Email : rlawjdgns135@naver.com
              <br />
              Tel : 010-5141-9809
            </p>
            <div className="text-wrapper">CONTACT US</div>
          </div>
        </footer>
        <div className="joke-recommendation">
          <p className="p">
            Start your day with <br />a funny joke.
          </p>
          <img className="img" alt="Pexels andrea" src="/img/pexels-andrea-piacquadio-3799761-1.png" />
        </div>
        <div className="place-recommendation">
          <p className="p">Get place recommendations for your next vacation.</p>
          <img className="img" alt="Pexels pixabay" src="/img/pexels-pixabay-161097-1.png" />
        </div>
        <div className="music-recommendation">
          <p className="p">Get recommendations for music that suits you.</p>
          <img className="img" alt="Pexels elviss" src="/img/pexels-elviss-railijs-bit-ns-1389429-1.png" />
        </div>
        <p className="text-wrapper-2">Check out other recommended features on our site!!</p>
        <div className="community">
          <div className="share-result-button">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Share Result</div>
            </div>
          </div>
          <p className="description-of">
            Share your test results with others and engage in conversations to gain psychological stability.
          </p>
          <p className="header-of-community">SHARE YOUR RESULT WITH OTHER PEOPLE RIGHT NOW</p>
          <img className="community-photo" alt="Community photo" src="/img/community-photo.png" />
        </div>
        <div className="psychological-test">
          <div className="start-the-test">
            <div className="overlap-group-2">
              <div className="text-wrapper-4">Start the Test</div>
            </div>
          </div>
          <p className="description-of-test">
            <span className="span">O</span>
            <span className="text-wrapper-5">
              ur test helps measure the stress that is troubling you in a short period of time so that you can receive
              accurate counseling from a medical professional.
              <br />
              Many people have already proven the effectiveness of this test. Save your life only in 5 minutes.
              <br />
            </span>
          </p>
          <p className="header-of">CHECK YOUR PSYCHOLOGICAL HEALTH RIGHT NOW</p>
          <img className="psychological-test-2" alt="Psychological test" src="/img/psychological-test-photo.png" />
        </div>
        <div className="overlap">
          <div className="article">
            <div className="overlap-2">
              <p className="text-wrapper-6">Welcome To Free Psychological Care</p>
              <img
                className="pexels-lisa-fotios"
                alt="Pexels lisa fotios"
                src="/img/pexels-lisa-fotios-1444424-1.png"
              />
            </div>
          </div>
          <img className="header" alt="Header" src="/img/header.png" />
        </div>
      </div>
    </div>
  );
};
