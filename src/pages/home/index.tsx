import React, { useState } from "react";
import styled from "styled-components";
import { posts } from '../../api/mocks/posts'

import Loader from '../../components/loaders/radarLoader'


import Post from '../../components/post'

const Home: React.FC = () => {
  const sortedPosts = posts.sort((a,b) => Date.parse(b.date) - Date.parse(a.date))
  const [isLoading, setLoading] = useState(true);
  return (
  <>
  {
    isLoading ? <Loader/> 
    : 
      <Feed>
        {sortedPosts.map(post => <Post key={post.id} post={post}/>)}
      </Feed>
  }
  </>
  )
};

export default Home;

const Title = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

