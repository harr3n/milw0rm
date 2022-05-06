import { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "../components/Dashboard";
import Sidebar from "../components/SideTable";
import Page from "../components/PageComponent";
import { getAllDevices } from "../api/climate";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr;
  height: 100vh;
  border-top: 10px solid ${(props) => props.theme.green};
`;

const Home = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getAllDevices().then((res) => setDevices(res));
  }, []);

  return (
    <Page>
      <Wrapper>
        <Sidebar devices={devices} />
        <Main devices={devices} />
      </Wrapper>
    </Page>
  );
};

export default Home;
