import React, { useEffect } from "react";
import Signup from '././components/Register&Login/Signup';
import Signin from '././components/Register&Login/Signin';
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from '././components/Register&Login/Course';
import Erp from './components/Register&Login/Erp';
import Registration from './AdminComponent/HodMainDetails';
import Registrationn from "./AdminComponent/StudentMainDetails"
import { useNavigate, useLocation } from "react-router-dom";

/*--------------------STUDENT Routes----------------------------------------------*/
import StudentDashboardHome from './components/Register&Login/StudentDashboardHome';
import StudentMainDetails from './AdminComponent/StudentMainDetails';
import StudentHome from './components/Register&Login/StdentHome';
import StudentDashboard from './AdminComponent/StudentDashboard';
import StudentWaiting from './components/Register&Login/StudentWaiting';
import StudentVerify from './AdminComponent/StudentVerify';
import Personal from './AdminComponent/Personal';
import OnlyHeader from './AdminComponent/OnlyHeader';
import Success from './AdminComponent/Payment/Success';
import Failure from './AdminComponent/Payment/Failure';
import PaymentPage from './AdminComponent/Payment/PaymentPage';
import PaymentSuccess from './components/Register&Login/PaymentSuccess';
import StudentAllDetail from './components/Register&Login/StudentAllDetail';

/*-------------------- Website Main Page Routes----------------------------------------------*/
import MainPage from './HomePage/MainPage';
import Terms from './HomePage/Terms';
import Policypage from "./HomePage/Policypage"
import Refundpage from "./HomePage/Refundpage"
import Commingsoon from './HomePage/Comingsoonpage';
import Cards from './components/Register&Login/Erp';

/*--------------------HOD Routes----------------------------------------------*/
import HodDashboard from './AdminComponent/HodDashboard';
import HodMainDetails from './AdminComponent/HodMainDetails';
import HodSignUp from './AdminComponent/HodSignup';
import HodSignin from './AdminComponent/HodSignin';
import Dashboard from './AdminComponent/HodMainDas';
import Pending from './AdminComponent/SudentPending';
import VerifyDetailed from './AdminComponent/VerifyDetailed';

/*--------------------Admin Routes----------------------------------------------*/
import AdminLogin from './Main_Admin/Masters/Registered_Login/Admin_login';
import AdminDashboard from './Main_Admin/Masters/Admin_Dashboard/AdminDashboard';
import EnrollementG from './Main_Admin/Masters/EnrollmentG';
import Branchmapping from "./Main_Admin/Masters/Branchmapping"
import Centermaster from "./Main_Admin/Masters/Centermaster"
import SpecializationMaster from './Main_Admin/Masters/SpecializationMaster';
import SpecializationSubjectMapping from "./Main_Admin/Masters/SpecializationSubjectMapping"
import SpecializationTypeMaster from "./Main_Admin/Masters/SpecializationTypeMaster"
import SubjectHeaderInsert from "./Main_Admin/Masters/SubjectHeaderInsert"
import UploadSubjectMasterFromExcelData from "./Main_Admin/Masters/UploadSubjectMasterFromExcelData"
import CreateCollege from "./Main_Admin/Masters/CreateCollege"
import AdmissionSessionMaster from "./Main_Admin/Masters/AdmissionSessionMaster"
import FacultyMaster from "./Main_Admin/Masters/FacultyMaster"
import DepartmentMaster from "./Main_Admin/Masters/DepartmentMaster"
import CourseType from "./Main_Admin/Masters/CourseType"
import CourseMaster from "./Main_Admin/Masters/CourseMaster"
import BranchMaster from "./Main_Admin/Masters/BranchMaster"
import SubBranchMaster from "./Main_Admin/Masters/SubBranchMaster"
import CourseGroupMaster from "./Main_Admin/Masters/CourseGroupMaster"
import AdmissionOpen from "./Main_Admin/Masters/AdmissionOpen"
import ReservationMaster from "./Main_Admin/Masters/ReservationMaster"
import CreateCounsellingRound from "./Main_Admin/Masters/CreateCounsellingRound"
import LastExamSubjectGroup from "./Main_Admin/Masters/LastExamSubjectGroup"
import GradePointMaster from "./Main_Admin/Masters/GradePointMaster"
import SubjectMasterExcelDownload from "./Main_Admin/Masters/SubjectMasterExcelDownload"
import SubjectMasterPaperWise from "./Main_Admin/Masters/SubjectMasterPaperWise"
import SubGroupMaster from "./Main_Admin/Masters/SubGroupMaster"
import TransferSubject from "./Main_Admin/Masters/TransferSubject"
import TransferSubjectGroup from "./Main_Admin/Masters/TransferSubjectGroup"
import ProgramScheduling from "./Main_Admin/Masters/ProgramScheduling"
import ErpDashboard from './Main_Admin/Masters/ErpDashboard';
import Search from './Main_Admin/Masters/Search';


function App() {

  const navigate = useNavigate();
  const location = useLocation();
  function isAuthenticated() {
    const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
    const hodData = JSON.parse(sessionStorage.getItem("currentUser"));
    if (userData || hodData) {
      return true
    }
    return false;
    // const accessToken = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("access-token="));
    // return accessToken ? true : false;
  }

  function PrivateRoute({ element, ...rest }) {
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/erp`} />;
    }

  }
  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      sessionStorage.clear();
      navigate('/studentlogin');
    }, 20 * 60 * 1000);
    return () => clearTimeout(logoutTimer);
  }, []);

  useEffect(() => {
    console.log("Location changed:", location.pathname);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/studentregister" element={<Signup />} />
        <Route path="/studentlogin" element={<Signin />} />
        <Route path="/selectCourse" element={<PrivateRoute element={<Course />} />} />
        <Route path="/studentalldetail" element={<StudentAllDetail />} />
        <Route path='/onlyheader' element={<PrivateRoute element={<OnlyHeader />} />} />
        <Route path='/studentDashboard' element={<PrivateRoute element={<StudentDashboard />} />} />
        <Route path='/studentWaiting' element={<StudentWaiting />} />
        <Route path='/studentDetail' element={<StudentMainDetails />} />
        <Route path='/studentHome' element={<StudentHome />} />
        <Route path='/studentpersonal' element={<PrivateRoute element={<Personal />} />} />
        <Route path='/studentpending' element={<Pending />} />
        <Route path='/studentverify' element={<StudentVerify />} />
        <Route path='/student/dashboard/home' element={<StudentDashboardHome />} />
        <Route path='/studentUpdateDetail' element={<Registrationn />} />

        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path='/PaymentPage' element={<PrivateRoute element={<PaymentPage />} />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failure' element={<Failure />} />
        <Route path='/verifyDetailed' element={<PrivateRoute element={<VerifyDetailed />} />} />

     
        <Route path='/' element={<MainPage />} />
        <Route path='/erp' element={<Erp />} />
        <Route path="/commingsoon" element={<Commingsoon />} />
        <Route path="/termspage" element={<Terms />} />
        <Route path="/policypage" element={<Policypage />} />
        <Route path="/refundpage" element={<Refundpage />} />



        <Route path='/cards' element={<Cards />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/studentverifieddetailed/:id" element={<PrivateRoute element={<HodMainDetails />} />} />
        <Route path='/hodDashboard' element={<PrivateRoute element={<HodDashboard />} />} />
        <Route path='/hodlogin' element={< HodSignin />} />
        <Route path='/hodDetail' element={<PrivateRoute element={<HodMainDetails />} />} />
        <Route path='/hodregister' element={<HodSignUp />} />

        {/*------------------------Admin Routes-----------------------------------------*/}

        <Route path='/adminlogin' element={< AdminLogin />} />
        <Route path='/admindashboard' element={< AdminDashboard />} />
        <Route path="/erpdasboard" element={<ErpDashboard />} />
        <Route path="/enrollment" element={<EnrollementG />} />
        <Route path="/search-result/:session/:courseType/:course/:branch/:college" element={<Search />} />
        <Route path="/brancmapping-session" element={<Branchmapping />} />
        <Route path="/center-master" element={<Centermaster />} />
        <Route path="/specialization-master" element={<SpecializationMaster />} />
        <Route path="/specialization-subject-mapping" element={<SpecializationSubjectMapping />} />
        <Route path="/sprcialization-type-master" element={<SpecializationTypeMaster />} />
        <Route path="/subject-header-insert" element={<SubjectHeaderInsert />} />
        <Route path="/upload-subject-master-from-excel-data" element={<UploadSubjectMasterFromExcelData />} />
        <Route path="/create-collage" element={<CreateCollege />} />
        <Route path="/admission-session-master" element={<AdmissionSessionMaster />} />
        <Route path="/faculty-master" element={<FacultyMaster />} />
        <Route path="/department-master" element={<DepartmentMaster />} />
        <Route path="/course-type" element={<CourseType />} />
        <Route path="/course-master" element={<CourseMaster />} />
        <Route path="/branch-master" element={<BranchMaster />} />
        <Route path="/sub-branch-master" element={<SubBranchMaster />} />
        <Route path="/course-group-master" element={<CourseGroupMaster />} />
        <Route path="/admission-open" element={<AdmissionOpen />} />
        <Route path="/reservation-master" element={<ReservationMaster />} />
        <Route path="/create-counselling-round" element={<CreateCounsellingRound />} />
        <Route path="/last-exam-sunject-group" element={<LastExamSubjectGroup />} />
        <Route path="/grade-point-master" element={<GradePointMaster />} />
        <Route path="/subject-master-excel-download" element={<SubjectMasterExcelDownload />} />
        <Route path="/subject-master-paper-wise" element={<SubjectMasterPaperWise />} />
        <Route path="/subject-group-master" element={<SubGroupMaster />} />
        <Route path="/transfer-subject" element={<TransferSubject />} />
        <Route path="/transfer-subject-group" element={<TransferSubjectGroup />} />
        <Route path="/program-scheduling" element={<ProgramScheduling />} />
      </Routes >
    </>

  )
}

export default App