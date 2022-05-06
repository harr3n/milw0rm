import React, { useState } from "react";
import Page from "../components/page";
import styled from "styled-components";

const Heading = styled.h1`
  color: ${(props) => props.theme.green};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid ${(props) => props.theme.green};
  color: ${(props) => props.theme.green};
  outline: none;
  height: 2rem;
  font-size: 20px;
  font-weight: bold;
`;

const Submit = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.green};
  font-weight: bold;
  font-size: 18px;
`;

const RegisterDevice = () => {
  const [serialNumber, setSerialNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("POSTING: ", serialNumber);
  };

  return (
    <Page>
      <>
        <Heading>Register new device</Heading>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "35%",
          }}
        >
          <Input
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            placeholder="Enter serial number"
          />

          <Submit type="submit">{"REGISTER DEVICE >"}</Submit>
        </form>
      </>
    </Page>
  );
};

export default RegisterDevice;
