import { React, useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../utils/UserContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.getcrg.com/">
        CRG
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const SignIn = () => {
  const navigate = useNavigate();
  const contextUser = useContext(UserContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [authorization, setAuthorization] = useState(false);

  useEffect(() => {
    if (authorization) {
      navigate("/dashboard", { replace: true });
      contextUser.setUser("LogIn");
    }
  }, [authorization]);

  const ajax = ({ url, method = "GET" }) => {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send(null);
    request.responseType = "text";
    console.log(request.responseURL, "Request", typeof request);
    return request.responseText;
  };
  const handleSubmit = async () => {
    const port = process.env.PORT || 8080;
    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    xhr.open("GET", `http://20.118.65.75:${port}/auth/${user}/${password}`);

    xhr.addEventListener("load", (response) => {
      if (response.target.responseText === "true") setAuthorization(response);
      console.log(response.target.responseText); //Hace falta un IF
    });

    xhr.send();
  };

  const handleChange = (event) => {
    if (event.currentTarget.name === "email") {
      setUser(event.currentTarget.value);
    }
    if (event.currentTarget.name === "password") {
      setPassword(event.currentTarget.value);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">FIFCO Dashboard</Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            {
              //<LinkRoute to="/dashboard">
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            {
              // </LinkRoute>
            }
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
