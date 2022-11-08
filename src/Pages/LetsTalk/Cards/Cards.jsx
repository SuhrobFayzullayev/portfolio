// React hooks
import React, { useContext } from "react";

// Libraries
import { Card, Col } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

// Icons
import { AiOutlineGlobal } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { TfiHeadphoneAlt } from "react-icons/tfi";

// Data Context
import Data from "../../../Context/Data";

export default function Cards() {
  // data
  const data = useContext(Data);
  const { address, email, phone } = data.letIsTalk;
  return (
    <Col className="right-side m-0 p-0" md={5}>
      <Slide direction="right" className="m-0 p-0">
        <Card>
          <Card.Header>{address}</Card.Header>
          <Card.Body>
            <div className="icon">
              <AiOutlineGlobal className="text-danger" />
            </div>
            <Card.Text>Official Address</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>{email}</Card.Header>
          <Card.Body>
            <div className="icon">
              <GoMail className="text-danger" />
            </div>
            <Card.Text>Official Mail</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>{phone}</Card.Header>
          <Card.Body>
            <div className="icon">
              <TfiHeadphoneAlt className="text-danger" />
            </div>
            <Card.Text>Official Phone</Card.Text>
          </Card.Body>
        </Card>
      </Slide>
    </Col>
  );
}
