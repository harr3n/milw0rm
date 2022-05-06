import React, { useState } from "react";
import Page from "../components/PageComponent";
import styled from "styled-components";
import { registerDevice } from "../api/climate";

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

const StatusMessage = styled.span`
  color: ${(props) =>
    props.type === "error" ? props.theme.red : props.theme.green};
`;

const RegisterDevice = () => {
  const [serialNumber, setSerialNumber] = useState("");
  const [assetID, setAssetID] = useState("");
  const [status, setStatus] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus();

    if (!serialNumber || !assetID) {
      setStatus({
        type: "error",
        message: "Fill in both serial number and asset id",
      });
      return;
    }

    try {
      await registerDevice(serialNumber, assetID);
      setStatus({
        type: "success",
        message: "Successfully registered new device",
      });
      setSerialNumber("");
      setAssetID("");
    } catch (e) {
      setStatus({
        type: "error",
        message: "Could not register new device. Try again.",
      });
    }
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

          <Input
            type="text"
            value={assetID}
            onChange={(e) => setAssetID(e.target.value)}
            placeholder="Enter asset ID"
          />

          <Submit type="submit">{"REGISTER DEVICE >"}</Submit>
          {status && (
            <StatusMessage type={status?.type}>{status?.message}</StatusMessage>
          )}
        </form>
      </>
    </Page>
  );
};

export default RegisterDevice;
