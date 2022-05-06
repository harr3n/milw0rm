import styled from "styled-components";

import format from "date-fns/format";

const StyledSidebar = styled.div`
  background-color: black;
  border-right: 1px solid ${(props) => props.theme.green};
`;

const Table = styled.table`
  color: ${(props) => props.theme.green};
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;

const Sidebar = ({ devices }) => {
  console.log(devices);
  return (
    <StyledSidebar>
      <Table>
        <thead>
          <tr>
            <TableCell as="th">ID</TableCell>
            <TableCell as="th">Centrifuge</TableCell>
            <TableCell as="th">Rotations</TableCell>
            <TableCell as="th">Temperature</TableCell>
            <TableCell as="th">Humidity</TableCell>
            <TableCell as="th">Pressure</TableCell>
            <TableCell as="th">Updated</TableCell>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.assetID}>
              <TableCell>{device.assetID}</TableCell>
              <TableCell>{device.centrifuge}</TableCell>
              <TableCell>{device.rotations}</TableCell>
              <TableCell>{device.temperature}</TableCell>
              <TableCell>{device.humidity}</TableCell>
              <TableCell>{device.pressure}</TableCell>
              <TableCell>{formatTimestamp(device.lastReportedTime)}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </StyledSidebar>
  );
};
export default Sidebar;

const formatTimestamp = (timestamp) => {
  return format(new Date(timestamp), "yyyy-MM-dd HH:mm:ss");
};
