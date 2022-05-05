import styled from "styled-components";

import { ReactComponent as IconOne } from "../assets/IconOne.svg";
import { ReactComponent as IconTwo } from "../assets/IconTwo.svg";
import { ReactComponent as IconThree } from "../assets/IconThree.svg";

const StyledMain = styled.main`
  background-color: black;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const GridItem = styled.div`
  width: 25rem;
  height: 5rem;
`;

const Main = () => {
  return (
    <StyledMain>
      <Grid>
        <GridItem>
          <IconOne style={{ height: "5rem" }} />
        </GridItem>
        <GridItem>
          <IconTwo style={{ height: "5rem" }} />
        </GridItem>
        <GridItem>
          <IconThree style={{ height: "5rem" }} />
        </GridItem>
      </Grid>
    </StyledMain>
  );
};

export default Main;
