import { Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;

//abc@gmail.com
let schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^[A-Za-z]+$/, "Enter Your Fullname"),
  email: Yup.string()
    .email()
    .required("Email is Required")
    .matches(/^[a-z0-9]+@[a-z]{3,6}\.[a-z]{2,4}$/, "Enter a valid Email"),
  age: Yup.number().integer().positive().required("Enter Your Age"),
  password: Yup.string().required("Password is Required"),
  cPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Password Must Watch"),
});

const SignUp = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "10px",
  };
  renderCount++;
  const [input, setInput] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = window.location
    ? (path) => window.location.assign(path)
    : () => {};

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Save user to localStorage
  let handleData = (data) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // Check if email already exists
    if (users.some((u) => u.email === data.email)) {
      setSuccess("Email already registered!");
      return;
    }
    users.push({
      name: data.name,
      email: data.email,
      age: data.age,
      password: data.password,
    });
    localStorage.setItem("users", JSON.stringify(users));
    setSuccess("Registration successful! Redirecting to login...");
    setTimeout(() => {
      navigate("/login");
      // navigate("/login" + data.name);
    }, 500);
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <Typography textAlign="center" variant="h6">
        Create Account
      </Typography>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Age"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <TextField
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        {...register("cPassword")}
        error={!!errors.cPassword}
        helperText={errors.cPassword?.message}
      />
      <Button variant="contained" type="submit">
        SignUp
      </Button>
      <center>
        <p>
          Already have an account?
          <Link
            as={Link}
            to="/login"
            underline="none"
            style={{ textDecoration: "none" }}
          >
            {" "}
             Login
          </Link>
        </p>
      </center>
      {success && (
        <Typography color={success.includes("success") ? "green" : "red"}>
          {success}
        </Typography>
      )}
    </Paper>
  );
};

export default SignUp;
