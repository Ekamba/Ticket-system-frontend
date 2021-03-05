import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { MessageHistory } from "../../components/message-history/MessageHistory.comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket.comp";
// import { useParams } from "react-router-dom";
import tickets from "../../assets/data/dummy-tickets.json";

// import { fetchSingleTicket, closeTicket } from "../ticket-list/ticketsAction";
// import { resetResponseMsg } from "../ticket-list/ticketsSlice";
const ticket = tickets[0];

export const Ticket = () => {
  const [message, setMessage] = useState("");
  //   const { tId } = useParams();

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("forme submit");
    // const msgObj = {
    //   message,
    //   sender: name,
    // };

    // dispatch(replyOnTicket(_id, msgObj));
    setMessage("");
  };

  useEffect(() => {}, [message]);

  //   //   const dispatch = useDispatch();
  //   const {
  //     isLoading,
  //     error,
  //     selectedTicket,
  //     replyMsg,
  //     replyTicketError,
  //   } = useSelector((state) => state.tickets);

  //   useEffect(() => {
  //     // dispatch(fetchSingleTicket(tId));

  //     return () => {
  //       //   (replyMsg || replyTicketError) && dispatch(resetResponseMsg());
  //     };
  //   }, [tId, replyMsg, replyTicketError]);

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket" />
        </Col>
      </Row>

      {/* <Row> */}
      {/* <Col> */}
      {/* {isLoading && <Spinner variant="primary" animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {replyTicketError && (
            <Alert variant="danger">{replyTicketError}</Alert>
          )}
          {replyMsg && <Alert variant="success">{replyMsg}</Alert>} */}
      {/* </Col> */}
      {/* </Row> */}
      <Row>
        <Col className="text-weight-bolder text-secondary">
          {/* <div className="subject">Subject: {selectedTicket.subject}</div> */}
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">
            Ticket Opened: {ticket.addedAt}
            {/* {selectedTicket.openAt &&
              new Date(selectedTicket.openAt).toLocaleString()} */}
          </div>
          {/* <div className="status">Status: {selectedTicket.status}</div> */}
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col className="text-right">
          <Button
            variant="outline-info"
            // onClick={() => dispatch(closeTicket(tId))}
            // disabled={selectedTicket.status === "Closed"}
            disabled={ticket.status === "Closed"}
          >
            Close Ticket
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />

          {/* {selectedTicket.conversations && ( */}

          {/* <MessageHistory msg={selectedTicket.conversations} /> */}
          {/* )} */}
        </Col>
      </Row>
      <hr />

      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
