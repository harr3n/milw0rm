import styled from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";

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
