import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import posImage from "../../../AdminComponent/12.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hidden from "@mui/material/Hidden";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

import { RiPagesFill } from "react-icons/ri";
const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});
function AdminDashboard() {
  const navigate = useNavigate();

 

  const handleOptionSelected = (event, value) => {
    if (value && value.link) {
      navigate(value.link);
    }
  };
  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
      });
    }
  }, []);
  return (
    <>
      {/* ===============Navbar================================= */}

      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <AppBar
            position="fixed"
            sx={{
              width: "100%",
              top: 0,
              zIndex: (theme) => theme.zIndex.drawer + 1,
              backgroundImage: "linear-gradient(to right, #004e92, #990033)",
            }}
          >
            <Toolbar>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  style={{ height: "50px", width: "50px", marginRight: "20px" }}
                  src={posImage}
                  alt=""
                />
                <Typography
                  className="heading"
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textShadow: "2px 2px 10px cadetblue",
                    marginLeft: "30px",
                  }}
                >
                  Sri Satya Sai University Of Technology And Medical Sciences
                  (SSSUTMS)
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>
      <>
        <style>
          {`
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&family=Tinos&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Tinos', serif;
}
.sidebar {
  margin-Top:60px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 260px;
  background: #000428;
  background: -webkit-linear-gradient(to right, #004e92, #000428);
  background: linear-gradient(to right, #004e92, #990033);
  z-index: 100;
  transition: all 0.5s ease;
}
.sidebar.close {
  width: 78px;
}
.sidebar .logo-details {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i {
  font-size: 30px;
  color: #fff;
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
}
.sidebar .logo-details .logo_name {
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  transition: 0.3s ease;
  transition-delay: 0.1s;
}
.sidebar.close .logo-details .logo_name {
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links {
  height: 100%;
  padding: 0 0 150px 0;
  overflow: auto;
}
.sidebar.close .nav-links {
  overflow: visible;
}
.sidebar .nav-links::-webkit-scrollbar {
  display: none;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li:hover {
  background: #1d1b31;
}
.sidebar .nav-links li .icon-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar.close .nav-links li .icon-link {
  display: block;
}
.sidebar .nav-links li i {
  height: 50px;
  min-width: 78px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.sidebar .nav-links li.showMenu i.arrow {
  transform: rotate(-180deg);
}
.sidebar.close .nav-links i.arrow {
  display: none;
}
.sidebar .nav-links li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sidebar .nav-links li a .link_name {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.4s ease;
}
.sidebar.close .nav-links li a .link_name {
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li .sub-menu {
  padding: 6px 6px 14px 80px;
  margin-top: -10px;
  background: #1d1b31;
  display: none;
}
.sidebar .nav-links li.showMenu .sub-menu {
  display: block;
}
.sidebar .nav-links li .sub-menu a {
  color: #fff;
  font-size: 15px;
  padding: 5px 0;
  white-space: nowrap;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.sidebar .nav-links li .sub-menu a:hover {
  opacity: 1;
}
.sidebar.close .nav-links li .sub-menu {
  position: absolute;
  left: 100%;
  top: -10px;
  margin-top: 0;
  padding: 10px 20px;
  border-radius: 0 6px 6px 0;
  opacity: 0;
  display: block;
  pointer-events: none;
  transition: 0s;
}
.sidebar.close .nav-links li:hover .sub-menu {
  top: 0;
  opacity: 1;
  pointer-events: auto;
  transition: all 0.4s ease;
}
.sidebar .nav-links li .sub-menu .link_name {
  display: none;
}
.sidebar.close .nav-links li .sub-menu .link_name {
  font-size: 18px;
  opacity: 1;
  display: block;
}
.sidebar .nav-links li .sub-menu.blank {
  opacity: 1;
  pointer-events: auto;
  padding: 3px 20px 6px 16px;
  opacity: 0;
  pointer-events: none;
}
.sidebar .nav-links li:hover .sub-menu.blank {
  top: 50%;
  transform: translateY(-50%);
}
.sidebar .profile-details {
  position: fixed;
  bottom: 0;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1b31;
  padding: 12px 0;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details {
  background: none;
}
.sidebar.close .profile-details {
  width: 78px;
}
.sidebar .profile-details .profile-content {
  display: flex;
  align-items: center;
}
.sidebar .profile-details img {
  height: 52px;
  width: 52px;
  object-fit: cover;
  border-radius: 16px;
  margin: 0 14px 0 12px;
  background: #1d1b31;
  transition: all 0.5s ease;
}
.sidebar.close .profile-details img {
  padding: 10px;
}
.sidebar .profile-details .profile_name,
.sidebar .profile-details .job {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  white-space: nowrap;
}
.sidebar.close .profile-details i,
.sidebar.close .profile-details .profile_name,
.sidebar.close .profile-details .job {
  display: none;
}
.sidebar .profile-details .job {
  font-size: 12px;
}

@media (max-width: 420px) {
  .sidebar.close .nav-links li .sub-menu {
    display: none;
  }
}

/* Add some basic styling to the container */
.scrollable-list-container {
  max-height: 500px; /* Set a maximum height for the container */
  overflow-y: auto; /* Enable vertical scrollbar */
  border: 1px solid #ccc; /* Add a border for better visibility */
  padding: 10px; /* Add some padding for better spacing */
}

/* Remove default list styles */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Style your list items as needed */
li {
  margin-bottom: 10px;
}

/* Style your links */
a {
  text-decoration: none;
  color: #333;
}

/* Add hover effect to links */
a:hover {
  text-decoration: underline;
}

      `}
        </style>
        {/* Box icon CSS   */}
        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />
        <div className="sidebar close">
          <ul className="nav-links" style={{ marginTop: "30px" }}>
            <li>
              <Link to="/erpdasboard">
                <a href="#">
                  {/* <i className="bx bx-home" /> */}
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAARpJREFUWEftWNsNwjAMtDdhE+gk0EmATdiEMglscmCpQX2liZMGVcX9re1eL+ezFaaVPrxSXGTAtCfjZQzALqYYM7+m4nLzJ4EBuBPRIQYYEQmwmpkbF5+bL3V8wBAJyoXdmLnuANPmN8xcdb85AtYewTMVWGK+AdMybowZY6Em/drF1rqy54OTBpv4x0ODvRDROURz+340OYoBiwQ0G7a48y8B6v8YAyCbiUZj1+H65NsuRLx7IorZyWTd6RUGoN0uwl2Zq5HErg7PSgPWZyCOsY9ERGNHBXuVE2/Ro0wQr4hffoaKAUssvNkhHtaYMabtSmPsR4zl2kXcrARwUhjsw3lY54pAs12M8r13FwrHLxZqF3daalfL2Bt0dhE2jPR8TQAAAABJRU5ErkJggg=="
                    style={{
                      width: "24px",
                      marginLeft: "25px",
                      marginTop: "20px",
                    }}
                  />
                </a>
              </Link>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Dashboard
                  </a>
                </li>
              </ul>
            </li>




            <li>
              <Link to="/enrollment">
                <a href="#">
                  {/* <i className="bx bx-home" /> */}
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAZlJREFUSEvtlr1OwzAQx+/i2pWlSKUsIDHQkQ2JgZUBXoAXgI0FCd6AoW/AACMSXRl4ARh4AAY22MrA0IVSKchqUudQEE2/guvGkVokstmy73f/O1/uEOb04Zy4YA3WUXSW10kiajLObxBR9W3Yg8Owlxec3EOAF+R8GxE/f9Z25rQjOKEQwFFJiKuZwHbuZZ9KnUasM87riwOmTmdZS7mPiGt5FRLRG1PqFiuV974No2IKgtW4XH4EopW80PQeYsvrdrfQ91vJnhGsw/AYAM6doQMDJ0yIy+ngpE6JctfqhMNDD8mseMHBDUBsAlENAA6MaSlSsYe4i5w/UBTtxET3/+CRCDiGuuEhXqcGg+AJq9UPareXwPc3+/sx0eFEzp3AQ5dN+fxumeOl6AQGmJPiMZl/7lVnpSmdQDLzVJBiZzAA5PpzFQG2b15TKmKmUNtTk+luMOaYFRffj0+ZEBe/OZsqVkrVBGPPAFCaSVn24V6o9YaUsjkVnBxQSq1zxvZcZ65I6zsp5atJgPVAX0AURntI0QZt7X0BRMdWLkVWiAMAAAAASUVORK5CYII="
                  style={{
                    width: "24px",
                    marginLeft: "25px",
                    marginTop: "20px",
                  }}
                  
                  />
                </a>
              </Link>
              <ul className="sub-menu blank">
                <li>
                  <a className="link_name" href="#">
                    Enrollment Generation
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#">
                {/* <i className="bx bx-cog" /> */}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAh5JREFUWEftWMFRAzEMlCqBVAKpBFIJpBKSSgiVcFQibjPyjO2zbMt3jxsGf/KwLa2l1UoXpp0u3iku+nvAROSRiN6ICL/WujLzZSQrwxETkXcF1vJ7YOapdSjf/we2ecRE5JmIpjgdyq8PIsJea51KPINdZr5Zl81UqvNPJTc4coYDB7dinwAAgJOIwGZ4EGyCq4tVA1YiNwDWqrAVvdJ+sTiKwDRa3yNeBu7cmPnYVZVZuAd8ua8seLiImIi8EhGIPbJGU417x7jASsDEieg88+4SjCoNwEM8zsPHpBASYCoNqJqehVciBWbJOys44VoODC8MEtECh9CboMJlEUHkQI/WsoHhpkatlQZTf3LvmR5a4ECFU7xZ07HaS7ui1Rm1oi2vwN598SzXrbzE+7VKt2yNAEPfPOwRGDC5ZqxadboipqGvTadejqG9WZqGCRfFlAyTJYGNu7+VsYVSWwcd2pg8NtcxTztqSoZzGEi4u0b5EaRiGiI97O0iuNIU2F6ljrOHDvCFSXfuHE86CHr6JGzZqdSXetqSRzVqZxe0sAbF3k+zLYAVdbEmsLUS3wJQsFEsIo/ygz9XInpxzlkBAHgIG/gQCfwzu0i156liP8xz10/8NaOjTOygFsFkblNdg3jfH2qNTq5mnDXm3up1ta/gYw2w3gLZJzDviLRFxMCx1qTrHpFWA4vE2FL45P8Or74Mc8zryHt+t8B+ARl/DDa5LuyqAAAAAElFTkSuQmCC"
                  style={{
                    width: "24px",
                    marginLeft: "25px",
                    marginTop: "20px",
                  }}
                />
                {/* <span className="link_name">Setting</span> */}
              </a>
              <ul className="sub-menu blank" style={{ marginTop: "250px" }}>
              
                <li>
                  <a className="link_name" href="#">
                    Masters
                  </a>
                </li>
                <div class="scrollable-list-container">
                  <ul>
                  <Link to = "/brancmapping-session" >
                    <li >
                      <h6>Branch Mapping With Session</h6>
                    </li>
                    </Link>

                    <Link to = "/center-master">
                    <li>
                      <h6>Center Master</h6>
                    </li>
                    </Link>

                    <Link to = "/specialization-master">
                    <li>
                      <h6>Specialization Master</h6>
                    </li>
                    </Link>

                    <Link to = "/specialization-subject-mapping">
                    <li>
                      <h6>Specialization Subject Mapping</h6>
                    </li>
                    </Link>
                    <Link to = "/sprcialization-type-master">
                    <li>
                      <h6>Specialization Type Master</h6>
                    </li>
                    </Link>
                    <Link to = "/subject-header-insert">
                    <li>
                      <h6>Subject Header Insert</h6>
                    </li>
                    </Link>
                    <Link to = "/upload-subject-master-from-excel-data">
                    <li>
                      <h6>Upload Subject Master From Excel Data</h6>
                    </li>
                    </Link>
                    <Link to = "/create-collage">
                    <li>
                      <h6>Create College</h6>
                    </li>
                    </Link>
                    <Link to = "/admission-session-master">
                    <li>
                      <h6>Admission Session Master</h6>
                    </li>
                    </Link>
                    <Link to = "/faculty-master">
                    <li>
                      <h6>Faculty Master</h6>
                    </li>
                    </Link>
                    <Link to = "/department-master">
                    <li>
                      <h6>Department Master</h6>
                    </li>
                    </Link>
                    <Link to = "/course-type">
                    <li>
                      <h6>Course Type</h6>
                    </li>
                    </Link>
                    <Link to = "/course-master">
                    <li>
                      <h6>Course Master</h6>
                    </li>
                    </Link>
                    <Link to = "/branch-master">
                    <li>
                      <h6>Branch Master</h6>
                    </li>
                    </Link>
                    <Link to = "/sub-branch-master">
                    <li>
                      <h6>Sub Branch Master</h6>
                    </li>
                    </Link>
                    <Link to = "/course-group-master">
                    <li>
                      <h6>Course Group Master</h6>
                    </li>
                    </Link>
                    <Link to = "/admission-open">
                    <li>
                      <h6>Admission Open</h6>
                    </li>
                    </Link>
                    <Link to = "/reservation-master">
                    <li>
                      <h6>Reservation Master</h6>
                    </li>
                    </Link>
                    <Link to = "/create-counselling-round">
                    <li>
                      <h6>Create Counselling Round</h6>
                    </li>
                    </Link>
                    <Link to = "/last-exam-sunject-group">
                    <li>
                      <h6>Last Exam Subject Group</h6>
                    </li>
                    </Link>
                    <Link to = "/grade-point-master">
                    <li>
                      <h6>Grade Point Master</h6>
                    </li>
                    </Link>
                    <Link to = "/subject-master-excel-download">
                    <li>
                      <h6>Subject Master Excel Download</h6>
                    </li>
                    </Link>
                    <Link to = "/subject-master-paper-wise">
                    <li>
                      <h6>Subject Master Paper Wise</h6>
                    </li>
                    </Link>
                    <Link to = "/subject-group-master">
                    <li>
                      <h6>Sub Group Master</h6>
                    </li>
                    </Link>
                    <Link to = "/transfer-subject">
                    <li>
                      <h6>Transfer Subject</h6>
                    </li>
                    </Link>
                    <Link to = "/transfer-subject-group">
                    <li>
                      <h6>Transfer Subject Group</h6>
                    </li>
                    </Link>
                    <Link to = "/program-scheduling">
                    <li>
                      <h6>Program Scheduling</h6>
                    </li>
                    </Link>
                  </ul>
                </div>
              </ul>
            </li>
            <li>
              <div className="icon-link">
                <a href="#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAbFJREFUWEftl91RAzEMhKVOSCVAJSSVAJUQKiFUknSysBn75u5iW1JimDxYMzf3EJ38WT9rR+VOTe+USwZYtDIjYyNj0QxE/d09BuBNRB5F5ElETr/vg4h8qirf3c0EA/AgIh8JqATwrqqE7moesK8GVIbpDtcEA7BN2bKycVLVzdwpfftifbj6nRs8t4YFxhISzmPP835LPfnq+XDmM8WwwDxlLJbzr8EiGdup6j5TAuD08onYXlU58WYpvT3GWJscNEJS87VKSalgOfluGXe66wGUY3jkguUgXM0uJrIwnV7mg6uUs34piSx7gcrfFFcAR0fG81K+qVxvM50CEumlfwWb+iBNUKtOADw9mkNwsl0CyxJyMvPhvWZgOfl8WyX1NpnZ/FcIJAGnHUdB1v7FqUzpj4ojY3eDuwBLit2SBysZhON0nRWclmLyFLGs3mPBKaottBDcwC2lLBeBANbOF6IbiFsFo1hGryo1yGmRpH/WsUZ9nK7pix4DELlNWFlb3DYs5+ZU3jCNpXVvum6vM0YxNVPu3D0P5Kv/QZm3CydEd7cBFk3pyNjIWDQDUf8fUGa0JwL3jjoAAAAASUVORK5CYII="
                    style={{
                      width: "27px",
                      marginLeft: "25px",
                      marginTop: "20px",
                    }}
                  />
                  {/* <i className="bx bx-bulb" /> */}
                  {/* <span className="link_name">Solutions</span> */}
                </a>
                <i className="bx bxs-chevron-down arrow" />
              </div>
              <ul className="sub-menu" style={{ marginTop: "-100px" }}>
                <li>
                  <a className="link_name" href="#">
                    Admission
                  </a>
                </li>
                <div class="scrollable-list-container">
                  <ul>
                    <li>
                      <a href="#">Scholarship</a>
                    </li>
                    <li>
                      <a href="#">Download</a>
                    </li>
                    <li>
                      <a href="#">New Ed. 12th Passing Subject</a>
                    </li>
                    <li>
                      <a href="#">New Ed. Subject mapping Master</a>
                    </li>
                    <li>
                      <a href="#">New Ed. pol. Subject Master</a>
                    </li>
                    <li>
                      <a href="#">New Ed. Subject With Branch Mapping</a>
                    </li>
                    <li>
                      <a href="#">
                        New Ed. Pol. Subject Mapping With Subject Master{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        New Ed. Pol. Existing Students Subject Update
                      </a>
                    </li>
                    <li>
                      <a href="#">Manual Enrollment Generate</a>
                    </li>
                    <li>
                      <a href="#">Course Group Wise Faculty Assign</a>
                    </li>
                    <li>
                      <a href="#">Course Assign To College</a>
                    </li>
                    <li>
                      <a href="#">Seat Allocation To College</a>
                    </li>
                    <li>
                      <a href="#">Fee Structure With Eligbillity</a>
                    </li>
                    <li>
                      <a href="#">Student Document Upload </a>
                    </li>
                    <li>
                      <a href="#">Cancel Uploaded Document(Student)</a>
                    </li>
                    <li>
                      <a href="#">Counselling And Collage Allotment</a>
                    </li>
                    <li>
                      <a href="#">Counselling WithCollage Selection</a>
                    </li>
                    <li>
                      <a href="#">Collage Change</a>
                    </li>
                    <li>
                      <a href="#">Collage Allotted List</a>
                    </li>
                    <li>
                      <a href="#">Collage Allotted Studennt List</a>
                    </li>
                    <li>
                      <a href="#">Generate Enrollment</a>
                    </li>
                    <li>
                      <a href="#">Enrollment Slip</a>
                    </li>
                    <li>
                      <a href="#">Change Course</a>
                    </li>
                    <li>
                      <a href="#">Student Branch Change After Enrollment</a>
                    </li>
                    <li>
                      <a href="#">Enrollment Cancel</a>
                    </li>
                    <li>
                      <a href="#">Admission Cancel</a>
                    </li>
                    <li>
                      <a href="#">Export Data (Student)</a>
                    </li>
                    <li>
                      <a href="#">Admission Session Change</a>
                    </li>
                    <li>
                      <a href="#">Update Student Details</a>
                    </li>
                    <li>
                      <a href="#">Upload Student Data (Excel)</a>
                    </li>
                    <li>
                      <a href="#">Update Student</a>
                    </li>
                    <li>
                      <a href="#">Admission Form Status</a>
                    </li>
                    <li>
                      <a href="#">Student Document Upload</a>
                    </li>
                    <li>
                      <a href="#">Cancle Uploaded Document(Student)</a>
                    </li>
                    <li>
                      <a href="#">Counselling And Collage Allotment</a>
                    </li>
                    <li>
                      <a href="#">Counselling With Collage Selection</a>
                    </li>
                    <li>
                      <a href="#">Collage Change</a>
                    </li>
                    <li>
                      <a href="#">Collage Allotted List</a>
                    </li>
                    <li>
                      <a href="#">Counselling Admitted Student list</a>
                    </li>
                    <li>
                      <a href="#">Generate Enrollment</a>
                    </li>
                    <li>
                      <a href="#">Enrollment Slip</a>
                    </li>
                    <li>
                      <a href="#">Change Course</a>
                    </li>
                    <li>
                      <a href="#">Student Branch Change After Enrollment</a>
                    </li>
                    <li>
                      <a href="#">Enrollment Cancle </a>
                    </li>
                    <li>
                      <a href="#">Admission Cancle</a>
                    </li>
                    <li>
                      <a href="#">Export Data (Student)</a>
                    </li>
                    <li>
                      <a href="#">Admission Session Change</a>
                    </li>
                    <li>
                      <a href="#">Update Student Details </a>
                    </li>
                    <li>
                      <a href="#">dsjdgdajkjak</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li>
              <div className="icon-link">
                <a href="#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAUBJREFUWEftmOERgjAMhfMmUSZRNtFJ1EnUScRJdJN4z6McVLg2Fj0O2n+eof36GpoXIBMdmCiXZDDryQwqpqrrockAPK0LWeM/wFT1KCKHwEQE2wOorAvGxnfAVHUrIrfIh38K54OdRWQXCcawn8H5YFSLqv1zcHNXAEyhZkwBzMFUAEr3Y0pgZCrdC5XBIpN2OYrxor23VAld0EMCjq7YBcCeq9Wl7BF5dH5YBrMKN1/Fmhu6luTprFCdY75lYpmLeSGSFCNEYTkjVaUxoEEIjZmC0Q14W2cBbkxjbTbbIatIO5WkWN9x5HsslKT+/1kxq2K0x66l4x022PoFJh49+a0b+Zu7WC5YTBc+ljp98xSu5vrNCJOWveW3yZsCfWr3ln3fLgjFortJWcXwLC15p6Tx2fx9zKDgOzQrZlXsBbnC3SdaZaeBAAAAAElFTkSuQmCC"
                    style={{
                      width: "26px",
                      marginLeft: "25px",
                      marginTop: "20px",
                    }}
                  />
                  {/* <i className="bx bx-news" /> */}
                  {/* <span className="link_name">Posts</span> */}
                </a>
                <i className="bx bxs-chevron-down arrow" />
              </div>
              <ul className="sub-menu" style={{ marginTop: "-170px" }}>
                <li>
                  <a className="link_name" href="#">
                    Verification
                  </a>
                </li>
                <div class="scrollable-list-container">
                  <ul>
                    <li>
                      <a href="#">Student Status</a>
                    </li>
                    <li>
                      <a href="#">Student Registration Verification</a>
                    </li>
                    <li>
                      <a href="#">Document Verification Panel</a>
                    </li>
                    <li>
                      <a href="#">Document Verification</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li>
              <div className="icon-link">
                <a href="#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAclJREFUWEftmOFRwzAMhaVJoJvQSaCTAJPQTtIyCd1E8ILTcxzbkho7l+Pwr97VZ39+lp6sMG108Ea56G+AicgbET0Q0WNjpU/MfIzXNCsmImciemoMFC/3zsw4+DBMYCIChb46Qo1L75j56gF7+bnCjxXA9sx86QWGhU9EhJPj6p8dMdkN7MjMh1RZEYHaUF0bXcCuzLwr7SwiiFEtm7uATbLqTtW6gGWvcQQMHviq3GUeLNjCr4+EtMVvEbFk5YWZ912uMjHRw+jGRjAw3XwoBhQRZCcMWhtFxWJ3vwcMFoFYu5UXx6EA3Q0sVgSQWhamCq4Cpl1b7v/uYENZiRSzKtcFDHGF+BqKcCb4YRXa66QpGECQKKNKxSsM2YnyVFKwGVi1DOUIg1ci+3NwzcBuC3kiveJrTcDcaiVxlyvqTcCqRVtTsPAUagKGvWcZqAEl/6dx1gzMyaFOd4NZi7C6szIh34yUXhdYbIX2bfJsmrRvNbAAB3PU3NurGuL0M+4psYALzLvjkvn/YF71aoot9aiYBYE96zdrsCmYpenwHh7zqx1UbsHZRxVjm+WFWw4WbAGlwvrqtECi4LtCw/QZyrJz6zmbBfsGMgNFNte+L7wAAAAASUVORK5CYII="
                    style={{
                      width: "27px",
                      marginLeft: "25px",
                      marginTop: "20px",
                    }}
                  />
                  {/* <i className="bx bx-file-find" /> */}
                  {/* <span className="link_name">Insights</span> */}
                </a>
                <i className="bx bxs-chevron-down arrow" />
              </div>
              <ul className="sub-menu" style={{ marginTop: "-220px" }}>
                <li>
                  <a className="link_name" href="#">
                    Accounts
                  </a>
                </li>
                <div class="scrollable-list-container">
                  <ul>
                    <li>
                      <a href="#">Update Manual Tuition Fees</a>
                    </li>
                    <li>
                      <a href="#">Entrance Exam Details</a>
                    </li>
                    <li>
                      <a href="#">Exam Fee Master </a>
                    </li>
                    <li>
                      <a href="#">Manual Exam Fee Update</a>
                    </li>
                    <li>
                      <a href="#"> Update Manual Enrollment Fee</a>
                    </li>
                    <li>
                      <a href="#">Verify Online Payment</a>
                    </li>
                    <li>
                      <a href="#">Examination From Activation</a>
                    </li>
                    <li>
                      <a href="#">Exam From Verification</a>
                    </li>
                    <li>
                      <a href="#">Enrollment Fee Vrification Status</a>
                    </li>
                    <li>
                      <a href="#">Conditional Link Clear</a>
                    </li>
                    <li>
                      <a href="#">Data Wise fee Summary</a>
                    </li>
                    <li>
                      <a href="#">Tuition Fee Verification</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAVxJREFUWEftWNF1wjAMvJukZZMyCe0kwCSlk5RNoJOIqC/mOW7K2Zg2eWB9xrJ873SW5BAzNc4UFxqw0sw0xqoYM7NnAK8AnkoDZfp/AdiRPCr/QSrN7L0HpvbVrO9JLlWAFNgngBe1qXL9SHKhYjRgEUM3Y0zpwdMfbNtJYZ+kyXXrlyrYAFiv67C+Jfm9X6aS5MVaZ2YWHboMgcM3MzsIYPH6ef/DANsB8FoV22oOjKkq4Oupxv4llbMF5jcqbTfe4mKbhLF2Kz0Fqq+5eIO9jRRYL8CXCux14s9Rc6HPbTRWeGiO+/0DUxpTLP2NxlQTV6gma+KTARu5/gpLup6O6qn4R8cmOfaUosj0DwOlTx5xy1qEF9RUwMbwD15PKTCnPR6VMwmodvPG7332PAD8GJu7SXkDYF19VF4AB/LRTe9+5sB+nef7V3le+Cu81Gu8/VQpJbUxdjeMnQC/byg2D2+VSwAAAABJRU5ErkJggg=="
                  style={{
                    width: "27px",
                    marginLeft: "25px",
                    marginTop: "20px",
                  }}
                />
                {/* <i className="bx bxs-credit-card" /> */}
                {/* <span className="link_name">Pricing</span> */}
              </a>
              <ul className="sub-menu blank" style={{ marginTop: "-15px" }}>
                <li>
                  <a className="link_name" href="#">
                    Examination
                  </a>
                </li>
                <div class="scrollable-list-container">
                  <ul>
                    <li>
                      <a href="#">Examination Form Creation Between Sem</a>
                    </li>
                    <li>
                      <a href="#">Increase Answer Booklet Time</a>
                    </li>
                    <li>
                      <a href="#">Course Wise Center Allocation</a>
                    </li>
                    <li>
                      <a href="#">Bulk Mailing</a>
                    </li>
                    <li>
                      <a href="#">Student Wise Print Admit Card</a>
                    </li>
                    <li>
                      <a href="#">Exam Session Master</a>
                    </li>
                    <li>
                      <a href="#">Class Promotion</a>
                    </li>
                    <li>
                      <a href="#">Exam Form Status</a>
                    </li>
                    <li>
                      <a href="#">Manual Exam Form Verification</a>
                    </li>
                    <li>
                      <a href="#">Examination Form Verification</a>
                    </li>
                    <li>
                      <a href="#">Question Paper Upload</a>
                    </li>
                    <li>
                      <a href="#">Data Wise Student Strength(Exam)</a>
                    </li>
                    <li>
                      <a href="#">Foil Counter Foil</a>
                    </li>
                    <li>
                      <a href="#">Attendance Sheet (Raba)</a>
                    </li>
                    <li>
                      <a href="#">Increase Answer Booklet Time</a>
                    </li>
                    <li>
                      <a href="#">Course Wise Center Allocation</a>
                    </li>
                    <li>
                      <a href="#">Bulk Mailing</a>
                    </li>
                    <li>
                      <a href="#">Student Wise Print Admit Card</a>
                    </li>
                    <li>
                      <a href="#">Exam Session Master</a>
                    </li>
                    <li>
                      <a href="#">Class Promotion</a>
                    </li>
                    <li>
                      <a href="#">Exam Form Status</a>
                    </li>
                    <li>
                      <a href="#">Manual Exam Form Verification</a>
                    </li>
                    <li>
                      <a href="#">Examination Form Verification</a>
                    </li>
                    <li>
                      <a href="#">Question For Verification</a>
                    </li>
                    <li>
                      <a href="#">Question Paper </a>
                    </li>
                    <li>
                      <a href="#">Data Wise Student Strength (Exam)</a>
                    </li>
                    <li>
                      <a href="#">Foil Counter Foil</a>
                    </li>
                    <li>
                      <a href="#">Attendance Sheet (Raba)</a>
                    </li>
                    <li>
                      <a href="#">Activate Admit Card</a>
                    </li>
                    <li>
                      <a href="#">Examination Fee Discount</a>
                    </li>
                    <li>
                      <a href="#">Online Exam Paper Status</a>
                    </li>
                    <li>
                      <a href="#">lkjhgfdsa</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAghJREFUWEftl+FNAzEMhe1JaDehk0AnASahTEKZhG5ieFIc+Zzk4ty16CQaiT8k53x5z7FTpo0O3igX3cFGnfmfionIOxG9MfPlTxQTkR0RPafNsOnZby4ir0T08rsO84dRuCErReSRiKACwPyAMoChBP5tFgzDhcES1GfHkgsz7xMcDqCq4l8ZPGJrCKyiwFzsEzMfG3D7qKVRMH/63qGRU+cEB0vV+iMzn3ofYz4KZoNH4maAdDPV0qxmL0gUTHqB3Ly9CICC4hg5B3vxumCD+aX72TzTsoE5lJVDD2rEStxGlIrosFbeFMwGj8Dl2yciNj/DJaNrpSmYyJOIavZG+gNdt1wYOFhaq/qqok16HMIW5HDih3NMdzU9Ej3QDrQc5JXWLg+VL0W0qYesrCVVgtwpjF2T2hfgoa5XONQ3h8ESUMHaajUigjqmkPa7nIu1g3fBjH0Prin7eFBC/75860nPoCej4Kxys2DBF0WrfBSlofJsapaPJph56EXqVmsNVMHmuXFX4lYbexXsSlAKW1jmim61TRVgK+1rKTd5VVT2KApvDWy0L0atnljmVCvsnIDdSC0Fn1jWe6d5MPt2iioRXTdpSQlMe++H/pDRYB5s9AkdhdJ1y5q4iNwqvxRsttrbU3rFNgs296QZtS3cTxf1ytU0CwN0m/jCuKs/u4ONSrhZxX4AG4cINkQAjpAAAAAASUVORK5CYII="
                  style={{
                    width: "27px",
                    marginLeft: "25px",
                    marginTop: "20px",
                  }}
                />
                {/* <i className="bx bx-bar-chart" /> */}
                {/* <span className="link_name">Chart</span> */}
              </a>
              <ul className="sub-menu blank" style={{ marginTop: "-100px" }}>
                <li>
                  <a className="link_name" href="#">
                    Student
                  </a>
                </li>
                <div class="scrollable-list-container">
                  <ul>
                    <li>
                      <a href="#">Password View</a>
                    </li>
                    <li>
                      <a href="#">Otp Verification</a>
                    </li>
                    <li>
                      <a href="#">Bonafide Cretificate </a>
                    </li>
                    <li>
                      <a href="#">Student History</a>
                    </li>
                    <li>
                      <a href="#">Export Student Data College Wise</a>
                    </li>
                    <li>
                      <a href="#">Registration Add Allotment Slip</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </li>
            <li>
              <a href="#">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAAalJREFUWEftl9FRwzAQRG8rgVQC6YRUAlRCqISkEtLJwXokjxGW7s7WePJh/fjDcvS02ltdIHc6cKdcsoNFT2ZXbFcsqkB0vttjqvoiIo8i8pQWuYnIOwA+uw8TTFUJ8yEizzOrE+oTwFtvMg/YVwVqynICcO4J1wRLx0e1rHEDcLAmRd5bYISitzzjCODSmphsMUyxvNkTjIXQ9JqqTm3RnG+BefyVRTJ91hOMCrx6zvG3Og/W8fQEY1RQNT5b4wLgaG2gGxgXclTmbEUmo5fZR/XzJhkv12Iz3OAQ2GaOJbhayJ4BnOaUUtWIDfJPjJXtAstfJRWGHTuiYXOwUaCW2ZMFysKZenXujmVlD1loxQV/iAHLi7t2V3KBq5VhyRLrc2yBRwg47rjiu3VgRVlbKTB934RbFReqyiPjzpYOwrG6/nloLdi3I1At6NkYSfZ4SB+zj6te+n/M7whTCyi/X90GlWBLsqcGa7ZBrV2WYJH+y1LP7DYiYJE2xwIz+7MIWP4nZC3qec8LudnRusE8q201J3SJbwVl3pVbgpRr7YpF1d8Viyr2AwtJwCdxlh6CAAAAAElFTkSuQmCC"
                  style={{
                    width: "33px",
                    marginLeft: "25px",
                    marginTop: "20px",
                  }}
                />
                {/* <i className="bx bx-compass" /> */}
                {/* <span className="link_name">Explore</span> */}
              </a>
              <ul className="sub-menu blank" style={{ marginTop: "-100px" }}>
                <li>
                  <a className="link_name" href="#">
                    User Role
                  </a>
                </li>
                <div class="scrollable-list-container">
                  <ul>
                    <li>
                      <a href="#">Assign Collage To User</a>
                    </li>
                    <li>
                      <a href="#">Collage Assign To Dean</a>
                    </li>
                    <li>
                      <a href="#">Create User </a>
                    </li>
                    <li>
                      <a href="#">Marks Entry Permission</a>
                    </li>
                    <li>
                      <a href="#">Branch Wise Permission</a>
                    </li>
                    <li>
                      <a href="#">Special Marks Entry Permission</a>
                    </li>
                  </ul>
                </div>
              </ul>
            </li>

            <li>
            
            </li>
          </ul>
        </div>
      </>
    </>
  );
}

export default AdminDashboard;
