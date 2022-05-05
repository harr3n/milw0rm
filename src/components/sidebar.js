import styled from "styled-components";
import { climateData } from "../api/climate";

import format from "date-fns/format";

const StyledSidebar = styled.div`
  background-color: black;
  border-right: 1px solid green;
`;

const Table = styled.table`
  color: green;
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Table>
        <thead>
          <tr>
            <TableCell as="th">Asset ID</TableCell>
            <TableCell as="th">Centrifuge</TableCell>
            <TableCell as="th">Rotations</TableCell>
            <TableCell as="th">Temperature</TableCell>
            <TableCell as="th">Humidity</TableCell>
            <TableCell as="th">Pressure</TableCell>
            <TableCell as="th">Time</TableCell>
          </tr>
        </thead>
        <tbody>
          {climateData.map((item) => (
            <tr key={item.assetId}>
              <TableCell>{item.assetId}</TableCell>
              <TableCell>{item.centrifuge}</TableCell>
              <TableCell>{item.rotations}</TableCell>
              <TableCell>{`${item.temperature} °C`}</TableCell>
              <TableCell>{item.humidity}</TableCell>
              <TableCell>{item.pressure}</TableCell>
              <TableCell>{formatTimestamp(item.time)}</TableCell>
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
