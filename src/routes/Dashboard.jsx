import React, { useContext, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "react-query";
import { fetchData } from "../queries/selects";
import { makeStyles } from "@mui/styles";
import styles from "../styles/general";
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
  const navigate = useNavigate();
  const { data: ticketData, status: ticketsLoading } = useQuery("tickets", () =>
    fetchData("/api/tickets")
  );
  const { data: queuesData, status: queuesLoading } = useQuery("queues", () =>
    fetchData("/api/queues")
  );
  const { data: queuesTotal, status: totalsLoading } = useQuery(
    "queuesTotals",
    () => fetchData("/api/queues/totals")
  );
  const { data: queuesServiceTotal, status: totalsServiceLoading } = useQuery(
    "queuesServiceTotals",
    () => fetchData("/api/queues/services/totals")
  );
  const classes = useStyles();

  useEffect(() => {
    if (user !== "LogIn") navigate("/", { replace: true });
  }, [user]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box className={classes.dashboard}>
        <CssBaseline />
        <TopBar />
        <Box className={classes.dashBoardBackground} component="main">
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 400,
                    width: "100%",
                  }}
                >
                  {totalsLoading === "loading" && (
                    <Box
                      sx={{
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  )}
                  {totalsLoading === "success" && (
                    <Chart data={queuesTotal || []}>
                      <PieSeries
                        valueField="Total"
                        argumentField="Queue"
                        innerRadius={0.6}
                      />
                      <Title text="Queues" />
                      <Legend />
                      <Animation />
                    </Chart>
                  )}
                </Paper>
              </Grid>
              {/* Ticket Table */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {ticketsLoading === "loading" && (
                    <Box
                      sx={{
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  )}

                  {ticketsLoading === "success" && (
                    <React.Fragment>
                      <MasterTable
                        queues={queuesData || []}
                        tickets={ticketData}
                        services={queuesServiceTotal}
                      />
                    </React.Fragment>
                  )}
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
