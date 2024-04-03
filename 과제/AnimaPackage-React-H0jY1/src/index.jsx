import React from "react";
import ReactDOMClient from "react-dom/client";
import { Mainpage } from "./screens/Mainpage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Mainpage />);
