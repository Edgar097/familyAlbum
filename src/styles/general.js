import red from "material-ui/colors/red";
import green from "material-ui/colors/green";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: red,
    secondary: green,
  },
  typography: {
    fontFamily: ["Mountains of Christmas", "cursive"].join(","),
  },
});

const style = () => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px",
    overflow: "auto",
  },
  flexBox: {
    border: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    boxShadow: "0 5px 7px 4px rgba(255, 105, 135, .3)",
    color: "white",
    height: 500,
    width: "100%",
    overflow: "auto",
    outline: "1px solid black",
  },
  box: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "60px",
    paddingBottom: "60px",
  },
  familyTitle: {
    fontSize: "50px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px !important",
    },
  },
  sidesFrame: {
    display: "flex",
    width: "20%",
  },
  pictureFrame: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "80%",
  },
  pictureBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    boxShadow: "0 5px 7px 4px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    width: "100%",
    overflow: "hidden",
    outline: "1px solid black",
    borderImage: `url(https://user-images.githubusercontent.com/76976401/145110512-1483dd79-a43f-42cd-96c6-b918832f34cd.jpg) 30 stretch`,
    border: "20px solid transparent",
  },
  topAndBotPicture: {
    backgroundImage: `url(https://user-images.githubusercontent.com/76976401/144694133-51c5bc20-f99d-4f85-bb01-fbf9b9264d03.jpg)`,
    backgroundSize: "cover",
    outline: "1px solid black",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    display: "flex",
  },
  sidePicture: {
    backgroundImage: `url(https://user-images.githubusercontent.com/76976401/144694112-a3c70e72-d104-4860-bedd-9fbf30dc66b6.jpg)`,
    backgroundSize: "cover",
    outline: "1px solid black",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    display: "flex",
  },
  dashboard: {
    display: "flex",
  },
  marginTitle: {
    flexGrow: 1,
    paddingLeft: "10%",
    color: "#FFFFFF",
  },
  appBar: {
    background: "#2B3EFC",
    width: "100%",
    position: "absolute",
    zIndex: "100",
  },
  flexBoxV3: {
    background: "#FCFCFC",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "#FFFFFF",
    height: 900,
    padding: "0 30px",
    overflow: "auto",
  },
  normalL: {
    color: "#19191A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  normalTitle: {
    color: "#7688A1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tableRow: {
    display: "flex",
  },
  chip: {
    color: "#BCBCF6",
  },
  TableCSS: {
    borderRadius: "90%",
  },
  headerButton: {
    width: "100%",
  },
  iconCSS: {
    margin: "0px 0px 0px 16px",
  },
  iconButton: {
    color: "#FFFFFF",
  },
  borders: {
    borderBottom: "3px solid rgb(212, 212, 212)",
  },
});
export default style;
