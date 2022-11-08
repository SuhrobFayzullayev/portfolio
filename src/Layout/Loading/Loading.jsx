// Libraries
import { PacmanLoader } from "react-spinners";

export default function Loading(loading) {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#070640" }}
      className="m-0 pe-3 w-100 d-flex justify-content-center align-items-center"
    >
      <div className="pe-5 mb-3 me-5">
        {/* Animation Progress */}
        <PacmanLoader
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          className="mx-auto me-5 mb-5"
          color="#ffffff"
        />
      </div>
    </div>
  );
}
