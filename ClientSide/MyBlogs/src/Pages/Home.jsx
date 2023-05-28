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

  return (
    <main className="flex flex-col justify-center items-center w-full h-full overflow-auto">
      <div className="mt-16"></div>
      {posts.map((post) => (
        <div
          key={post.id}
          className="flex justify-center items-center m-5"
        >
          <div className="w-full lg:w-3/5 flex flex-col bg-white hover:shadow-2xl p-3 rounded-lg shadow-sm space-y-3 justify-start items-start">
            <div className="flex flex-col lg:flex-row space-x-3">
              <div>
                <img
                  className="h-full w-full rounded-lg"
                  src={post.image}
                  alt="Post"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-bold text-lg font-serif">
                  {post.header}
                </h1>
                <div className="flex w-full justify-end">
                  <h1 className="text-sm text-gray-400 font-mono">
                    - posted by {post.f_name}
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">{post.content}</p>
            </div>
            <div className="w-full flex justify-end">
              <button className="bg-indigo-600 rounded p-2">
                <Link to={`/singlepost/${post.id}`}>
                  <h1 className="uppercase text-white font-bold">
                    Read more
                  </h1>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Home;
