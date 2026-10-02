import { useMatch } from "react-router-dom";
import style from "./blogpostpage.module.scss";
import { posts } from "../../data";
import Hero from "./Hero.tsx/Hero";

const BlogPostPage = () => {
  const match = useMatch("/blog/:id");
	const postId = match?.params.id;
	
	  if (!postId) {
		return null;
	  }
	
	  const numericId = parseInt(postId, 10);
	
	  const postItem = posts.find((post) => Number(post.id) === numericId);
	
	  if (!postItem) {
		return null;
	  }
	return (
		<>
			<Hero title={postItem.title} category={postItem.category} date={postItem.date} autor={postItem.autor } />
		</>
		);
};

export default BlogPostPage;
