import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Jumbotron,
  Row,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
// import { openNewTicket } from "./addTicketAction";
// import { shortText } from "../../utils/validation";
// import { restSuccessMSg } from "./addTicketSlicer";

import "./add-ticket-form.style.css";

const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};

export const AddTicketForm = ({
  handleOnChange,
  handleOnSubmit,
  frmDt,
  frmDataError,
}) => {
  console.log(frmDt);
  // const [state, setstate] = useState(initialState);
  //   const dispatch = useDispatch();

  //   const {
  //     user: { name },
  //   } = useSelector((state) => state.user);

  //   const { isLoading, error, successMsg } = useSelector(
  //     (state) => state.openTicket
  //   );

  //   const [frmData, setFrmData] = useState(initialFrmDt);
  //   const [frmDataError, setFrmDataError] = useState(initialFrmError);

  //   useEffect(() => {
  //     return () => {
  //       successMsg && dispatch(restSuccessMSg());
  //     };
  //   }, [frmData, frmDataError]);

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //     setFrmData({
  //       ...frmData,
  //       [name]: value,
  //     });
  // };

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();

  //     setFrmDataError(initialFrmError);

  //     const isSubjectValid = await shortText(frmData.subject);

  //     setFrmDataError({
  //       ...initialFrmError,
  //       subject: !isSubjectValid,
  //     });

  //     dispatch(openNewTicket({ ...frmData, sender: name }));
  // };

  return (
    <Jumbotron className="mt-3 add-new-ticket bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <div>
        {/* {error && <Alert variant="danger">{error}</Alert>}
        {successMsg && <Alert variant="primary">{successMsg}</Alert>}
        {isLoading && <Spinner variant="primary" animation="border" />} */}
      </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              //   value={frmData.subject}
              value={frmDt.subject}
              // minLength="3"
              maxLength="100"
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {frmDataError.subject && "Subject is required!"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              //   value={frmData.issueDate}
              value={frmDt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            // value={frmData.message}
            value={frmDt.message}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Open Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};

// AddTicketForm.propTypes = {
//   handleOnSubmit: PropTypes.func.isRequired,
//   handleOnChange: PropTypes.func.isRequired,
//   frmDt: PropTypes.object.isRequired,
//   frmDataErro: PropTypes.object.isRequired,
// };
