import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Paper, TextField, Typography } from "@mui/material";

const Login = () => {
  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setError("");
      alert("You are logged in successfully!");
      navigate("/products");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <>
      {/* <div
        style={{
          maxWidth: 400,
          margin: "40px auto",
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: 8,
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "grid", gap: 16 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div> */}
      <div style={{height:"90vh"}}> 
      <Paper
        elevation={20}
        style={paperStyle}
        component="form"
        onSubmit={handleLogin}
      >
        <Typography textAlign="center" variant="h6">
          Login
        </Typography>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
        <center>
          <p>
            Don't have an account?
            <Link
              as={Link}
              to="/sign-up"
              underline="none"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Register
            </Link>
          </p>
        </center>
        {/* {success && (
          <Typography color={success.includes("success") ? "green" : "red"}>
            {success}
          </Typography>
        )} */}
        <center>{error && <p style={{ color: "red" }}>{error}</p>}</center>
      </Paper>

      </div>
    </>
  );
};

export default Login;
