import { useGetPostsQuery } from '../redux/slices'

export const Posts = () => {
  const { data: posts, isSuccess } = useGetPostsQuery()

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {isSuccess && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}
