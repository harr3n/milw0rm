import React, { useState } from "react";
import Page from "../components/page";
import styled from "styled-components";

const Heading = styled.h1`
  color: ${(props) => props.theme.green};
`;

const Input = styled.input`
  border: none;
  backgroundcolor: transparent;
  borderbottom: 2px solid ${(props) => props.theme.green};
  color: ${(props) => props.theme.green};
  outline: none;
`;

const Submit = styled.button`
  appearance: none;
  border: none;
  backgroundcolor: transparent;
  color: ${(props) => props.theme.green};
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
