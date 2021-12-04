import TopFrame from "../images/topSide.jpg";
import SideFrame from "../images/sideFrame.jpg";
import Family from "../images/family.jpg";

const css = () => ({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: 630,
    width: 500,
    padding: "60px",
    overflow: "auto",
  },
  flexBox: {
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: "100%",
    width: "100%",
    overflow: "auto",
  },
  topAndBotFrame: {
    height: "10%",
    width: "100%",
  },
  sidesFrame: {
    width: "20%",
  },
  pictureFrame: {
    width: "100%",
    height: "80%",
    wrap: "wrap",
  },
  pictureBox: {
    backgroundImage: `url(https://user-images.githubusercontent.com/76976401/144694166-55203e91-62f9-4cdf-aad1-2f7e7540b81d.jpg)`,
    backgroundSize: "cover",
    outline: "1px solid black",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  topAndBotPicture: {
    backgroundImage: `url(https://user-images.githubusercontent.com/76976401/144694133-51c5bc20-f99d-4f85-bb01-fbf9b9264d03.jpg)`,
    backgroundSize: "cover",
    outline: "1px solid black",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  sidePicture: {
    backgroundImage: `url(https://user-images.githubusercontent.com/76976401/144694112-a3c70e72-d104-4860-bedd-9fbf30dc66b6.jpg)`,
    backgroundSize: "cover",
    outline: "1px solid black",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
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
export default css;
