import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getUserBottles } from "../../api/bottles";
import { Bottle } from "../../api/bottles/mocks";
import Loader from "../../components/loaders/radarLoader";
import styled from "styled-components";
import { motion } from "framer-motion";
import { mockBottlesResponse } from "../../api/bottles/mocks/mockBottles";

const MyBottles: React.FC = () => {
  const [bottles, setBottles] = useState<Bottle[]>([]);
  const [bottleOptions, setBottleOptions] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const userBottles = setTimeout(() => {
      let bottleOptions: any = [];
      mockBottlesResponse.forEach((bottle) =>
        bottleOptions.push({ value: bottle.id, label: bottle.title })
      );
      setBottles(getUserBottles);
      setBottleOptions(bottleOptions);
      setLoading(false);
    }, 4000);
    return () => clearTimeout(userBottles);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Bottles>
          <Select options={bottleOptions} />
          {bottles.map((bottle) => (
            <Bot key={bottle.id}>
              <Name>{bottle.name}</Name>
              <DeleteIcon className="fas fa-trash-alt" />
            </Bot>
          ))}
        </Bottles>
      )}
    </>
  );
};

export default MyBottles;

const Bottles = styled(motion.div)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
`;

const Bot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 12px;
`;

const Name = styled.div`
  color: white;
  font-size: 16px;
`;

const DeleteIcon = styled.div`
  width: auto;
  color: red;
`;
