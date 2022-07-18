import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

/* Includes */
import Navbar from "../components/includes/NavigationBar";
import HomePage from "../pages/HomePage";
import Footer from "../components/includes/Footer";

/* Error Screen */
import ErrorScreen1 from "../components/screens/AnnounceScreenIII";
import ErrorScreen2 from "../components/screens/InformationScreen";
import ErrorScreen3 from "../components/screens/404";
import ErrorScreen4 from "../components/screens/NoRoutine";

/* Resource */
import ResourcePage from "../pages/ResourcePage";
import Level1Term1Page from "../components/resources/pages/screen/Level1Term1Page";
import Level1Term2Page from "../components/resources/pages/screen/Level1Term2Page";
import Level2Term1Page from "../components/resources/pages/screen/Level2Term1Page";
import Level2Term2Page from "../components/resources/pages/screen/Level2Term2Page";

/* Level 1 Term 1 */
import BCE1_1 from "../components/resources/pages/Level1Term1/BCEpage";
import Chemistry1_1 from "../components/resources/pages/Level1Term1/ChemistryPage";
import Math1_1 from "../components/resources/pages/Level1Term1/MathPage";
import Ntf1_1 from "../components/resources/pages/Level1Term1/NtfPage";
import Physics1_1 from "../components/resources/pages/Level1Term1/PhysicsPage";

/* Level 1 Term 2 */
import EM1_2 from "../components/resources/pages/Level1Term2/EngineeringMaterialsPage";
import Physics1_2 from "../components/resources/pages/Level1Term2/PhysicsPage";
import Chemistry1_2 from "../components/resources/pages/Level1Term2/ChemistryPage";
import Math1_2 from "../components/resources/pages/Level1Term2/MathPage";
import CP1_2 from "../components/resources/pages/Level1Term2/ComputerProgrammingPage";
import PSE1_2 from "../components/resources/pages/Level1Term2/PolymerSciencePage";

/* Level 2 Term 1 */
import Statistics2_1 from "../components/resources/pages/Level2Term1/StatisticsPage";
import FYT2_1 from "../components/resources/pages/Level2Term1/FYTPage";
import YM2_1 from "../components/resources/pages/Level2Term1/YMIPage";
import MMTF2_1 from "../components/resources/pages/Level2Term1/MMTFPage";
import WPP2_1 from "../components/resources/pages/Level2Term1/WPPPage";
import FME2_1 from "../components/resources/pages/Level2Term1/FMEPage";

/* Level 2 Term 2 */
import TP2_2 from "../components/resources/pages/Level2Term2/TPPage";
import Weaving2_2 from "../components/resources/pages/Level2Term2/WeavingPage";
import AMI2_2 from "../components/resources/pages/Level2Term2/AMIPage";
import FMkt2_2 from "../components/resources/pages/Level2Term2/FMktPage";
import WPI2_2 from "../components/resources/pages/Level2Term2/WPIPage";
import FEEE2_2 from "../components/resources/pages/Level2Term2/FEEEPage";

/* Syllabus */
import SyllabusPage from "../pages/SyllabusPage";

/* Accessories */
import AccessoriesPage from "../pages/AccessoriesPage";

/* Archive */
import ArchivePage from "../pages/Archives.js";
import Covid19 from "../pages/CovidPage";
import StudentsInfo from "../components/archive/pages/StudentsInfo";
import LabRoutine from "../components/archive/pages/LabRoutine";
import TermExamRoutine from "../components/archive/pages/ExamRoutine";

/* Lab Routine */
import Level1Term2Lab from "../components/archive/customs/Lab/L1T2Lab";
import Level2Term1Lab from "../components/archive/customs/Lab/L2T1Lab";

/* Exam Routine */
import Level1Term2Exam from "../components/archive/customs/Exam/L1T2Exam";
import Level2Term1Exam from "../components/archive/customs/Exam/L2T1Exam";

/* Developer */
import DeveloperPage from "../pages/DeveloperPage";

const RouteHandle = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />

        {/********* Resourece Section Starts Here ************/}
        <Route exact path="/resource" component={ResourcePage} />

        {/* Level 1 Term 1 */}
        <Route exact path="/level1-term1" component={Level1Term1Page} />
        <Route exact path="/bce1-1" component={BCE1_1} />
        <Route exact path="/physics1-1" component={Physics1_1} />
        <Route exact path="/chemistry1-1" component={Chemistry1_1} />
        <Route exact path="/math1-1" component={Math1_1} />
        <Route exact path="/ntf1-1" component={Ntf1_1} />

        {/* Level 1 Term 2 */}
        <Route exact path="/level1-term2" component={Level1Term2Page} />
        <Route exact path="/physics1-2" component={Physics1_2} />
        <Route exact path="/chemistry1-2" component={Chemistry1_2} />
        <Route exact path="/math1-2" component={Math1_2} />
        <Route exact path="/pse1-2" component={PSE1_2} />
        <Route exact path="/cp1-2" component={CP1_2} />
        <Route exact path="/em1-2" component={EM1_2} />

        {/* Level 2 Term 1 */}
        <Route exact path="/level2-term1" component={Level2Term1Page} />
        <Route exact path="/stat2-1" component={Statistics2_1} />
        <Route exact path="/fyt2-1" component={FYT2_1} />
        <Route exact path="/wpp2-1" component={WPP2_1} />
        <Route exact path="/ym2-1" component={YM2_1} />
        <Route exact path="/mmtf2-1" component={MMTF2_1} />
        <Route exact path="/fme2-1" component={FME2_1} />

        {/* Level 2 Term 2 */}
        <Route exact path="/level2-term2" component={Level2Term2Page} />
        <Route exact path="/tp2-2" component={TP2_2} />
        <Route exact path="/am2-2" component={AMI2_2} />
        <Route exact path="/fmkt2-2" component={FMkt2_2} />
        <Route exact path="/wp2-2" component={WPI2_2} />
        <Route exact path="/feee2-2" component={FEEE2_2} />
        <Route exact path="/wv2-2" component={Weaving2_2} />

        {/********* Syllabus Section Starts Here ************/}
        <Route exact path="/syllabus" component={SyllabusPage} />

        {/********* Accessories Section Starts Here ************/}
        <Route exact path="/accessories" component={AccessoriesPage} />

        {/********* Archive Section Starts Here ************/}
        <Route exact path="/archives" component={ArchivePage} />
        <Route exact path="/studentsinfo" component={StudentsInfo} />
        <Route exact path="/covid19updates" component={Covid19} />
        <Route exact path="/labroutine" component={LabRoutine} />
        <Route exact path="/termexamroutine" component={TermExamRoutine} />

        {/********* Lab Section Starts Here ************/}
        <Route exact path="/l1t2lab" component={Level1Term2Lab} />
        <Route exact path="/l2t1lab" component={Level2Term1Lab} />

        {/********* Exam Section Starts Here ************/}
        <Route exact path="/l1t2exam" component={Level1Term2Exam} />
        <Route exact path="/l2t1exam" component={Level2Term1Exam} />

        {/********* Developer Section Starts Here ************/}
        <Route exact path="/developer" component={DeveloperPage} />

        {/********* Error Section Starts Here ************/}
        <Route exact path="/404" component={ErrorScreen1} />
        <Route exact path="/501" component={ErrorScreen2} />
        <Route exact path="/503" component={ErrorScreen4} />
        <Route component={ErrorScreen3} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default RouteHandle;
