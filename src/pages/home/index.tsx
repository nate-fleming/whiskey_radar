import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getPosts } from "../../api/posts";

import Loader from "../../components/loaders/radarLoader";
import PostSection from "./post";
import { Post } from "../../api/posts/mocks";
import { motion } from "framer-motion";

const variants = {
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const feed = setTimeout(() => {
      setPosts(getPosts);
      setLoading(false);
    }, 4000);
    return () => clearTimeout(feed);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Feed initial="hidden" animate="visible" variants={variants}>
          {posts.map((post) => (
            <PostSection key={post.id} post={post} />
          ))}
        </Feed>
      )}
    </>
  );
};

export default Home;

const Feed = styled(motion.div)`
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
`;
