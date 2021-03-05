import React from "react";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/DashboardPage";
import Entry from "./pages/entry/Entry";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";

function App() {
  return (
    <div className="app">
      {/* <Entry /> */}
      <DefaultLayout>
        <AddTicket />
        {/* <Dashboard /> */}
      </DefaultLayout>
    </div>
  );
}

export default App;
