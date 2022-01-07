import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats";
import Login from "./Login";

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App;


// REACT_APP_CHAT_ENGINE_KEY= 601e49bc-8de8-49a0-ba70-8a4eddfcf240
// REACT_APP_CHAT_ENGINE_ID= 9869711b-e091-4dda-b79e-3087b0946c87
