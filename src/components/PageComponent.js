import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/milwormlogo.jpg";

const Wrapper = styled.div`
  height: 100vh;
  background-color: black;
`;

const Image = styled.img`
  cursor: pointer;
`;

const Page = ({ children }) => {
  const nav = useNavigate();

  return (
    <Wrapper>
      <Image src={logo} alt="lol" onClick={() => nav("/", { replace: true })} />
      {children}
    </Wrapper>
  );
};

export default Page;
