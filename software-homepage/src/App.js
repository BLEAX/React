import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MajorIntroduce from "./page/MajorIntroduce";
import EduPurpose from "./page/EduPurpose";
import MajorAbility from "./page/MajorAbility";
import ProfessorIntroduce from "./page/ProfessorIntroduce";
import History from "./page/History";
import "./App.css";
import Header from "./page/Header";
import Footer from "./page/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/MajorIntroduce' element={<MajorIntroduce />} />
          <Route path='/EduPurpose' element={<EduPurpose />} />
          <Route path='/MajorAbility' element={<MajorAbility />} />
          <Route path='/ProfessorIntroduce' element={<ProfessorIntroduce />} />
          <Route path='/History' element={<History />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
