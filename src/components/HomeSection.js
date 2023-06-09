import * as React from "react";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import "./HomeSection.css";
import Chatbot from "react-chatbot-kit";

import ActionProvider from "./ActionProvider";
import config from "../config";
import MessageParser from "./MessageParser";

function HomeSection() {
  return (
    <div>
      <div className="home-container">
        <header className="blog-header">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>
              Jun's Blog <img src="/img/laptop.png" width="27" height="27" />
              {/* <a href="https://www.flaticon.com/free-icons/laptop" title="laptop icons">Laptop icons created by Vectors Market - Flaticon</a> */}
            </h1>
          </Link>
        </header>
        {/* <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        /> */}
      </div>
    </div>
  );
}

export default HomeSection;
