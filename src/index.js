import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  LikesProvider,
  VideoProvider,
  WatchLaterProvider,
} from "./context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <WatchLaterProvider>
        <LikesProvider>
          <VideoProvider>
            <Router>
              <App />
            </Router>
          </VideoProvider>
        </LikesProvider>
      </WatchLaterProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
