import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const AdminLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, event) => {
      try {
        if (!formik.isValid) {
          console.error("Please fill in all required fields");
          return;
        }
        const response = await fetch("https://sssutms.ac.in/apitest/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          const data = await response.json();
          const user = data.userResponse;
          sessionStorage.setItem("AnkitHOD", JSON.stringify(user));
          console.log("Registration successful");
          navigate("/erpdasboard");
        } else {
          console.error("Registration failed");
         
        }
      } catch (error) {
        console.error("An error occurred:", error);
        
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <style>
        {`
          html {
            height: 100%;
          }

          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            background: url("https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg") no-repeat center center fixed;
            background-size: cover;
            background-blend-mode: overlay;
            background-color: rgba(0, 0, 0, 0.7);
          }

          .login-box {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 400px;
            padding: 40px;
            transform: translate(-50%, -50%);
            box-sizing: border-box;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
            border-radius: 10px;
          }

          .login-box h2 {
            margin: 0 0 30px;
            padding: 0;
            color: #fff;
            text-align: center;
          }

          .login-box .user-box {
            position: relative;
          }

          .login-box .user-box input {
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            margin-bottom: 30px;
            border: none;
            border-bottom: 1px solid #fff;
            outline: none;
            background: transparent;
          }

          .login-box .user-box label {
            position: absolute;
            top: 0;
            left: 0;
            padding: 10px 0;
            font-size: 16px;
            color: #fff;
            pointer-events: none;
            transition: 0.5s;
          }

          .login-box .user-box input:focus ~ label,
          .login-box .user-box input:valid ~ label {
            top: -20px;
            left: 0;
            color: #03e9f4;
            font-size: 12px;
          }

          .login-box form a {
            position: relative;
            display: inline-block;
            padding: 10px 20px;
            color: #03e9f4;
            font-size: 16px;
            text-decoration: none;
            text-transform: uppercase;
            overflow: hidden;
            transition: 0.5s;
            margin-top: 40px;
            letter-spacing: 4px;
          }

          .login-box a:hover {
            background: #03e9f4;
            color: #fff;
            border-radius: 5px;
            // box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
          }

          .login-box a span {
            position: absolute;
            display: block;
          }

          .login-box a span:nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #03e9f4);
            animation: btn-anim1 1s linear infinite;
          }

          @keyframes btn-anim1 {
            0% {
              left: -100%;
            }
            50%, 100% {
              left: 100%;
            }
          }

          .login-box a span:nth-child(2) {
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #03e9f4);
            animation: btn-anim2 1s linear infinite;
            animation-delay: 0.25s;
          }

          @keyframes btn-anim2 {
            0% {
              top: -100%;
            }
            50%, 100% {
              top: 100%;
            }
          }

          .login-box a span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, #03e9f4);
            animation: btn-anim3 1s linear infinite;
            animation-delay: 0.5s;
          }

          @keyframes btn-anim3 {
            0% {
              right: -100%;
            }
            50%, 100% {
              right: 100%;
            }
          }

          .login-box a span:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #03e9f4);
            animation: btn-anim4 1s linear infinite;
            animation-delay: 0.75s;
          }

          @keyframes btn-anim4 {
            0% {
              bottom: -100%;
            }
            50%, 100% {
              bottom: 100%;
            }
          }
        `}
      </style>

      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"} color={"whitesmoke"}>
            Admin Sign In
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
            noValidate
          >
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.email && formik.errors.email ? true : false
                  }
                  
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Stack spacing={4}>
                {formik.submitCount > 0 && !formik.isValid && (
                  <p style={{ color: "red" }}>
                    Please fill in all required fields
                  </p>
                )}

                <Button
                  isLoading={formik.isSubmitting}
                  loadingText="Signing in"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>

                <p>
                  Don't have an account? <Link to="">Sign up</Link>
                </p>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </>
  );
};

export default AdminLogin;
