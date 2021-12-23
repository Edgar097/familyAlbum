import React, { useContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "react-query";
import { fetchData } from "../queries/selects";
import { makeStyles } from "@mui/styles";
import styles from "../styles/general";
import ImageForm from "../components/ImageForm";
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import MasterTable from "../components/MasterTable";
import { UserContext } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { Grid } from "@mui/material";
import { typography } from "@mui/system";
import AlbumPage from "../components/AlbumPage";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://getcrg.com/">
        CRG
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const mdTheme = createTheme();
const useStyles = makeStyles(styles);

function DashboardContent() {
  const user = useContext(UserContext).user;
  const url = "https://family-album-pr.herokuapp.com";
  const navigate = useNavigate();
  const [albumId, setAlbumId] = useState();

  const getAlbums = async () => {
    const data = await axios.get(`${url}/api/listAlbum`, {
      params: {
        accessToken: user.accessToken,
      },
    });
    return data;
  };

  const setAlbums = async () => {
    const data = await axios.post(`${url}/api/createAlbum`, null, {
      params: {
        accessToken: user.accessToken,
        name: "Prueba new album",
      },
    });
    return data;
  };

  const { data: albumData, status: albumLoading } = useQuery("albums", () =>
    getAlbums()
  );
  console.log("ALBUM DATA", albumData);
  const { data: queuesTotal, status: totalsLoading } = useQuery(
    "queuesTotals",
    () => fetchData("/api/queues/totals")
  );
  const { data: queuesServiceTotal, status: totalsServiceLoading } = useQuery(
    "queuesServiceTotals",
    () => fetchData("/api/queues/services/totals")
  );

  const classes = useStyles();

  const handleClickAlbum = (albumId) => {
    console.log(albumId);
    setAlbumId(albumId);
  };

  const handleClickMain = () => {
    setAlbumId();
  };

  const handleClickAddAlbum = () => {
    setAlbums();
  };

  useEffect(() => {
    if (!user) navigate("/", { replace: true });
    console.log("Dash:", user);
  });

  return (
    <>
      <Box className={classes.fullscreen}>
        <CssBaseline />
        <TopBar
          title={user.profileObj ? user.profileObj.name : "No Title"}
          handleClickMain={handleClickMain}
          handleClickAddAlbum={handleClickAddAlbum}
        />
        <Box className={classes.dashBoardBackground} component="main">
          <Toolbar />
          {!albumId && (
            <Grid container spacing={2} className={classes.albumGrid}>
              {albumData &&
                albumData.data &&
                albumData.data.albums.map((album, key) => (
                  <Grid key={key} item xs={12} md={6} lg={4}>
                    <Box className={classes.albumTag}>
                      <Typography variant="h4">{album.title}</Typography>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={album.productUrl}
                      >
                        <ArtTrackIcon />
                      </a>
                    </Box>
                    <Paper
                      className={classes.albumPaper}
                      onClick={() => {
                        handleClickAlbum(album.id);
                      }}
                    >
                      <img
                        width="100%"
                        height="100%"
                        src={album.coverPhotoBaseUrl}
                        alt={album.title}
                      />
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          )}
          {albumId && (
            <AlbumPage id={albumId} accessToken={user.accessToken}></AlbumPage>
          )}
        </Box>
      </Box>
    </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
