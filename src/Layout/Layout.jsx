import { useState } from "react";

// Components
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";

// Libraries
import { Outlet } from "react-router-dom";
import { Animated } from "react-animated-css";
import { Container } from "react-bootstrap";

export default function Layout() {
  // Loading state
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  setTimeout(() => {
    setVisible(false);
  }, 1500);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading ? (
        // Animation Progress
        <Animated
          animationIn="fadeIn"
          animationInDelay={300}
          isVisible={visible}
          animationOutDuration={600}
        >
          <Loading loading={loading} />
        </Animated>
      ) : (
        <>
          {/* Header Component */}
          <Header />

          {/* Main Component */}
          <Container fluid="xl">
            <Outlet />
          </Container>

          {/* Footer Component */}
          <Footer />
        </>
      )}
    </>
  );
}
