import React from 'react';
import Signup from '././components/Register&Login/Signup';
import Signin from '././components/Register&Login/Signin';
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from '././components/Register&Login/Course';
import Login from "./AdminComponent/Login"
import Register from './AdminComponent/Register';
import Header from './components/Register&Login/Header';
import Erp from './components/Register&Login/Erp';
import Registration from './AdminComponent/HodMainDetails';
import SuccesfullMsg from './components/Register&Login/SuccesfullMsg';
import Enrollement from './AdminComponent/Enrollement';
import Registrationn from "./AdminComponent/StudentMainDetails"
import Personal from './AdminComponent/Personal';
import Cards from './components/Register&Login/Erp';
import Pending from './AdminComponent/SudentPending';
import StudentMainDetails from './AdminComponent/StudentMainDetails';
import StudentHome from './components/Register&Login/StdentHome';
import StudentDashboard from './AdminComponent/StudentDashboard';
// import HodDashboard from './AdminComponent/HodDashboard';
import HodMainDetails from './AdminComponent/HodMainDetails';
import StudentWaiting from './components/Register&Login/StudentWaiting';
import VerifyDetailed from './AdminComponent/VerifyDetailed';
import Verify from './AdminComponent/Verify';
import OnlyHeader from './AdminComponent/OnlyHeader';
import Payment from './components/Register&Login/PaymentGateway';
import PaymentPage from './AdminComponent/PaymentPage';
import StudentAllDetail from './components/Register&Login/StudentAllDetail';
import MainPage from './HomePage/MainPage';
import Terms from './HomePage/Terms';
import Policypage from './HomePage/Policypage';
import Refundpage from './HomePage/Refundpage';
import Commingsoon from './HomePage/Comingsoonpage';
import HodDashboard from './AdminComponent/HodDashboard';
import Branchmapping from './AdminComponent/Masters/Branchmapping';
import Centermaster from './AdminComponent/Masters/Centermaster';
import SpecializationMaster from './AdminComponent/Masters/SpecializationMaster';
import  SpecializationSubjectMapping from "./AdminComponent/Masters/SpecializationSubjectMapping"
import SpecializationTypeMaster from "./AdminComponent/Masters/SpecializationTypeMaster"
import SubjectHeaderInsert from "./AdminComponent/Masters/SubjectHeaderInsert"
import UploadSubjectMasterFromExcelData from "./AdminComponent/Masters/UploadSubjectMasterFromExcelData"
import CreateCollege from "./AdminComponent/Masters/CreateCollege"
import AdmissionSessionMaster from "./AdminComponent/Masters/AdmissionSessionMaster"
import FacultyMaster from "./AdminComponent/Masters/FacultyMaster"
import DepartmentMaster from "./AdminComponent/Masters/DepartmentMaster"
import CourseType from "./AdminComponent/Masters/CourseType"
import CourseMaster from "./AdminComponent/Masters/CourseMaster"
import BranchMaster from "./AdminComponent/Masters/BranchMaster"
import SubBranchMaster from "./AdminComponent/Masters/SubBranchMaster"
import CourseGroupMaster from "./AdminComponent/Masters/CourseGroupMaster"
 import AdmissionOpen from "./AdminComponent/Masters/AdmissionOpen"
import ReservationMaster from "./AdminComponent/Masters/ReservationMaster"
import CreateCounsellingRound from "./AdminComponent/Masters/CreateCounsellingRound"
 import  LastExamSubjectGroup from "./AdminComponent/Masters/LastExamSubjectGroup"
 import GradePointMaster from "./AdminComponent/Masters/GradePointMaster"
 import SubjectMasterExcelDownload from "./AdminComponent/Masters/SubjectMasterExcelDownload"
 import SubjectMasterPaperWise from "./AdminComponent/Masters/SubjectMasterPaperWise"
import SubGroupMaster from "./AdminComponent/Masters/SubGroupMaster"
import TransferSubject from "./AdminComponent/Masters/TransferSubject"
 import TransferSubjectGroup from "./AdminComponent/Masters/TransferSubjectGroup"
 import  ProgramScheduling from "./AdminComponent/Masters/ProgramScheduling"
import ErpDashboard from './AdminComponent/Masters/ErpDashboard';
import EnrollmentG from './AdminComponent/Masters/EnrollmentG';
import Search from './AdminComponent/Masters/Search';


function App() {

  function isAuthenticated() {
    const userData = JSON.parse(sessionStorage.getItem("currentUser"));
    if (userData) {
      return true
    }
    return false;
  }

  function PrivateRoute({ element, ...rest }) {
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/studentlogin`} />;
    }
  }
  return (
    <>
      <Routes>

        {/* ====================  HodDashbords(Sidebar) Routers =========================== */}
       
      
        <Route path="/brancmapping-session" element={<Branchmapping/>} />
        <Route path="/search-result" element={<Search/>} />
        <Route path="/enrollment" element={<EnrollmentG/>} />
        <Route path="/center-master" element={<Centermaster/>} />
        <Route path="/specialization-master" element={<SpecializationMaster/>} />
        <Route path="/specialization-subject-mapping" element={<SpecializationSubjectMapping/>} />
        <Route path="/sprcialization-type-master" element={<SpecializationTypeMaster/>} />
        <Route path="/subject-header-insert" element={<SubjectHeaderInsert/>} />
        <Route path="/upload-subject-master-from-excel-data" element={<UploadSubjectMasterFromExcelData/>} />
        <Route path="/create-collage" element={<CreateCollege/>} />
        <Route path="/admission-session-master" element={<AdmissionSessionMaster/>} />
        <Route path="/faculty-master" element={<FacultyMaster/>} /> 
        <Route path="/department-master" element={<DepartmentMaster/>} /> 
        <Route path="/course-type" element={<CourseType/>} /> 
        <Route path="/course-master" element={<CourseMaster/>} />
        <Route path="/branch-master" element={<BranchMaster/>} />  
        <Route path="/sub-branch-master" element={<SubBranchMaster/>} /> 
        <Route path="/course-group-master" element={<CourseGroupMaster/>} /> 
        <Route path="/admission-open" element={<AdmissionOpen/>} /> 
        <Route path="/reservation-master" element={<ReservationMaster/>} />
        <Route path="/create-counselling-round" element={<CreateCounsellingRound />} />
        <Route path="/last-exam-sunject-group" element={<LastExamSubjectGroup/>} />
        <Route path="/grade-point-master" element={<GradePointMaster/>} />
        <Route path="/subject-master-excel-download" element={<SubjectMasterExcelDownload/>} />
        <Route path="/subject-master-paper-wise" element={<SubjectMasterPaperWise/>} />
        <Route path="/subject-group-master" element={<SubGroupMaster/>} />
        <Route path="/transfer-subject" element={<TransferSubject/>} />
        <Route path="/transfer-subject-group" element={<TransferSubjectGroup/>} />
        <Route path="/program-scheduling" element={<ProgramScheduling/>} />
      
        {/* ==================================================================================== */}
      <Route path="/erpdasboard" element={<ErpDashboard/>} />
      {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
      <Route path="/commingsoon" element={<Commingsoon/>} />
      <Route path="/termspage" element={<Terms />} />
      <Route path="/policypage" element={<Policypage/>} />
      <Route path="/refundpage" element={<Refundpage/>} />
        <Route path="/studentalldetail" element={<StudentAllDetail />} />
        <Route path="/studentregister" element={<Signup />} />
        <Route path="/studentlogin" element={<Signin />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/onlyheader' element={<PrivateRoute element={<OnlyHeader />} />} />
        <Route path='/studentDashboard' element={<StudentDashboard />} />
        <Route path='/studentWaiting' element={<StudentWaiting />} />
        <Route path='/studentpersonal' element={<Personal />} />
        <Route path='/studentDetail' element={< StudentMainDetails />} />
        <Route path='/studentHome' element={< StudentHome />} />
        <Route path='/studentpending' element={< Pending />} />
        <Route path='/studentverify' element={<Verify />} />
        <Route path='/PaymentPage' element={<PaymentPage />} />

        <Route
          path="/selectCourse"
          element={<PrivateRoute element={<Course />} />}
        />

        <Route path='/verifyDetailed' element={<VerifyDetailed />} />
        <Route path='/hodDashboard' element={<HodDashboard />} />
        <Route path='/hodDetail' element={<HodMainDetails />} />
        <Route path='/studentUpdateDetail' element={<Registrationn />} />
        <Route path='/enroll' element={<Enrollement />} />
        <Route path='/erp' element={<Erp />} />
        <Route path='/' element={<MainPage />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/adminlogin' element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/studentverifieddetailed/:id" element={<VerifyDetailed />} />
        <Route path='/adminregister' element={<Register />} />
        <Route path="/success" element={<SuccesfullMsg />} /> 
      </Routes >
    </>
  )
}

export default App