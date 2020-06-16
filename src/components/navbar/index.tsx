import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./menu";

const Navbar: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClose = () => setMenuIsOpen(false);

  return (
    <>
      <Wrapper>
        <Hamburger
          className="fas fa-bars fa-2x"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />
        <Title>Whiskey Radar</Title>
      </Wrapper>
      <Menu closeMenu={handleClose} isOpen={menuIsOpen} />
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  z-index: 1000;
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
