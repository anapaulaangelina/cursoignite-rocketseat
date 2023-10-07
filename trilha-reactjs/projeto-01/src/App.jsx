import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post
        author="Diego Fernandes"
        content="L Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic aliquam, sed deserunt molestiae, aliquid consequatur omnis harum ipsam iste neque quidem debitis dignissimos fugiat iure repellendus nisi rerum optio. "
      />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
