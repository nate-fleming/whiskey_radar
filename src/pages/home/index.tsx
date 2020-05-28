import React from "react";
import styled from "styled-components";

const Home: React.FC = () => {
  return <Title>Barkeep</Title>;
};

export default Home;

const Title = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;
