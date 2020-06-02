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
          <Username>{post.username}</Username>
        </User>
        <Section>
          <Icon className="fas fa-wine-bottle fa-2x" />
          <PostItem>{post.bottle}</PostItem>
        </Section>
        <Section>
          <Icon className="fas fa-calendar-alt fa-2x" />
          <PostItem>{post.date}</PostItem>
        </Section>
        <Section>
          <Icon className="fas fa-map-marked-alt fa-2x" />
          <PostItem>{post.location}</PostItem>
        </Section>
        <Section>
          <Icon className="fas fa-money-bill fa-2x" />
          <PostItem>${post.price}</PostItem>
        </Section>
      </Wrapper>
    </motion.div>
  );
};

export default UserPost;

const Wrapper = styled(motion.div)`
  display: flex;
  height: 120px;
  background: ${(props) => lighten(0.1, props.theme.colors.secondary)};
  border-radius: 4px;
  margin: 8px 12px;
  margin-top: 4px;
  justify-content: space-evenly;
  align-items: center;
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
`;

const Username = styled.div`
  color: white;
  font-size: 16px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
`;

const Icon = styled.div`
  color: white;
  margin-bottom: 16px;
`;

const TimeDifference = styled.div`
  color: white;
  text-align: end;
  margin-right: 12px;
  margin-top: 8px;
`;
