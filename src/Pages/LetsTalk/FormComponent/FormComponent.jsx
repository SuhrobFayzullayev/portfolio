// React hooks
import React, { useRef, useState } from "react";

// Libraries
import Recaptcha from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { Button, Col, Row, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { Animated } from "react-animated-css";

// Form initial value
const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export default function FormComponent() {
  // Form state and  send email progress
  const [value, setValue] = useState(initialValue);
  const [send, setSend] = useState(false);
  const reCaptcha = () => setSend(true);
  const form = useRef();

  // Form change func
  const changeValue = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  // Notification func
  const notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  };

  // Send email Func
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hqo9r9v",
        "template_71mgtkh",
        form.current,
        "KK-fqKgD--zZrlj1S"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setValue(initialValue);
    notify();
  };
  return (
    <Animated animationIn="slideInLeft" className="col-md-6 left-side mb-4 mx-4">
      <Form onSubmit={sendEmail} ref={form}>
        <Row>
          <h4 className="text-center text-white">Get In Touch</h4>
          <Col>
            <Form.Group className="mb-3 p-0" controlId="formBasicEmail">
              <Form.Control
                value={value.firstName}
                onChange={(e) => changeValue(e)}
                required
                type="text"
                placeholder="First Name"
                name="firstName"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3 p-0" controlId="formBasicEmail">
              <Form.Control
                type="text"
                required
                placeholder="Last Name"
                name="lastName"
                value={value.lastName}
                onChange={(e) => changeValue(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 p-0" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                required
                name="email"
                value={value.email}
                onChange={(e) => changeValue(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 p-0" controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="subject"
                value={value.subject}
                onChange={(e) => changeValue(e)}
                placeholder="Subject"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 p-0" controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your Message"
                required
                name="message"
                value={value.message}
                onChange={(e) => changeValue(e)}
              />{" "}
            </Form.Group>
          </Col>
        </Row>
        <Row className="">
          <Recaptcha
            onChange={reCaptcha}
            className="recaptcha"
            sitekey="6Lei19MiAAAAAEzO4Ydlyp7CrGo6M6wUkT-aJNGn"
            size="normal"
          />
        </Row>

        <Row className="d-flex justify-content-center align-items-center">
          <Button
            disabled={!send}
            variant="danger"
            className="mt-3 mb-1 send-btn"
            type="submit"
          >
            Send Message
          </Button>
        </Row>
      </Form>
    </Animated>
  );
}
