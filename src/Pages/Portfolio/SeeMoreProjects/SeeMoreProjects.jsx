// Libraries
import { Button } from "react-bootstrap";

export default function SeeMoreProjects({ setShow }) {
  return (
    <div className="project">
      <Button variant="danger" className="h4" onClick={() => setShow(true)}>
        {" "}
        See More Projects . . .
      </Button>
    </div>
  );
}
