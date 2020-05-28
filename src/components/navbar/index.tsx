import React, { useState } from "react";
import styled from "styled-components";
import Theme from "../../theme";
import Menu from "./menu";

const Navbar: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Theme>
      <Wrapper>
        <Hamburger
          className="fas fa-bars fa-2x"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />
        <Title>Barkeep</Title>
      </Wrapper>
      <Menu isOpen={menuIsOpen} />
    </Theme>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
`;

const Title = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 500;
  margin-right: 24px;
`;

const Hamburger = styled.div`
  margin-left: 16px;
  color: white;
`;

export default Navbar;
