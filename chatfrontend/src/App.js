import Chat from "./chat/chat";
import Process from "./process/process";
import Home from "./home/home";
import { Link, useParams, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import React from "react";
import io from "socket.io-client";

const socket = io.connect('/');

function Appmain() {
  const props = useParams();
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          // username={props.match.params.username}
          // roomname={props.match.params.roomname}
          username={props.username}
          roomname={props.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home socket={socket} />}>
            {/* <Home socket={socket} /> */}
          </Route>
          {/* <Route path="/chat/:roomname/:username" component={Appmain} /> */}
          <Route path="/chat/:roomname/:username" element={<Appmain/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;