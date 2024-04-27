import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const TitleParts = (props) => {
  <div style={{ backgroundColor: "red", color: "white" }}>
    <h3>{props.title}</h3>
  </div>;
};

const ContentParts = (props) => {
  <div style={{ border: "1px solid blue", margin: 15 }}>
    <div>줄거리: {props.body}</div>
  </div>;
};

const Book = (props) => {
  <div>
    <TitleParts title={props.title} />
    <ContentParts body={props.body} />
  </div>;
};

root.render(
  <React.StrictMode>
    <div>
      <Book title='삼국지' body='옛날 중국 이야기' />
      <Book title='민수기' body='옛날 이스라엘 이야기' />
      <Book title='서유기' body='원숭이가 활약하는 이야기' />
    </div>
  </React.StrictMode>
);
