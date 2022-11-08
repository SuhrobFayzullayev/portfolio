// Libraries
import { Row, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

// Styled Component
import { LetsTalkWrapper } from "./LetsTalkWrapper";

// Components
import FormComponent from "./FormComponent";
import Cards from "./Cards";

export default function LetsTalk() {
  return (
    <div>
      <LetsTalkWrapper>
        <Container>
          <h1 className="text-center text-white mb-4 fw-bold">Let's Talk</h1>
          <Row className="px-2 d-flex">
            <FormComponent />
            <Cards />
          </Row>
        </Container>
      </LetsTalkWrapper>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
