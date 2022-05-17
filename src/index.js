import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, LikesProvider, VideoProvider } from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LikesProvider>
        <VideoProvider>
          <Router>
            <App />
          </Router>
        </VideoProvider>
      </LikesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
