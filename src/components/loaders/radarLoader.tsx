import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// const dotAnimation = {
//   opacity: [0,1,0]
// }

// const dotTransition = {
//   duration: 1,
//   ease: "easeInOut",
//   loop: Infinity,
//   delay: 2.2,
//   repeatDelay: 1
// }


const RadarLoader: React.FC = () => {
  return (
    <Wrapper>
      <Circle
          animate={{
            scale: [1, 8, 16, 24, 32],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            // times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1
          }}
      >
      </Circle>
      <Icon 
        className='fas fa-wine-bottle fa-4x'
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          loop: Infinity,
          delay: 1,
          repeatDelay: 1
        }}
      />
      {/* <Dot
        animate={dotAnimation}
        transition={dotTransition}
      />
      <Dot
      style={{left: '38%', top: '60%'}}
        animate={dotAnimation}
        transition={dotTransition}
      />
      <Dot
      style={{left: '60%', top: '38%'}}
        animate={dotAnimation}
        transition={dotTransition}
      />
      <Dot
      style={{left: '64%', top: '70%'}}
        animate={dotAnimation}
        transition={dotTransition}
      />
      <Dot
      style={{left: '64%', top: '40%'}}
        animate={dotAnimation}
        transition={dotTransition}
      />
      <Dot
      style={{left: '28%', top: '24%'}}
        animate={dotAnimation}
        transition={dotTransition}
      /> */}
    </Wrapper>
  );
};

export default RadarLoader;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
  width: 100vw;
  background: ${props => props.theme.colors.secondary};
  overflow: hidden;
`;

const Circle = styled(motion.div)`
  border: 1px solid white;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  z-index: 1;
`;

const Icon = styled(motion.div)`
  position: absolute;
  left: auto;
  top: auto;
  color: white;
`;

const Dot = styled(motion.div)`
  height: 8px;
  width: 8px; 
  background: white;
  border-radius: 50%;
  position: absolute;
  left: 40%;
  top: 40%;
`;