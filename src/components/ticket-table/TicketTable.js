import React from "react";
// import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Table } from "react-bootstrap";

import { Link } from "react-router-dom";

export const TicketTable = ({ tickets }) => {
  //   const { searchTicketList, isLoading, error } = useSelector(
  //     (state) => state.tickets
  //   );
  //   if (isLoading) return <h3>Loading ...</h3>;
  //   if (error) return <h3>{error}</h3>;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        {/* {searchTicketList.length ? (
          searchTicketList.map((row) => ( */}
        {tickets.length ? (
          tickets.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>
                <Link to={`/ticket/${row._id}`}>{row.subject}</Link>
              </td>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
              {/* <td>{row.openAt && new Date(row.openAt).toLocaleString()}</td> */}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};
