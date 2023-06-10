import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.log('Failed to fetch posts');
      }
    } catch (error) {
      console.log('Error occurred while fetching posts:', error);
    }
  };

  const getShortenedContent = (content) => {
  const words = content.split(' ');
  const shortenedWords = words.slice(0, 50);
  const shortenedContent = shortenedWords.join(' ');

  if (words.length > 50) {
    return `${shortenedContent}...`;
  }

  return shortenedContent;
};


  if (!posts || posts.length === 0) {
    return (
      <main className="flex flex-col justify-center items-center w-full h-full overflow-auto">
        <div className="mt-16"></div>
        <h1 className="text-2xl font-semibold text-center uppercase">
          No posts yet! Post your blog.
        </h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <div className="mt-16"></div>
      {posts.map((post) => (
        <div key={post.id} className="flex justify-center items-center w-full ">
          <div className="w-full flex flex-col m-2 bg-white hover:shadow-2xl p-3 rounded-lg shadow-sm space-y-3 justify-start items-start">
            <div className="flex flex-col lg:flex-row space-x-3">
              <div>
                <img
                  className="h-full w-full rounded-lg"
                  src={`http://localhost:3000/image/${post.imageUrl}`}
                  //src={post.imageUrl}
                  alt="Post"
                />
              </div>
              <div className="flex flex-col justify-between items-start">
                <h1 className="font-semibold whitespace-nowrap">
                  {post.heading}
                </h1>
                <div className="flex w-full justify-end">
                  <h1 className="text-sm text-gray-400 font-mono">
                    - posted by {post.aname}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium whitespace-pre-wrap">
                {getShortenedContent(post.content)}
              </p>
            </div>
            <div className="w-full flex justify-end">
              <Link to={`/Blogpage/${post.id}`}>
                <button className="bg-indigo-600 rounded p-2">
                  <h1 className="uppercase text-white font-bold">
                    Read more
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Home;
