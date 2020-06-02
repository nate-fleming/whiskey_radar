import  {mockPosts } from './mocks/index'

export const getPosts = () => {
    const sortedPosts = mockPosts.sort((a,b) => Date.parse(b.date) - Date.parse(a.date))
    return sortedPosts;
}