import styled from "styled-components";

import { ReactComponent as IconOne } from "../assets/IconOne.svg";
import { ReactComponent as IconTwo } from "../assets/IconTwo.svg";
import { ReactComponent as IconThree } from "../assets/IconThree.svg";

import { climateData } from "../api/climate";

const StyledMain = styled.main`
  background-color: black;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const GridItem = styled.div`
  display: flex;
  width: 25rem;
  min-height: 5rem;
  color: ${(props) => props.theme.green};
`;

const GridItemInformation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.span`
  font-weight: bold;
`;

const icons = [IconOne, IconTwo, IconThree];

const getRandomIcon = (status) => {
  const rand = Math.floor(Math.random() * 3 + 1) - 1;
  const Icon = icons[rand];

  const StyledIcon = styled(Icon)`
    height: 5rem;
    fill: ${(props) => (props.status === "stable" ? "green" : "red")};
  `;

  return <StyledIcon status={status} />;
};

const Main = () => {
  return (
    <StyledMain>
      <Grid>
        {climateData.map((item) => {
          return (
            <GridItem key={item.assetId}>
              {getRandomIcon(item.status)}
              <div style={{ width: "100%", marginLeft: "1rem" }}>
                <GridItemInformation>
                  <Label>Factory Floor: </Label>
                  <span>{item.factoryFloor}</span>
                </GridItemInformation>

                <GridItemInformation>
                  <Label>Status: </Label>
                  <span>{item.status}</span>
                </GridItemInformation>
                <GridItemInformation>
                  <Label>Modbus: </Label>
                  <span>{item.modbus}</span>
                </GridItemInformation>
                <GridItemInformation>
                  <Label>Node: </Label>
                  <span>{item.node}</span>
                </GridItemInformation>
              </div>
            </GridItem>
          );
        })}
      </Grid>
    </StyledMain>
  );
};

export default Main;
