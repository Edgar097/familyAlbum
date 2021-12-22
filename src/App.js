import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContext } from "./utils/UserContext";
import { theme } from "./styles/general";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(false);
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="container">
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              {routes.map(({ path, component: Component, name }) => (
                <Route key={name} path={path} element={<Component />} />
              ))}
            </Routes>
          </UserContext.Provider>
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
