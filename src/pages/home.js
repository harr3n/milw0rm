import styled from "styled-components";
import Main from "../components/main";
import Sidebar from "../components/sidebar";
import logo from "../assets/milwormlogo.jpg";
import Page from "../components/page";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 100vh;
  border-top: 10px solid green;
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
