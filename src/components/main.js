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
  height: 5rem;
  color: green;
`;

const GridItemInformation = styled.div`
  display: flex;
  justify-content: "space-between";
  align-items: "space-between";
`;

const icons = [IconOne, IconTwo, IconThree];

const getRandomIcon = () => {
  const rand = Math.floor(Math.random() * 3 + 1) - 1;
  const Icon = icons[rand];
  return <Icon style={{ height: "5rem" }} />;
};

const Main = () => {
  return (
    <StyledMain>
      <Grid>
        {climateData.map((item) => (
          <GridItem key={item.assetId}>
            {getRandomIcon()}
            <GridItemInformation>
              <span>Asset ID: </span>
              <span>{item.assetId}</span>
            </GridItemInformation>
          </GridItem>
        ))}
      </Grid>
    </StyledMain>
  );
};

export default Main;
