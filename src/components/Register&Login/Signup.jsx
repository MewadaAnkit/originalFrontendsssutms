// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   HStack,
//   Stack,
//   Button,
//   useColorModeValue,
//   Alert,
//   AlertIcon,
//   InputGroup,
//   InputRightElement,
// } from "@chakra-ui/react";
// import React, { useState, useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import swal from "sweetalert";

// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [mobileOtp, setMobileOtp] = useState("");
//   const [show, setShow] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const [name, setName] = useState("");
//   const [fathersname, setFathersname] = useState("");
//   const [mothersname, setMothersname] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [dob, setDob] = useState("");
//   const [emailRegisteredMessage, setEmailRegisteredMessage] = useState("");
//   const [selectedMethod, setSelectedMethod] = useState("email");
//   const otpInputRef = useRef(null);
//   const navigate = useNavigate();
//   const [resendClicked, setResendClicked] = useState(false);

//   console.log(resendClicked, "resend otp");

//   const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;

//   const [showMobileOtp, setShowMobileOtp] = useState(false);

//   const resendOtp = async () => {
//     setVerificationMessage("");
//     setOtpSent(false);
//     setShow(false);

//     const res = await fetch("https://sssutms.ac.in/apitest/send-otp", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         mobile,
//         method: selectedMethod,
//       }),
//     });

//     const data = await res.json();

//     if (data.status === 201) {
//       setShow(true);
//       setOtpSent(true);
//       setVerificationMessage("");
//     } else if (data.status === 401) {
//       setVerificationMessage(data.message || "Error sending OTP");
//     }
//   };

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setVerificationMessage("");
//     setEmailRegisteredMessage("");

//     if (
//       !name ||
//       !email ||
//       !dob ||
//       !fathersname ||
//       !mothersname ||
//       !mobile ||
//       (!otpSent && !email) ||
//       !emailRegex.test(email)
//     ) {
//       setVerificationMessage(
//         <span style={{ color: "red" }}>
//           All required fields must be filled in, or email must be in a valid
//           format.
//         </span>
//       );
//       return;
//     } else if (
//       selectedMethod === "mobile" &&
//       (mobile.length !== 10 || isNaN(mobile))
//     ) {
//       setVerificationMessage(
//         <span style={{ color: "red" }}>Mobile Number must be of 10 digits</span>
//       );
//       return;
//     }

//     if (!otpSent || resendClicked) {
//       await resendOtp();
//       const res = await fetch("https://sssutms.ac.in/apitest/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           mobile,
//           method: selectedMethod,
//         }),
//       });

//       const data = await res.json();

//       if (data.status === 201) {
//         setShow(true);
//         setOtpSent(true);
//         setVerificationMessage("");
//         setResendClicked(false); // Reset resendClicked state
//       } else if (data.status === 401) {
//         setVerificationMessage(data.message || "Error sending OTP");
//       } else if (
//         data.status === 400 &&
//         data.message === "This email is already exists"
//       ) {
//         setEmailRegisteredMessage("This email is already exists");
//       }
//     } else {
//       const res = await fetch("https://sssutms.ac.in/apitest/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           otp,
//         }),
//       });

//       const data = await res.json();

//       if (data.status === 200) {
//         setVerificationMessage(
//           "Registered successfully, Check Your Mail for ID and Password"
//         );
//         const registerRes = await fetch(
//           "https://sssutms.ac.in/apitest/register",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               name,
//               email,
//               dob,
//               fathersname,
//               mothersname,
//               mobile,
//             }),
//           }
//         );
//         const registerData = await registerRes.json();

//         if (registerData.status === 200) {
//           setVerificationMessage();
//           navigate("/studentlogin");
//         } else if (registerData.status === 401) {
//           swal({
//             icon: "error",
//             title: "Error",
//             text: "Mobile number must be 10 digits",
//           });
//         }
//       } else if (data.status === 401) {
//         setVerificationMessage("Invalid OTP");
//       } else if (
//         data.status === 400 &&
//         data.status === "This email is already exists"
//       ) {
//         setEmailRegisteredMessage("This email is already exists");
//       } else {
//         console.log("Error:", data.message);
//       }
//     }
//   };
//   const handleResendClick = async () => {
//     setResendClicked(true);
//     await resendOtp();
//     setResendClicked(false);
//   };

//   useEffect(() => {
//     if (show) {
//       const timer = setTimeout(() => {
//         setShow(false);
//       }, 10000);

//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [show]);

//   return (
//     <>
//       {show ? (
//         <Alert status="success">
//           <AlertIcon />
//           {otpSent ? "OTP Sent Successfully" : "This Email"}
//         </Alert>
//       ) : null}
//       <Flex
//         minH={"100vh"}
//         align={"center"}
//         justify={"center"}
//         bgImage={"linear-gradient(to right, #ff5f6d , #ffc371)"}
//       >
//         <Stack
//           spacing={2}
//           w={["100%", "100%", "100%"]}
//           maxW={"2xl"}
//           py={2}
//           px={[4, 6]}
//         >
//           <Stack align={"center"}></Stack>
//           <Box
//             rounded={"lg"}
//             bg={useColorModeValue("white", "gray.700")}
//             boxShadow={"lg"}
//             p={8}
//             style={{ borderRadius: "40px", marginTop: "-15px" }}
//           >
//             <img
//               style={{ width: "60%", marginLeft: "80px" }}
//               src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png"
//               alt="logo"
//             />
//             <Stack spacing={4}>
//               <HStack>
//                 <FormControl
//                   id="firstName"
//                   isRequired
//                   style={{ marginTop: "40px" }}
//                 >
//                   <FormLabel>Name</FormLabel>
//                   <Input
//                     type="text"
//                     name="name"
//                     autoComplete="off"
//                     value={name}
//                     onChange={(e) => setName(e.target.value.toUpperCase())}
//                   />
//                 </FormControl>
//               </HStack>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input
//                   type="email"
//                   name="email"
//                   value={email}
//                   autoComplete="off"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="fathersname" isRequired>
//                 <FormLabel>Fathers Name</FormLabel>
//                 <Input
//                   type="text"
//                   name="fathersname"
//                   value={fathersname}
//                   autoComplete="off"
//                   onChange={(e) => setFathersname(e.target.value.toUpperCase())}
//                 />
//               </FormControl>
//               <FormControl id="mothersname" isRequired>
//                 <FormLabel>Mothers Name</FormLabel>
//                 <Input
//                   type="text"
//                   name="mothersname"
//                   value={mothersname}
//                   autoComplete="off"
//                   onChange={(e) => setMothersname(e.target.value.toUpperCase())}
//                 />
//               </FormControl>
//               <FormControl id="mobile" isRequired>
//                 <FormLabel>Mobile Number</FormLabel>
//                 <Input
//                   type="number"
//                   name="mobile"
//                   value={mobile}
//                   autoComplete="off"
//                   onChange={(e) => setMobile(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="dob" isRequired>
//                 <FormLabel>DOB</FormLabel>
//                 <Input
//                   type="date"
//                   name="dob"
//                   value={dob}
//                   onChange={(e) => setDob(e.target.value)}
//                   autoComplete="off"
//                 />
//               </FormControl>

//               {otpSent && (
//                 <>
//                   <FormControl id="otp" isRequired>
//                     <FormLabel>Enter OTP</FormLabel>
//                     <Input
//                       type="number"
//                       name="otp"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       ref={otpInputRef}
//                     />
//                   </FormControl>
//                   {selectedMethod === "mobile" && (
//                     <FormControl id="Mobileotp" isRequired>
//                       <FormLabel>Enter Mobile OTP</FormLabel>
//                       <InputGroup>
//                         <Input
//                           type={showMobileOtp ? "text" : "password"}
//                           name="Mobileotp"
//                           value={mobileOtp}
//                           onChange={(e) => setMobileOtp(e.target.value)}
//                         />
//                         <InputRightElement width="4.5rem">
//                           <Button
//                             h="1.75rem"
//                             size="sm"
//                             onClick={() => setShowMobileOtp(!showMobileOtp)}
//                           >
//                             {showMobileOtp ? "Hide" : "Show"}
//                           </Button>
//                         </InputRightElement>
//                       </InputGroup>
//                     </FormControl>
//                   )}
//                 </>
//               )}
//               <Button
//                 colorScheme="blue"
//                 type="submit"
//                 onClick={sendEmail}
//                 size={"sm"}
//                 width={"20vh"}
//               >
//                 {otpSent ? "Verify OTP" : "Send OTP"}
//               </Button>
//               {otpSent && !resendClicked && (
//                 <Button
//                   colorScheme="blue"
//                   onClick={handleResendClick}
//                   size={"sm"}
//                   width={"20vh"}
//                 >
//                   Resend OTP
//                 </Button>
//               )}
//               {verificationMessage && (
//                 <div className="mt-2">
//                   <Alert
//                     variant={
//                       verificationMessage === "Invalid OTP"
//                         ? "danger"
//                         : "success"
//                     }
//                     style={{
//                       color:
//                         verificationMessage === "Invalid OTP" ? "red" : "green",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {verificationMessage}
//                   </Alert>
//                 </div>
//               )}
//               {emailRegisteredMessage && (
//                 <div className="mt-2">
//                   <Alert variant="danger">{emailRegisteredMessage}</Alert>
//                 </div>
//               )}
//               <p>
//                 Already have an account? <Link to="/studentlogin"> SignIn</Link>
//               </p>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     </>
//   );
// }



import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  useColorModeValue,
  Alert,
  AlertIcon,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");
  const [show, setShow] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [name, setName] = useState("");
  const [fathersname, setFathersname] = useState("");
  const [mothersname, setMothersname] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [emailRegisteredMessage, setEmailRegisteredMessage] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("email");
  const otpInputRef = useRef(null);
  const navigate = useNavigate();
  const [resendClicked, setResendClicked] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;

  const [showMobileOtp, setShowMobileOtp] = useState(false);

  const resendOtp = async () => {
    setVerificationMessage("");
    setOtpSent(false);
    setShow(false);

    const res = await fetch("http://localhost:7786/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        mobile,
        method: selectedMethod,
      }),
    });

    const data = await res.json();

    if (data.status === 201) {
      setShow(true);
      setOtpSent(true);
      setVerificationMessage("");
    } else if (data.status === 401) {
      setVerificationMessage(data.message || "Error sending OTP");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setVerificationMessage("");
    setEmailRegisteredMessage("");

    if (
      !name ||
      !email ||
      !dob ||
      !fathersname ||
      !mothersname ||
      !mobile ||
      (!otpSent && !email) ||
      !emailRegex.test(email)
    ) {
      setVerificationMessage(
        <span style={{ color: "red" }}>
          All required fields must be filled in, or email must be in a valid
          format.
        </span>
      );
      return;
    } else if (
      selectedMethod === "mobile" &&
      (mobile.length !== 10 || isNaN(mobile))
    ) {
      setVerificationMessage(
        <span style={{ color: "red" }}>Mobile Number must be of 10 digits</span>
      );
      return;
    }

    if (!otpSent || resendClicked) {
      await resendOtp();
      const res = await fetch("http://localhost:7786/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          mobile,
          method: selectedMethod,
        }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setShow(true);
        setOtpSent(true);
        setVerificationMessage("");
        setResendClicked(false); // Reset resendClicked state
      } else if (data.status === 401) {
        setVerificationMessage(data.message || "Error sending OTP");
      } else if (
        data.status === 400 &&
        data.message === "This email is already exists"
      ) {
        setEmailRegisteredMessage("This email is already exists");
      }
    } else {
      const res = await fetch("http://localhost:7786/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await res.json();

      if (data.status === 200) {
        setVerificationMessage(
          "Registered successfully, Check Your Mail for ID and Password"
        );
        const registerRes = await fetch(
          "http://localhost:7786/api/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              dob,
              fathersname,
              mothersname,
              mobile,
            }),
          }
        );
        const registerData = await registerRes.json();

        if (registerData.status === 200) {
          setVerificationMessage();
          navigate("/studentlogin");
        } else if (registerData.status === 401) {
          swal({
            icon: "error",
            title: "Error",
            text: "Mobile number must be 10 digits",
          });
        }
      } else if (data.status === 401) {
        setVerificationMessage("Invalid OTP");
      } else if (
        data.status === 400 &&
        data.status === "This email is already exists"
      ) {
        setEmailRegisteredMessage("This email is already exists");
      } else {
        console.log("Error:", data.message);
      }
    }
  };
  const handleResendClick = async () => {
    setResendClicked(true);
    await resendOtp();
    setResendClicked(false);
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 10000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  return (
    <>
      {show ? (
        <Alert status="success">
          <AlertIcon />
          {otpSent ? "OTP Sent Successfully" : "This email is already exists"}
        </Alert>
      ) : null}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bgImage={"linear-gradient(to right, #ff5f6d , #ffc371)"}
      >
        <Stack
          spacing={2}
          w={["100%", "100%", "100%"]}
          maxW={"2xl"}
          py={2}
          px={[4, 6]}
        >
          <Stack align={"center"}></Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            style={{ borderRadius: "40px", marginTop: "-15px" }}
          >
            <img
              style={{ width: "60%", marginLeft: "80px" }}
              src="https://www.sssutms.co.in/cms/Areas/Website/Content/images/logo21.png"
              alt="logo"
            />
            <Stack spacing={4}>
              <HStack>
                <FormControl
                  id="firstName"
                  isRequired
                  style={{ marginTop: "40px" }}
                >
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value.toUpperCase())}
                  />
                </FormControl>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="fathersname" isRequired>
                <FormLabel>Fathers Name</FormLabel>
                <Input
                  type="text"
                  name="fathersname"
                  value={fathersname}
                  autoComplete="off"
                  onChange={(e) => setFathersname(e.target.value.toUpperCase())}
                />
              </FormControl>
              <FormControl id="mothersname" isRequired>
                <FormLabel>Mothers Name</FormLabel>
                <Input
                  type="text"
                  name="mothersname"
                  value={mothersname}
                  autoComplete="off"
                  onChange={(e) => setMothersname(e.target.value.toUpperCase())}
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  name="mobile"
                  value={mobile}
                  autoComplete="off"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FormControl>
              <FormControl id="dob" isRequired>
                <FormLabel>DOB</FormLabel>
                <Input
                  type="date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  autoComplete="off"
                />
              </FormControl>

              {otpSent && (
                <>
                  <FormControl id="otp" isRequired>
                    <FormLabel>Enter OTP</FormLabel>
                    <Input
                      type="number"
                      name="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      ref={otpInputRef}
                    />
                  </FormControl>
                  {selectedMethod === "mobile" && (
                    <FormControl id="Mobileotp" isRequired>
                      <FormLabel>Enter Mobile OTP</FormLabel>
                      <InputGroup>
                        <Input
                          type={showMobileOtp ? "text" : "password"}
                          name="Mobileotp"
                          value={mobileOtp}
                          onChange={(e) => setMobileOtp(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={() => setShowMobileOtp(!showMobileOtp)}
                          >
                            {showMobileOtp ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  )}
                </>
              )}
              <Button
                colorScheme="blue"
                type="submit"
                onClick={sendEmail}
                size={"sm"}
                width={"20vh"}
              >
                {otpSent ? "Verify OTP" : "Send OTP"}
              </Button>
              {otpSent && !resendClicked && (
                <Button
                  colorScheme="blue"
                  onClick={handleResendClick}
                  size={"sm"}
                  width={"20vh"}
                >
                  Resend OTP
                </Button>
              )}
              {verificationMessage && (
                <div className="mt-2">
                  <Alert
                    variant={
                      verificationMessage === "Invalid OTP"
                        ? "danger"
                        : "success"
                    }
                    style={{
                      color:
                        verificationMessage === "Invalid OTP" ? "red" : "green",
                      fontWeight: "bold",
                    }}
                  >
                    {verificationMessage}
                  </Alert>
                </div>
              )}
              {emailRegisteredMessage && (
                <div className="mt-2">
                  <Alert variant="danger">{emailRegisteredMessage}</Alert>
                </div>
              )}
              <p>
                Already have an account? <Link to="/studentlogin"> SignIn</Link>
              </p>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Signup;
