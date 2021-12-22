import { React, useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleLogin from "react-google-login";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import Frame from "../components/Frame";
import Cookies from "js-cookie";

import ParkIcon from "@mui/icons-material/Park";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RedeemTwoToneIcon from "@mui/icons-material/RedeemTwoTone";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";

import { makeStyles } from "@mui/styles";
import styles, { theme } from "../styles/general";

const useStyles = makeStyles(styles);

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
        Familia Parra Barillas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignIn = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const contextUser = useContext(UserContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [authorization, setAuthorization] = useState(false);

  const ajax = ({ url, method = "GET" }) => {
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send(null);
    request.responseType = "text";
    console.log(request.responseURL, "Request", typeof request);
    return request.responseText;
  };
  const responseGoogle = (response) => {
    contextUser.setUser(response);
    navigate("/dashboard", { replace: true });
  };
  const handleSubmit = async () => {
    const port = process.env.PORT || 8080;
    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:${port}/auth/google`);

    xhr.addEventListener("load", (response) => {
      //if (response.target.responseText === "true") setAuthorization(response);
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
    <>
      <Container maxWidth="xs">
        <Box className={classes.box}>
          <Typography className={classes.familyTitle}>
            <ParkIcon />
            Family Album
            <RedeemTwoToneIcon />
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="xs">
        <Frame
          image={
            "https://user-images.githubusercontent.com/76976401/144694166-55203e91-62f9-4cdf-aad1-2f7e7540b81d.jpg"
          }
          border={
            "https://user-images.githubusercontent.com/76976401/145110512-1483dd79-a43f-42cd-96c6-b918832f34cd.jpg"
          }
          height="400px"
          width="100%"
        />
      </Container>
      <Container maxWidth="xs">
        <Box noValidate sx={{ mt: 1 }}>
          <GoogleLogin
            clientId="785578439110-ife7i20s9dqj3n6hnnochdb4pme5quc7.apps.googleusercontent.com"
            buttonText="Welcome Back"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  );
};

export default SignIn;
