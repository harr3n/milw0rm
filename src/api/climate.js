import axios from "axios";

export const climateData = [
  {
    assetId: "PLC001",
    assetName: "PLC001",
    centrifuge: "C-02",
    rotations: 1027,
    temperature: "25.5",
    humidity: "50.5",
    pressure: "100.5",
    time: "2019-01-01T00:00:00.000Z",
    factoryFloor: "A-12",
    status: "stable",
    modbus: "active",
    node: "connected",
  },
  {
    assetId: "PLC002",
    assetName: "PLC002",
    centrifuge: "C-04",
    rotations: 1233,
    temperature: "22.5",
    humidity: "55.5",
    pressure: "101.5",
    time: "2019-01-01T00:00:00.000Z",
    factoryFloor: "A-12",
    status: "error",
    modbus: "active",
    node: "connected",
  },
  {
    assetId: "PLC003",
    assetName: "PLC003",
    centrifuge: "C-07",
    rotations: 2344,
    temperature: "26.5",
    humidity: "51.5",
    pressure: "123.5",
    time: "2019-01-01T00:00:00.000Z",
    factoryFloor: "A-12",
    status: "stable",
    modbus: "active",
    node: "connected",
  },
  {
    assetId: "PLC004",
    assetName: "PLC004",
    centrifuge: "C-99",
    rotations: 1023,
    temperature: "22.5",
    humidity: "51.78",
    pressure: "101.5",
    time: "2019-01-01T00:00:00.000Z",
    factoryFloor: "A-12",
    status: "stable",
    modbus: "active",
    node: "connected",
  },
];

const getClimateData = () => {
  return climateData;
};

export default getClimateData;

export const getAllDevices = async () => {
  const { data } = await axios("http://40.113.40.135/api/assets/");
  return data;
};

export const registerDevice = async (serialNumber, assetID) => {
  const data = {
    serialNumber,
    assetID,
  };
  const res = await axios.post(
    "http://40.113.40.135/api/assets/registerDevice",
    data
  );

  console.log(res);
  return res;
};
