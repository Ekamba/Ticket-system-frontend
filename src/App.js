import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { PrivateRoute } from "./components/private-routes/PrivateRoute.comp";
import { Dashboard } from "./pages/dashboard/DashboardPage";
// import { UserVerification } from "./pages/user-verification/UserVerification.page";
import Entry from "./pages/entry/Entry";
// import { Registration } from "./pages/registration/Registration.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          {/* <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/verification/:_id/:email">
            <UserVerification />
          </Route> */}

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/add-ticket">
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute path="/tickets">
            <TicketLists />
          </PrivateRoute>
          <PrivateRoute path="/ticket/:tId">
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
