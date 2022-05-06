import React, { useState } from "react";
import Page from "../components/page";

const RegisterDevice = () => {
  const [serialNumber, setSerialNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("POSTING: ", serialNumber);
  };

  return (
    <Page>
      <>
        <h1 style={{ color: "green" }}>Register new device</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "35%",
          }}
        >
          <input
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder="Enter serial number"
            style={{
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "2px solid green",
              color: "green",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              appearance: "none",
              border: "none",
              backgroundColor: "transparent",
              color: "green",
            }}
          >
            {"REGISTER DEVICE >"}
          </button>
        </form>
      </>
    </Page>
  );
};

export default RegisterDevice;
