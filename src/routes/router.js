import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Includes */
import Navbar from "../components/includes/NavigationBar.jsx";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../components/includes/Footer.jsx";

/* Error Screen */
import ErrorScreen1 from "../components/screens/AnnounceScreenIII.jsx";
import ErrorScreen2 from "../components/screens/InformationScreen.jsx";
import ErrorScreen3 from "../components/screens/404.jsx";
import ErrorScreen4 from "../components/screens/NoRoutine.jsx";

/* Resource */
import ResourceScreen from "../components/resources/pages/ResourceScreen.jsx";
import LevelTermInfoPage from "../components/resources/pages/LevelTermInfoPage.jsx";
import CoursePage from "../components/resources/pages/CoursePage.jsx";

/* Syllabus */
import SyllabusPage from "../pages/SyllabusPage.jsx";

/* Accessories */
import AccessoriesPage from "../pages/AccessoriesPage.jsx";

/* Archive */
import ArchivePage from "../pages/Archives.jsx";
import Covid19 from "../pages/CovidPage.jsx";
import StudentsInfo from "../components/archive/pages/StudentsInfo.jsx";
import LabRoutine from "../components/archive/pages/LabRoutine.jsx";
import TermExamRoutine from "../components/archive/pages/ExamRoutine.jsx";

/* Lab Routine */
import Level1Term2Lab from "../components/archive/customs/Lab/Level1Term2Lab.jsx";
import Level2Term1Lab from "../components/archive/customs/Lab/Level2Term1Lab.jsx";
import Level2Term2Lab from "../components/archive/customs/Lab/Level2Term2Lab.jsx";
import Level3Term1Lab from "../components/archive/customs/Lab/Level3Term1Lab.jsx";
import Level3Term2Lab from "../components/archive/customs/Lab/Level3Term2Lab.jsx";
import Level4Term1Lab from "../components/archive/customs/Lab/Level4Term1Lab.jsx";
import Level4Term2Lab from "../components/archive/customs/Lab/Level4Term2Lab.jsx";

/* Exam Routine */

/* Developer */
import DeveloperPage from "../pages/DeveloperPage.jsx";
import ExamData from "../components/archive/customs/Exam/ExamData.jsx";

const RouteHandle = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        {/********* Resourece Section Starts Here ************/}
        <Route exact path="/resource" element={<ResourceScreen />} />
        <Route exact path="/resource/:id" element={<LevelTermInfoPage />} />
        <Route exact path="/resource/:id/:access" element={<CoursePage />} />

        {/********* Syllabus Section Starts Here ************/}
        <Route exact path="/syllabus" element={<SyllabusPage />} />
        {/********* Accessories Section Starts Here ************/}
        <Route exact path="/accessories" element={<AccessoriesPage />} />
        {/********* Archive Section Starts Here ************/}
        <Route exact path="/archives" element={<ArchivePage />} />
        <Route exact path="/studentsinfo" element={<StudentsInfo />} />
        <Route exact path="/covid19updates" element={<Covid19 />} />
        <Route exact path="/labroutine" element={<LabRoutine />} />
        {/********* Lab Section Starts Here ************/}
        <Route exact path="/l1t2lab" element={<Level1Term2Lab />} />
        <Route exact path="/l2t1lab" element={<Level2Term1Lab />} />
        <Route exact path="/l2t2lab" element={<Level2Term2Lab />} />
        <Route exact path="/l3t1lab" element={<Level3Term1Lab />} />
        <Route exact path="/l3t2lab" element={<Level3Term2Lab />} />
        <Route exact path="/l4t1lab" element={<Level4Term1Lab />} />
        <Route exact path="/l4t2lab" element={<Level4Term2Lab />} />
        {/********* Exam Section Starts Here ************/}
      
        <Route exact path="/termexamroutine" element={<TermExamRoutine />} />
        <Route exact path="/termexamroutine/:nav" element={<ExamData />} />
        {/********* Developer Section Starts Here ************/}
        <Route exact path="/developer" element={<DeveloperPage />} />
        {/********* Error Section Starts Here ************/}
        <Route exact path="/404" element={<ErrorScreen1 />} />
        <Route exact path="/501" element={<ErrorScreen2 />} />
        <Route exact path="/503" element={<ErrorScreen4 />} />
        <Route exact path="/*" element={<ErrorScreen3 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteHandle;
