import React from "react";
// import { useDispatch } from "react-redux";
// import { filterSearchTicket } from "../../pages/ticket-list/ticketsAction";
import PropTypes from "prop-types";
import { Form, Row, Col } from "react-bootstrap";

export const SearchForm = ({ handleOnChange, str }) => {
  console.log(str);
  //   const dispatch = useDispatch();

  //   const handleOnChange = (e) => {
  //     const { value } = e.target;

  // dispatch(filterSearchTicket(value));
  //   };

  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
            <Form.Control
              name="searchStr"
              onChange={handleOnChange}
              placeholder="Search ..."
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
