import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const linkVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

interface IProps {
  isOpen: boolean;
  closeMenu: any
}

const Menu: React.FC<IProps> = ({ isOpen , closeMenu }) => {
  return (
    <Wrapper
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Card>
        <LinkWarpper variants={linkVariants}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </LinkWarpper>
        <LinkWarpper variants={linkVariants}>
          <NavLink to="/my-bottles" onClick={closeMenu}>My Saved Bottles</NavLink>
        </LinkWarpper>
        <LinkWarpper variants={linkVariants}>
          <NavLink to="/radar" onClick={closeMenu}>Map</NavLink>
        </LinkWarpper>
      </Card>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  border-bottom-right-radius: 8px;
  margin-top: 60px;
`;

const LinkWarpper = styled(motion.div)`
  margin-bottom: 12px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 24px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
