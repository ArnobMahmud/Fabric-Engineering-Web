import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

/* Includes */
import Navbar from "../components/includes/NavigationBar.jsx";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../components/includes/Footer.jsx";

/* Resource */
import ResourceScreen from "../components/resources/pages/ResourceScreen.jsx";
import LevelTermInfoPage from "../components/resources/pages/LevelTermInfoPage.jsx";
import CoursePage from "../components/resources/pages/CoursePage.jsx";

/* Syllabus */
import DocumentsPage from "../pages/DocumentsPage.jsx";

/* Accessories */
import AccessoriesPage from "../pages/AccessoriesPage.jsx";

/* Archive */
import ArchivePage from "../pages/Archives.jsx";
import Covid19 from "../pages/CovidPage.jsx";
import TermExamRoutine from "../components/archive/pages/ExamRoutine.jsx";

/* Exam Info */
import StudentsInfo from "../components/archive/pages/StudentsInfo.jsx";
import ExamData from "../components/archive/customs/Exam/ExamData.jsx";

/* Lab Data */
import LabRoutine from "../components/archive/pages/LabRoutine.jsx";
import LabData from "../components/archive/customs/Lab/LabData.jsx";

/* Developer */
import DeveloperPage from "../pages/DeveloperPage.jsx";

/* Error Screen */
import ErrorScreen1 from "../components/screens/AnnounceScreenIII.jsx";
import ErrorScreen2 from "../components/screens/InformationScreen.jsx";
import ErrorScreen3 from "../components/screens/404.jsx";
import ErrorScreen4 from "../components/screens/NoRoutine.jsx";

const RouteHandle = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/********* Resourece Section Starts Here ************/}
        <Route exact path="/resource" element={<ResourceScreen />} />
        <Route exact path="/resource/:id" element={<LevelTermInfoPage />} />
        <Route exact path="/resource/:id/:access" element={<CoursePage />} />
        {/********* Documents Section Starts Here ************/}
        <Route exact path="/documents" element={<DocumentsPage />} />
        {/********* Accessories Section Starts Here ************/}
        <Route exact path="/accessories" element={<AccessoriesPage />} />
        {/********* Archive Section Starts Here ************/}
        <Route exact path="/archives" element={<ArchivePage />} />
        <Route exact path="/studentsinfo" element={<StudentsInfo />} />
        <Route exact path="/covid19updates" element={<Covid19 />} />
        {/********* Exam Section Starts Here ************/}
        <Route exact path="/termexamroutine" element={<TermExamRoutine />} />
        <Route exact path="/termexamroutine/:nav" element={<ExamData />} />
        {/********* Lab Section Starts Here ************/}
        <Route exact path="/labroutine" element={<LabRoutine />} />
        <Route exact path="/labroutine/:id" element={<LabData />} />
        {/********* Developer Section Starts Here ************/}
        <Route exact path="/developer" element={<DeveloperPage />} />
        {/********* Error Section Starts Here ************/}
        <Route exact path="/404" element={<ErrorScreen1 />} />
        <Route exact path="/501" element={<ErrorScreen2 />} />
        <Route exact path="/503" element={<ErrorScreen4 />} />
        <Route exact path="/*" element={<ErrorScreen3 />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default RouteHandle;
