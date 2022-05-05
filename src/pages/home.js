import styled from "styled-components";
import Main from "../components/main";
import Sidebar from "../components/sidebar";
import logo from "../assets/milwormlogo.jpg";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 100vh;
  border-top: 10px solid green;
`;

const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <img src={logo} alt="lol" />
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </div>
  );
};

export default Home;
