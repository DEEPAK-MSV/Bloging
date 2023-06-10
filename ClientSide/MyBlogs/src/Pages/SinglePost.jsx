import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

function SinglePost() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${postId}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        console.log('Failed to fetch post');
      }
    } catch (error) {
      console.log('Error occurred while fetching post:', error);
    }
  };

  if (!post) {
    return (
      <main className="flex flex-col justify-center items-center w-full h-full overflow-auto">
        <div className="mt-16"></div>
        <h1 className="text-2xl font-semibold text-center uppercase">
          Loading...
        </h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <div className="mt-16"></div>
      <div className="w-full h-full flex justify-center items-center space-y-3 flex-col">
        <div>
          <h1 className="font-bold text-3xl font-serif">{post.heading}</h1>
        </div>
        <div>
          <img src={`http://localhost:3000/image/${post.imageUrl}`} alt="Post" />
          <div className="flex w-full justify-end">
            <h1 className="text-sm text-gray-400 font-mono">
              - posted by {post.aname}
            </h1>
          </div>
        </div>
        <div className="w-full md:w-4/6 lg:w-5/6 h-full px-5">
          <p className='whitespace-pre-wrap text-xl font-semobold'>{post.content}</p>
        </div>
      </div>
    </main>
  );
}

export default SinglePost;
