import styled from "styled-components";
import Main from "../components/Dashboard";
import Sidebar from "../components/SideTable";
import Page from "../components/PageComponent";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 100vh;
  border-top: 10px solid ${(props) => props.theme.green};
`;

const Home = () => {
  return (
    <Page>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Page>
  );
};

export default Home;
