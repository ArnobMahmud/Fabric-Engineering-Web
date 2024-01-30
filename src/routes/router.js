import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Includes */
import Navbar from "../components/includes/NavigationBar.js";
import HomePage from "../pages/HomePage.js";
import Footer from "../components/includes/Footer.js";

/* Error Screen */
import ErrorScreen1 from "../components/screens/AnnounceScreenIII.js";
import ErrorScreen2 from "../components/screens/InformationScreen.js";
import ErrorScreen3 from "../components/screens/404.js";
import ErrorScreen4 from "../components/screens/NoRoutine.js";

/* Resource */
import ResourcePage from "../pages/ResourcePage.js";
import Level1Term1Page from "../components/resources/pages/screen/Level1Term1Page.js";
import Level1Term2Page from "../components/resources/pages/screen/Level1Term2Page.js";
import Level2Term1Page from "../components/resources/pages/screen/Level2Term1Page.js";
import Level2Term2Page from "../components/resources/pages/screen/Level2Term2Page.js";
import Level3Term1Page from "../components/resources/pages/screen/Level3Term1Page.js";
import Level3Term2Page from "../components/resources/pages/screen/Level3Term2Page.js";
import Level4Term1Page from "../components/resources/pages/screen/Level4Term1Page.js";
import Level4Term2Page from "../components/resources/pages/screen/Level4Term2Page.js";

/* Level 1 Term 1 */
import BCE from "../components/resources/pages/Level1Term1/BCEpage.js";
import ChemistryI from "../components/resources/pages/Level1Term1/ChemistryPage.js";
import MathI from "../components/resources/pages/Level1Term1/MathPage.js";
import Ntf from "../components/resources/pages/Level1Term1/NtfPage.js";
import PhysicsI from "../components/resources/pages/Level1Term1/PhysicsPage.js";

/* Level 1 Term 2 */
import EM from "../components/resources/pages/Level1Term2/EngineeringMaterialsPage.js";
import PhysicsII from "../components/resources/pages/Level1Term2/PhysicsPage.js";
import ChemistryII from "../components/resources/pages/Level1Term2/ChemistryPage.js";
import MathII from "../components/resources/pages/Level1Term2/MathPage.js";
import CP from "../components/resources/pages/Level1Term2/ComputerProgrammingPage.js";
import PSE from "../components/resources/pages/Level1Term2/PolymerSciencePage.js";

/* Level 2 Term 1 */
import Statistics from "../components/resources/pages/Level2Term1/StatisticsPage.js";
import FYT from "../components/resources/pages/Level2Term1/FYTPage.js";
import YM from "../components/resources/pages/Level2Term1/YMIPage.js";
import MMTF from "../components/resources/pages/Level2Term1/MMTFPage.js";
import WPP from "../components/resources/pages/Level2Term1/WPPPage.js";
import FME from "../components/resources/pages/Level2Term1/FMEPage.js";

/* Level 2 Term 2 */
import TP from "../components/resources/pages/Level2Term2/TPPage.js";
import WvgI from "../components/resources/pages/Level2Term2/WvgIPage.js";
import AMI from "../components/resources/pages/Level2Term2/AMIPage.js";
import FMkt from "../components/resources/pages/Level2Term2/FMktPage.js";
import WPI from "../components/resources/pages/Level2Term2/WPIPage.js";
import FEEE from "../components/resources/pages/Level2Term2/FEEEPage.js";

/* Level 3 Term 1 */
import AMII from "../components/resources/pages/Level3Term1/AMIIPage.js";
import Econ from "../components/resources/pages/Level3Term1/EconPage.js";
import IM from "../components/resources/pages/Level3Term1/IMPage.js";
import KnitI from "../components/resources/pages/Level3Term1/KnitIPage.js";
import WPII from "../components/resources/pages/Level3Term1/WPIIPage.js";
import YMII from "../components/resources/pages/Level3Term1/YMIIPage.js";

/* Level 3 Term 2 */
import ACE from "../components/resources/pages/Level3Term2/ACEPage.js";
import ACFM from "../components/resources/pages/Level3Term2/ACFMPage.js";
import ACM from "../components/resources/pages/Level3Term2/ACMPage.js";
import FSD from "../components/resources/pages/Level3Term2/FSDPage.js";
import WvgII from "../components/resources/pages/Level3Term2/WvgIIPage.js";

/* Level 4 Term 1 */
import FTQC from "../components/resources/pages/Level4Term1/FTQCPage.js";
import TAM from "../components/resources/pages/Level4Term1/TAMPage.js";
import SOC from "../components/resources/pages/Level4Term1/SOCPage.js";
import KnitII from "../components/resources/pages/Level4Term1/KnitIIPage.js";
import SFP from "../components/resources/pages/Level4Term1/SFPPage.js";

/* Level 4 Term 2 */
import TT from "../components/resources/pages/Level4Term2/TTPage.js";
import PPC from "../components/resources/pages/Level4Term2/PPCPage.js";
import NWvn from "../components/resources/pages/Level4Term2/NWvnPage.js";
import ES from "../components/resources/pages/Level4Term2/ESPage.js";
import FEPW from "../components/resources/pages/Level4Term2/FEPWPage.js";

/* Syllabus */
import SyllabusPage from "../pages/SyllabusPage.js";

/* Accessories */
import AccessoriesPage from "../pages/AccessoriesPage.js";

/* Archive */
import ArchivePage from "../pages/Archives.js";
import Covid19 from "../pages/CovidPage.js";
import StudentsInfo from "../components/archive/pages/StudentsInfo.js";
import LabRoutine from "../components/archive/pages/LabRoutine.js";
import TermExamRoutine from "../components/archive/pages/ExamRoutine.js";

/* Lab Routine */
import Level1Term2Lab from "../components/archive/customs/Lab/Level1Term2Lab.js";
import Level2Term1Lab from "../components/archive/customs/Lab/Level2Term1Lab.js";
import Level2Term2Lab from "../components/archive/customs/Lab/Level2Term2Lab.js";
import Level3Term1Lab from "../components/archive/customs/Lab/Level3Term1Lab.js";
import Level3Term2Lab from "../components/archive/customs/Lab/Level3Term2Lab.js";
import Level4Term1Lab from "../components/archive/customs/Lab/Level4Term1Lab.js";
import Level4Term2Lab from "../components/archive/customs/Lab/Level4Term2Lab.js";

/* Exam Routine */
import Level1Term2Exam from "../components/archive/customs/Exam/Level1Term2Exam.js";
import Level2Term1Exam from "../components/archive/customs/Exam/Level2Term1Exam.js";
import Level2Term2Exam from "../components/archive/customs/Exam/Level2Term2Exam.js";
import Level3Term1Exam from "../components/archive/customs/Exam/Level3Term1Exam.js";
import Level3Term2Exam from "../components/archive/customs/Exam/Level3Term2Exam.js";
import Level4Term1Exam from "../components/archive/customs/Exam/Level4Term1Exam.js";
import Level4Term2Exam from "../components/archive/customs/Exam/Level4Term2Exam.js";

/* Developer */
import DeveloperPage from "../pages/DeveloperPage.js";

const RouteHandle = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/********* Resourece Section Starts Here ************/}
        <Route exact path="/resource" element={<ResourcePage />} />
        {/* Level 1 Term 1 */}
        <Route exact path="/level1-term1" element={<Level1Term1Page />} />
        <Route exact path="/bce1-1" element={<BCE />} />
        <Route exact path="/physics1-1" element={<PhysicsI />} />
        <Route exact path="/chemistry1-1" element={<ChemistryI />} />
        <Route exact path="/math1-1" element={<MathI />} />
        <Route exact path="/ntf1-1" element={<Ntf />} />
        {/* Level 1 Term 2 */}
        <Route exact path="/level1-term2" element={<Level1Term2Page />} />
        <Route exact path="/physics1-2" element={<PhysicsII />} />
        <Route exact path="/chemistry1-2" element={<ChemistryII />} />
        <Route exact path="/math1-2" element={<MathII />} />
        <Route exact path="/pse1-2" element={<PSE />} />
        <Route exact path="/cp1-2" element={<CP />} />
        <Route exact path="/em1-2" element={<EM />} />
        {/* Level 2 Term 1 */}
        <Route exact path="/level2-term1" element={<Level2Term1Page />} />
        <Route exact path="/stat2-1" element={<Statistics />} />
        <Route exact path="/fyt2-1" element={<FYT />} />
        <Route exact path="/wpp2-1" element={<WPP />} />
        <Route exact path="/ym2-1" element={<YM />} />
        <Route exact path="/mmtf2-1" element={<MMTF />} />
        <Route exact path="/fme2-1" element={<FME />} />
        {/* Level 2 Term 2 */}
        <Route exact path="/level2-term2" element={<Level2Term2Page />} />
        <Route exact path="/tp2-2" element={<TP />} />
        <Route exact path="/am2-2" element={<AMI />} />
        <Route exact path="/fmkt2-2" element={<FMkt />} />
        <Route exact path="/wp2-2" element={<WPI />} />
        <Route exact path="/feee2-2" element={<FEEE />} />
        <Route exact path="/wvg2-2" element={<WvgI />} />
        {/* Level 3 Term 1 */}
        <Route exact path="/level3-term1" element={<Level3Term1Page />} />
        <Route exact path="/am3-1" element={<AMII />} />
        <Route exact path="/wp3-1" element={<WPII />} />
        <Route exact path="/eco3-1" element={<Econ />} />
        <Route exact path="/knit3-1" element={<KnitI />} />
        <Route exact path="/im3-1" element={<IM />} />
        <Route exact path="/ym3-1" element={<YMII />} />
        {/* Level 3 Term 2 */}
        <Route exact path="/level3-term2" element={<Level3Term2Page />} />
        <Route exact path="/ace3-2" element={<ACE />} />
        <Route exact path="/acfm3-2" element={<ACFM />} />
        <Route exact path="/acm3-2" element={<ACM />} />
        <Route exact path="/fsd3-2" element={<FSD />} />
        <Route exact path="/wvg3-2" element={<WvgII />} />
        {/* Level 4 Term 1 */}
        <Route exact path="/level4-term1" element={<Level4Term1Page />} />
        <Route exact path="/soc4-1" element={<SOC />} />
        <Route exact path="/ftqc4-1" element={<FTQC />} />
        <Route exact path="/knit4-1" element={<KnitII />} />
        <Route exact path="/sfp4-1" element={<SFP />} />
        <Route exact path="/tam4-1" element={<TAM />} />
        {/* Level 4 Term 2 */}
        <Route exact path="/level4-term2" element={<Level4Term2Page />} />
        <Route exact path="/nwvn4-2" element={<NWvn />} />
        <Route exact path="/tt4-2" element={<TT />} />
        <Route exact path="/es4-2" element={<ES />} />
        <Route exact path="/ppc4-2" element={<PPC />} />
        <Route exact path="/fepw4-2" element={<FEPW />} />

        {/********* Syllabus Section Starts Here ************/}
        <Route exact path="/syllabus" element={<SyllabusPage />} />
        {/********* Accessories Section Starts Here ************/}
        <Route exact path="/accessories" element={<AccessoriesPage />} />
        {/********* Archive Section Starts Here ************/}
        <Route exact path="/archives" element={<ArchivePage />} />
        <Route exact path="/studentsinfo" element={<StudentsInfo />} />
        <Route exact path="/covid19updates" element={<Covid19 />} />
        <Route exact path="/labroutine" element={<LabRoutine />} />
        <Route exact path="/termexamroutine" element={<TermExamRoutine />} />
        {/********* Lab Section Starts Here ************/}
        <Route exact path="/l1t2lab" element={<Level1Term2Lab />} />
        <Route exact path="/l2t1lab" element={<Level2Term1Lab />} />
        <Route exact path="/l2t2lab" element={<Level2Term2Lab />} />
        <Route exact path="/l3t1lab" element={<Level3Term1Lab />} />
        <Route exact path="/l3t2lab" element={<Level3Term2Lab />} />
        <Route exact path="/l4t1lab" element={<Level4Term1Lab />} />
        <Route exact path="/l4t2lab" element={<Level4Term2Lab />} />
        {/********* Exam Section Starts Here ************/}
        <Route exact path="/l1t2exam" element={<Level1Term2Exam />} />
        <Route exact path="/l2t1exam" element={<Level2Term1Exam />} />
        <Route exact path="/l2t2exam" element={<Level2Term2Exam />} />
        <Route exact path="/l3t1exam" element={<Level3Term1Exam />} />
        <Route exact path="/l3t2exam" element={<Level3Term2Exam />} />
        <Route exact path="/l4t1exam" element={<Level4Term1Exam />} />
        <Route exact path="/l4t2exam" element={<Level4Term2Exam />} />
        {/********** Login & Signup Starts Here ***********/}
        {/* <Route exact path="/login" component={Login} /> */}
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
