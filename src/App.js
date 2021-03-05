import React from "react";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/DashboardPage";
import Entry from "./pages/entry/Entry";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";

function App() {
  return (
    <div className="app">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <AddTicket /> */}
        {/* <Dashboard /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
