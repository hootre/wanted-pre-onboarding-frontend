import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AppLayout } from "./AppLayout";
import { Todo } from "./pages/Todo";
import { Main } from "./pages/Main";

function App() {
  return (
    <Router>
      <AppLayout>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
