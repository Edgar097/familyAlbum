import React, { Component, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContext } from "./utils/UserContext";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState("notRoot");
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <main className="container">
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            {routes.map(({ path, component: Component, name, ...args }) => (
              <Route key={name} path={path} element={<Component />} />
            ))}
          </Routes>
        </UserContext.Provider>
      </main>
    </QueryClientProvider>
  );
}

export default App;
