import React from "react";
import { Post } from "../api/posts/mocks";
import { lighten } from "polished";
import styled from "styled-components";
import { formatDistance } from "date-fns";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    y: [-40, 0],
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

interface IProps {
  post: Post;
}

const UserPost: React.FC<IProps> = ({ post }) => {
  return (
    <motion.div variants={variants}>
      <TimeDifference>
        {formatDistance(new Date(post.date), new Date(), {
          addSuffix: true,
        })}
      </TimeDifference>
      <Wrapper>
        <User>
          <Avatar className="fas fa-user-circle fa-4x" />
        </User>
        <InfoSection>
          <Username>{post.username}</Username>
          <Section>
            <Icon className="fas fa-wine-bottle" />
            <PostItem>{post.bottle}</PostItem>
          </Section>
          <Section>
            <Icon className="fas fa-map-marked-alt" />
            <PostItem>{post.location}</PostItem>
          </Section>
          <Section>
            <Icon className="fas fa-calendar-alt" />
            <PostItem style={{ marginRight: 16 }}>{post.date}</PostItem>
            <Icon className="fas fa-money-bill" />
            <PostItem>${post.price}</PostItem>
          </Section>
        </InfoSection>
      </Wrapper>
    </motion.div>
  );
};

export default UserPost;

const Wrapper = styled(motion.div)`
  display: flex;
  height: auto;
  background: ${(props) => lighten(0.1, props.theme.colors.secondary)};
  border-radius: 4px;
  margin: 8px 12px;
  margin-top: 4px;
  padding: 4px 0;
  align-items: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086);
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostItem = styled.div`
  color: white;
  font-size: 16px;
  text-align: center;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

const Avatar = styled.div`
  color: white;
  margin-bottom: 4px;
  margin-right: 20px;
`;

const Username = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Icon = styled.div`
  color: white;
  margin-right: 8px;
`;

const TimeDifference = styled.div`
  color: white;
  text-align: end;
  margin-right: 12px;
  margin-top: 8px;
`;
